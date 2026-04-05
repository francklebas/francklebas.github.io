<script setup lang="ts">
import { fallbackContent } from '~/data/fallback-content'

const { locale, t } = useI18n()
const localePath = useLocalePath()

const { data } = await useAsyncData('site-content', loadSiteContent)

const content = computed(() => data.value || fallbackContent)

onMounted(() => {
  initRevealOnScroll()
})

const featuredProjects = computed(() => content.value.projects.slice(0, 3))
const approachIntro = computed(() => content.value.home.approachIntro || [])
const approachBullets = computed(() => content.value.home.approachBullets || content.value.about.philosophy)

const metrics = computed(() =>
  content.value.home.metrics.map((metric) => {
    const parsed = Number.parseInt(metric.value.replace(/[^0-9]/g, ''), 10)
    const fallbackProgress = Number.isFinite(parsed) ? Math.min(parsed, 100) : 60
    return {
      ...metric,
      progress: metric.progress ?? fallbackProgress
    }
  })
)

const heroMailtoHref = computed(() => {
  const current = locale.value as 'en' | 'fr' | 'sv'
  const contact = content.value.contact
  return `mailto:${contact.email}?subject=${encodeURIComponent(contact.mailtoSubject[current])}&body=${contact.mailtoBody[current]}`
})

useSeoMeta({
  title: 'Franck Lebas - Frontend Architect',
  description:
    'Frontend Architect with 17 years of experience in Vue, React, TypeScript, and high-traffic SaaS product delivery.'
})
</script>

<template>
  <section class="page" v-if="content">
    <p class="eyebrow badge badge-outline reveal-init">{{ content.home.hero.eyebrow[locale as 'en' | 'fr' | 'sv'] }}</p>
    <div class="hero-grid">
      <div class="reveal-init">
        <h1>{{ content.home.hero.title[locale as 'en' | 'fr' | 'sv'] }}</h1>
        <p class="lead">{{ content.home.hero.lead[locale as 'en' | 'fr' | 'sv'] }}</p>

        <div class="hero-actions reveal-init" style="--reveal-delay: 80ms">
          <NuxtLink class="btn btn-primary" :to="localePath(content.home.hero.primaryCtaHref)">
            {{ content.home.hero.primaryCtaLabel[locale as 'en' | 'fr' | 'sv'] }}
          </NuxtLink>
          <a class="btn btn-outline btn-secondary" :href="heroMailtoHref">{{ t('ui.discussProject') }}</a>
          <span class="badge badge-success badge-soft">{{ t('ui.availableForWork') }}</span>
        </div>
      </div>

      <aside class="profile-card card bg-base-100 border border-base-content/15 reveal-init" style="--reveal-delay: 120ms">
        <div class="card-body p-4">
          <img
            src="/profile/franck-lebas-avatar.webp"
            alt="Franck Lebas"
            class="avatar"
            loading="lazy"
            decoding="async"
            width="88"
            height="88"
          />
          <p class="font-semibold">Franck Lebas</p>
          <p class="muted text-sm">{{ t('ui.architectLabel') }}</p>
          <p class="muted text-sm">Stockholm · 17 years</p>
          <span class="badge badge-outline badge-sm profile-stack">Vue · React · TypeScript</span>
        </div>
      </aside>
    </div>

    <div class="section reveal-init" style="--reveal-delay: 170ms">
      <h2>{{ content.home.highlightsTitle[locale as 'en' | 'fr' | 'sv'] }}</h2>
      <div class="grid cols-2">
        <article
          v-for="item in content.home.highlights"
          :key="item.en"
          class="card bg-base-100 border border-base-content/15 hover-lift"
        >
          <div class="card-body p-5">
            <p>{{ item[locale as 'en' | 'fr' | 'sv'] }}</p>
          </div>
        </article>
      </div>
    </div>

    <div class="section reveal-init" style="--reveal-delay: 220ms">
      <h2>{{ content.home.approachTitle?.[locale as 'en' | 'fr' | 'sv'] || t('ui.myApproach') }}</h2>
      <div class="card bg-base-100 border border-base-content/15">
        <div class="card-body p-5">
          <p v-for="paragraph in approachIntro" :key="paragraph.en">{{ paragraph[locale as 'en' | 'fr' | 'sv'] }}</p>
          <ul class="approach-list">
            <li v-for="item in approachBullets" :key="item.en">{{ item[locale as 'en' | 'fr' | 'sv'] }}</li>
          </ul>
          <p class="muted">
            {{
              locale === 'fr'
                ? 'Une architecture frontend réussie est invisible quand elle fonctionne, et évidente quand elle échoue.'
                : locale === 'sv'
                  ? 'En bra frontend-arkitektur är osynlig när den fungerar – och smärtsamt uppenbar när den inte gör det.'
                  : 'Great frontend architecture is invisible when it works, and obvious when it does not.'
            }}
          </p>
        </div>
      </div>
    </div>

    <div class="section reveal-init" style="--reveal-delay: 280ms">
      <h2>{{ content.home.metricsTitle[locale as 'en' | 'fr' | 'sv'] }}</h2>
      <div class="grid cols-2">
        <article
          v-for="metric in metrics"
          :key="metric.value + metric.label.en"
          class="card bg-base-100 border border-base-content/15 hover-lift"
        >
          <div class="card-body p-5 metric-card">
            <div
              class="radial-progress text-primary"
              :style="`--value:${metric.progress};--size:4.8rem;--thickness:6px;`"
              role="progressbar"
              :aria-valuenow="metric.progress"
              aria-valuemin="0"
              aria-valuemax="100"
              :aria-label="metric.label[locale as 'en' | 'fr' | 'sv']"
            >
              {{ metric.value }}
            </div>
            <p class="muted">{{ metric.label[locale as 'en' | 'fr' | 'sv'] }}</p>
          </div>
        </article>
      </div>
    </div>

    <div class="section reveal-init" style="--reveal-delay: 360ms">
      <div class="section-head">
        <h2>{{ t('ui.featuredWork') }}</h2>
        <NuxtLink class="btn btn-sm btn-ghost" :to="localePath('/projects')">{{ t('ui.viewAllProjects') }}</NuxtLink>
      </div>

      <div class="grid cols-2">
        <article
          v-for="(project, index) in featuredProjects"
          :key="project.repoUrl"
          class="card bg-base-100 border border-base-content/15 hover-lift"
          :class="{ 'featured-project': index === 0 }"
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
          <div class="card-body p-5">
            <h3 class="text-secondary">{{ project.name }}</h3>
            <p v-if="project.role" class="badge badge-ghost badge-sm w-fit">{{ project.role[locale as 'en' | 'fr' | 'sv'] }}</p>
            <p>{{ project.useCase[locale as 'en' | 'fr' | 'sv'] }}</p>
            <p class="muted">{{ project.impact[locale as 'en' | 'fr' | 'sv'] }}</p>
            <div class="flex flex-wrap gap-2 mt-2">
              <span v-for="tech in project.stack" :key="tech" class="badge badge-outline">{{ tech }}</span>
            </div>
            <div class="card-actions justify-end mt-3">
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
        </article>
      </div>
    </div>
  </section>
</template>
