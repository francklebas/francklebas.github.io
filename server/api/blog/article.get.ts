import { getCfEnv } from "../../utils/cf-env";
import { fetchDevtoArticle } from "../../utils/devto";
import {
  translateMarkdown,
  translateText,
  type TargetLocale,
} from "../../utils/translate-markdown";
import { renderMarkdown } from "../../utils/render-markdown";

const ARTICLE_TTL_SECONDS = 60 * 60 * 24; // 24h

function isLocale(value: unknown): value is "en" | "fr" | "sv" {
  return value === "en" || value === "fr" || value === "sv";
}

export interface BlogArticleResponse {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  published_at: string;
  reading_time_minutes: number;
  cover_image: string | null;
  canonical_url: string;
  html: string;
  cached: boolean;
}

export default defineEventHandler(async (event): Promise<BlogArticleResponse> => {
  const query = getQuery(event);
  const slug = typeof query.slug === "string" ? query.slug : "";
  const locale = isLocale(query.locale) ? query.locale : "en";

  if (!slug) {
    throw createError({ statusCode: 400, statusMessage: "Missing slug" });
  }

  const config = useRuntimeConfig();
  const username = config.devtoUsername;
  if (!username) {
    throw createError({
      statusCode: 503,
      statusMessage: "NUXT_DEVTO_USERNAME is not configured",
    });
  }

  const env = getCfEnv(event);
  const cacheKey = `article:${slug}:${locale}`;

  if (env.BLOG_KV) {
    const cached = (await env.BLOG_KV.get(
      cacheKey,
      "json",
    )) as BlogArticleResponse | null;
    if (cached) {
      return { ...cached, cached: true };
    }
  }

  const article = await fetchDevtoArticle(username, slug);

  let title = article.title;
  let description = article.description;
  let bodyMd = article.body_markdown;

  if (locale !== "en" && env.AI) {
    const target = locale as TargetLocale;
    title = await translateText(title, target, env.AI);
    description = await translateText(description, target, env.AI);
    bodyMd = await translateMarkdown(bodyMd, target, env.AI);
  }

  const response: BlogArticleResponse = {
    slug: article.slug,
    title,
    description,
    tags: article.tags,
    published_at: article.published_at,
    reading_time_minutes: article.reading_time_minutes,
    cover_image: article.cover_image,
    canonical_url: article.canonical_url,
    html: await renderMarkdown(bodyMd),
    cached: false,
  };

  if (env.BLOG_KV) {
    await env.BLOG_KV.put(cacheKey, JSON.stringify(response), {
      expirationTtl: ARTICLE_TTL_SECONDS,
    });
  }

  return response;
});
