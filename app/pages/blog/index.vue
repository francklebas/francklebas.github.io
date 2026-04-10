<script setup lang="ts">
const { locale, t } = useI18n();
const localePath = useLocalePath();

interface BlogListResponse {
  articles: Array<{
    id: number;
    slug: string;
    title: string;
    description: string;
    tags: string[];
    published_at: string;
    reading_time_minutes: number;
    cover_image: string | null;
    url: string;
  }>;
  cached: boolean;
}

const { data, error, pending } = await useFetch<BlogListResponse>(
  "/api/blog/list",
  {
    query: computed(() => ({ locale: locale.value })),
    watch: [locale],
  },
);

const articles = computed(() => data.value?.articles ?? []);

const dateFormatter = computed(
  () =>
    new Intl.DateTimeFormat(
      locale.value === "fr" ? "fr-FR" : locale.value === "sv" ? "sv-SE" : "en-US",
      { year: "numeric", month: "long", day: "numeric" },
    ),
);

useSeoMeta({
  title: () => `${t("ui.blogTitle")} · Franck Lebas`,
  description: () => t("ui.blogIntro"),
});

onMounted(() => {
  initRevealOnScroll();
});
</script>

<template>
  <section class="page">
    <p class="eyebrow badge badge-outline">{{ t("nav.blog") }}</p>
    <div class="reveal-init">
      <h1>{{ t("ui.blogTitle") }}</h1>
      <p class="lead">{{ t("ui.blogIntro") }}</p>
    </div>

    <div v-if="pending" class="section muted">{{ t("ui.loadingArticles") }}</div>

    <div v-else-if="error" class="section">
      <div class="card bg-base-100 border border-base-content/15">
        <div class="card-body p-5">
          <p class="muted">{{ error.message }}</p>
        </div>
      </div>
    </div>

    <div v-else-if="!articles.length" class="section muted">
      {{ t("ui.noArticles") }}
    </div>

    <div v-else class="section">
      <div class="grid cols-2">
        <article
          v-for="article in articles"
          :key="article.id"
          class="card bg-base-100 border border-base-content/15 hover-lift reveal-init"
        >
          <figure v-if="article.cover_image" class="project-preview">
            <img
              :src="article.cover_image"
              :alt="`${article.title} cover`"
              loading="lazy"
              decoding="async"
            />
          </figure>
          <div class="card-body p-5">
            <h2 class="text-secondary">{{ article.title }}</h2>
            <p class="muted text-sm">
              {{ t("ui.publishedOn") }}
              {{ dateFormatter.format(new Date(article.published_at)) }}
              · {{ article.reading_time_minutes }} {{ t("ui.minRead") }}
            </p>
            <p>{{ article.description }}</p>
            <div class="flex flex-wrap gap-2 mt-2">
              <span
                v-for="tag in article.tags"
                :key="tag"
                class="badge badge-outline project-tag"
                >{{ tag }}</span
              >
            </div>
            <div class="card-actions justify-end mt-3">
              <NuxtLink
                class="btn btn-primary btn-sm"
                :to="localePath(`/blog/${article.slug}`)"
              >
                {{ t("ui.readArticle") }}
              </NuxtLink>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
