import { getCfEnv } from "../../utils/cf-env";
import { fetchDevtoList, type DevtoArticleSummary } from "../../utils/devto";
import { translateText, type TargetLocale } from "../../utils/translate-markdown";

const LIST_TTL_SECONDS = 60 * 60 * 24; // 24h

function isLocale(value: unknown): value is "en" | "fr" | "sv" {
  return value === "en" || value === "fr" || value === "sv";
}

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const locale = isLocale(query.locale) ? query.locale : "en";
  const config = useRuntimeConfig();
  const username = config.devtoUsername;

  if (!username) {
    throw createError({
      statusCode: 503,
      statusMessage: "NUXT_DEVTO_USERNAME is not configured",
    });
  }

  const env = getCfEnv(event);
  const cacheKey = `list:${locale}`;

  if (env.BLOG_KV) {
    const cached = (await env.BLOG_KV.get(cacheKey, "json")) as
      | DevtoArticleSummary[]
      | null;
    if (cached) {
      return { articles: cached, cached: true };
    }
  }

  let articles = await fetchDevtoList(username);

  if (locale !== "en" && env.AI) {
    const target = locale as TargetLocale;
    articles = await Promise.all(
      articles.map(async (a) => ({
        ...a,
        title: await translateText(a.title, target, env.AI!),
        description: await translateText(a.description, target, env.AI!),
      })),
    );
  }

  if (env.BLOG_KV) {
    await env.BLOG_KV.put(cacheKey, JSON.stringify(articles), {
      expirationTtl: LIST_TTL_SECONDS,
    });
  }

  return { articles, cached: false };
});
