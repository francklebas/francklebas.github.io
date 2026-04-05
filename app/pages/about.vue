<script setup lang="ts">
import { fallbackContent } from '~/data/fallback-content'

const { locale } = useI18n()
const { data } = await useAsyncData('site-content', loadSiteContent)

const content = computed(() => data.value || fallbackContent)

onMounted(() => {
  initRevealOnScroll()
})

useSeoMeta({
  title: 'About - Franck Lebas',
  description:
    'Background, architecture philosophy, and selected experience of Franck Lebas, Frontend Architect.'
})
</script>

<template>
  <section class="page" v-if="content">
    <p class="eyebrow badge badge-outline reveal-init">{{ content.about.title[locale as 'en' | 'fr' | 'sv'] }}</p>
    <h1>{{ content.about.title[locale as 'en' | 'fr' | 'sv'] }}</h1>
    <p class="lead">{{ content.about.intro[locale as 'en' | 'fr' | 'sv'] }}</p>

    <div class="section reveal-init" style="--reveal-delay: 120ms">
      <h2>{{ content.about.philosophyTitle[locale as 'en' | 'fr' | 'sv'] }}</h2>
      <div class="grid">
        <article v-for="item in content.about.philosophy" :key="item.en" class="card bg-base-100 border border-base-content/15">
          <div class="card-body p-5">
            <p>{{ item[locale as 'en' | 'fr' | 'sv'] }}</p>
          </div>
        </article>
      </div>
    </div>

    <div class="section reveal-init" style="--reveal-delay: 220ms">
      <h2>{{ content.about.experienceTitle[locale as 'en' | 'fr' | 'sv'] }}</h2>
      <div class="grid">
        <article
          v-for="experience in content.about.experiences"
          :key="`${experience.company}-${experience.period}`"
          class="card bg-base-100 border border-base-content/15"
        >
          <div class="card-body p-5">
            <p class="eyebrow badge badge-ghost w-fit">{{ experience.period }}</p>
            <h3>{{ experience.role }} · {{ experience.company }}</h3>
            <p class="muted">{{ experience.details[locale as 'en' | 'fr' | 'sv'] }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
