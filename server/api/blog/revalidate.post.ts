import { getCfEnv } from "../../utils/cf-env";

interface RevalidateBody {
  slug?: string;
  locale?: "en" | "fr" | "sv" | "all";
  purgeList?: boolean;
}

const ALL_LOCALES = ["en", "fr", "sv"] as const;

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const expected = config.blogRevalidateSecret;
  if (!expected) {
    throw createError({
      statusCode: 503,
      statusMessage: "BLOG_REVALIDATE_SECRET is not configured",
    });
  }

  const auth = getRequestHeader(event, "authorization") || "";
  if (auth !== `Bearer ${expected}`) {
    throw createError({ statusCode: 401, statusMessage: "Unauthorized" });
  }

  const body = (await readBody(event)) as RevalidateBody;
  const env = getCfEnv(event);

  if (!env.BLOG_KV) {
    throw createError({
      statusCode: 503,
      statusMessage: "BLOG_KV binding unavailable in this environment",
    });
  }

  const purged: string[] = [];
  const locales: ReadonlyArray<"en" | "fr" | "sv"> =
    body.locale === "all" || !body.locale ? ALL_LOCALES : [body.locale];

  if (body.slug) {
    for (const loc of locales) {
      const key = `article:${body.slug}:${loc}`;
      await env.BLOG_KV.delete(key);
      purged.push(key);
    }
  }

  if (body.purgeList || !body.slug) {
    for (const loc of locales) {
      const key = `list:${loc}`;
      await env.BLOG_KV.delete(key);
      purged.push(key);
    }
  }

  return { revalidated: purged };
});
