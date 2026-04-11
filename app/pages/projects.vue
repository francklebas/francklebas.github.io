<script setup lang="ts">
import { fallbackContent } from '~/data/fallback-content'

const { locale, t } = useI18n()
const { data } = await useAsyncData('site-content', loadSiteContent)

const content = computed(() => data.value || fallbackContent)

onMounted(() => {
  initRevealOnScroll()
})

useSeoMeta({
  title: 'Projects - Franck Lebas',
  description: 'Selected repositories and use cases by Franck Lebas.'
})
</script>

<template>
  <section class="page" v-if="content">
    <p class="eyebrow badge badge-outline reveal-init">{{ content.projectsTitle[locale as 'en' | 'fr' | 'sv'] }}</p>
    <h1>{{ content.projectsTitle[locale as 'en' | 'fr' | 'sv'] }}</h1>
    <p class="lead">{{ content.projectsIntro[locale as 'en' | 'fr' | 'sv'] }}</p>

    <div class="grid section">
      <article
        v-for="(project, index) in content.projects"
        :key="project.repoUrl"
        class="card bg-base-100 border border-base-content/15 hover-lift reveal-init"
        :style="`--reveal-delay: ${index * 80}ms`"
      >
        <figure class="project-preview">
          <img
            v-if="project.previewImage"
            :src="project.previewImage"
            :alt="`${project.name} preview`"
            loading="lazy"
            decoding="async"
            width="1200"
            height="630"
          />
        </figure>
        <div class="card-body p-5 flex flex-col gap-4">
          <div class="flex-1 space-y-3">
            <h2 class="text-secondary">{{ project.name }}</h2>
            <p v-if="project.role" class="badge badge-ghost badge-sm w-fit">{{ project.role[locale as 'en' | 'fr' | 'sv'] }}</p>
            <p>{{ project.useCase[locale as 'en' | 'fr' | 'sv'] }}</p>
            <p class="muted">{{ project.impact[locale as 'en' | 'fr' | 'sv'] }}</p>
          </div>

          <div class="space-y-3 pt-3 border-t border-base-content/10">
            <div class="flex flex-wrap gap-2">
              <span v-for="tech in project.stack" :key="tech" class="badge badge-outline project-tag">{{ tech }}</span>
            </div>
            <div class="card-actions justify-end">
              <a
                v-if="project.demoUrl"
                class="btn btn-secondary btn-soft btn-sm"
                :href="project.demoUrl"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
              <a class="btn btn-outline btn-primary btn-sm" :href="project.repoUrl" target="_blank" rel="noopener noreferrer">
                {{ t('ui.openGithub') }}
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
