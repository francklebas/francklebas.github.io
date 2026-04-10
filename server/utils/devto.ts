export interface DevtoArticleSummary {
  id: number;
  slug: string;
  title: string;
  description: string;
  tags: string[];
  published_at: string;
  reading_time_minutes: number;
  cover_image: string | null;
  url: string;
}

export interface DevtoArticleFull extends DevtoArticleSummary {
  body_markdown: string;
  canonical_url: string;
}

interface DevtoApiArticle {
  id: number;
  slug: string;
  title: string;
  description: string;
  tag_list: string[] | string;
  published_at: string;
  reading_time_minutes: number;
  cover_image: string | null;
  url: string;
  body_markdown?: string;
  canonical_url?: string;
}

function normalizeTags(tags: string[] | string): string[] {
  if (Array.isArray(tags)) return tags;
  return tags.split(",").map((t) => t.trim()).filter(Boolean);
}

export async function fetchDevtoList(
  username: string,
): Promise<DevtoArticleSummary[]> {
  const res = await fetch(
    `https://dev.to/api/articles?username=${encodeURIComponent(username)}&per_page=30`,
    {
      headers: {
        Accept: "application/vnd.forem.api-v1+json",
        "User-Agent": "francklebas-site/1.0 (+https://francklebas.com)",
      },
    },
  );
  if (!res.ok) {
    throw new Error(`dev.to list fetch failed: ${res.status}`);
  }
  const data = (await res.json()) as DevtoApiArticle[];
  return data.map((a) => ({
    id: a.id,
    slug: a.slug,
    title: a.title,
    description: a.description,
    tags: normalizeTags(a.tag_list),
    published_at: a.published_at,
    reading_time_minutes: a.reading_time_minutes,
    cover_image: a.cover_image,
    url: a.url,
  }));
}

export async function fetchDevtoArticle(
  username: string,
  slug: string,
): Promise<DevtoArticleFull> {
  const res = await fetch(
    `https://dev.to/api/articles/${encodeURIComponent(username)}/${encodeURIComponent(slug)}`,
    {
      headers: {
        Accept: "application/vnd.forem.api-v1+json",
        "User-Agent": "francklebas-site/1.0 (+https://francklebas.com)",
      },
    },
  );
  if (!res.ok) {
    throw new Error(`dev.to article fetch failed: ${res.status}`);
  }
  const a = (await res.json()) as DevtoApiArticle;
  return {
    id: a.id,
    slug: a.slug,
    title: a.title,
    description: a.description,
    tags: normalizeTags(a.tag_list),
    published_at: a.published_at,
    reading_time_minutes: a.reading_time_minutes,
    cover_image: a.cover_image,
    url: a.url,
    body_markdown: a.body_markdown ?? "",
    canonical_url: a.canonical_url ?? a.url,
  };
}
