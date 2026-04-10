<script setup lang="ts">
const { locale, t } = useI18n();
const localePath = useLocalePath();
const route = useRoute();
const slug = computed(() => String(route.params.slug));

interface BlogArticleResponse {
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

const { data, error, pending } = await useFetch<BlogArticleResponse>(
  "/api/blog/article",
  {
    query: computed(() => ({ slug: slug.value, locale: locale.value })),
    watch: [slug, locale],
  },
);

const dateFormatter = computed(
  () =>
    new Intl.DateTimeFormat(
      locale.value === "fr" ? "fr-FR" : locale.value === "sv" ? "sv-SE" : "en-US",
      { year: "numeric", month: "long", day: "numeric" },
    ),
);

useSeoMeta({
  title: () =>
    data.value?.title ? `${data.value.title} · Franck Lebas` : "Blog · Franck Lebas",
  description: () => data.value?.description || "",
});

useHead(() => ({
  link: data.value?.canonical_url
    ? [{ rel: "canonical", href: data.value.canonical_url }]
    : [],
}));

</script>

<template>
  <section class="page">
    <NuxtLink :to="localePath('/blog')" class="btn btn-ghost btn-sm mb-4">
      ← {{ t("ui.backToBlog") }}
    </NuxtLink>

    <div v-if="pending" class="section muted">{{ t("ui.loadingArticles") }}</div>

    <div v-else-if="error || !data" class="section">
      <div class="card bg-base-100 border border-base-content/15">
        <div class="card-body p-5">
          <p class="muted">{{ error?.message || "Article not found" }}</p>
        </div>
      </div>
    </div>

    <article v-else>
      <header class="mb-6">
        <h1>{{ data.title }}</h1>
        <p class="muted text-sm">
          {{ t("ui.publishedOn") }}
          {{ dateFormatter.format(new Date(data.published_at)) }}
          · {{ data.reading_time_minutes }} {{ t("ui.minRead") }}
        </p>
        <div class="flex flex-wrap gap-2 mt-2">
          <span
            v-for="tag in data.tags"
            :key="tag"
            class="badge badge-outline project-tag"
            >{{ tag }}</span
          >
        </div>
        <p v-if="locale !== 'en'" class="muted text-sm mt-3">
          {{ t("ui.translatedNotice") }}
          <a
            :href="data.canonical_url"
            target="_blank"
            rel="noopener noreferrer"
            class="link link-primary"
            >{{ t("ui.viewOnDevto") }}</a
          >
        </p>
      </header>

      <div class="prose-blog" v-html="data.html" />
    </article>
  </section>
</template>
