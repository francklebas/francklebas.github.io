import { defineSitemapEventHandler } from "#imports";
import { fetchDevtoList } from "#server/utils/devto";

export default defineSitemapEventHandler(async () => {
  const config = useRuntimeConfig();
  const username = config.devtoUsername;

  if (!username) return [];

  const articles = await fetchDevtoList(username);

  return articles.map((article) => ({
    loc: `/blog/${article.slug}`,
    lastmod: article.published_at,
  }));
});
