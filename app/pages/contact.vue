<script setup lang="ts">
import { fallbackContent } from '~/data/fallback-content'

const { locale, t } = useI18n()
const config = useRuntimeConfig()
const { data } = await useAsyncData('site-content', loadSiteContent)

const content = computed(() => data.value || fallbackContent)

onMounted(() => {
  initRevealOnScroll()
})

const mailtoHref = computed(() => {
  const current = locale.value as 'en' | 'fr' | 'sv'
  const contact = content.value.contact
  return `mailto:${contact.email}?subject=${encodeURIComponent(contact.mailtoSubject[current])}&body=${contact.mailtoBody[current]}`
})

const calendlyHref = computed(() => config.public.calendlyUrl || content.value.contact.calendly || '')
const contactCtaHref = computed(() => calendlyHref.value || mailtoHref.value)
const contactCtaLabel = computed(() => (calendlyHref.value ? t('ui.bookCall') : t('ui.contactByEmail')))

useSeoMeta({
  title: 'Contact - Franck Lebas',
  description: 'Get in touch with Franck Lebas for architecture and frontend engineering opportunities.'
})
</script>

<template>
  <section class="page" v-if="content">
    <p class="eyebrow badge badge-outline reveal-init">{{ t('ui.getInTouch') }}</p>
    <h1>{{ content.contact.title[locale as 'en' | 'fr' | 'sv'] }}</h1>
    <p class="lead">{{ content.contact.intro[locale as 'en' | 'fr' | 'sv'] }}</p>

    <div class="grid cols-2 section reveal-init" style="--reveal-delay: 140ms">
      <article class="card bg-base-100 border border-base-content/15">
        <div class="card-body p-5">
          <h2>{{ t('ui.contactByEmail') }}</h2>
          <p class="muted">{{ content.contact.email }}</p>
          <a
            class="btn btn-primary"
            :href="contactCtaHref"
            :target="calendlyHref ? '_blank' : undefined"
            :rel="calendlyHref ? 'noopener noreferrer' : undefined"
          >
            {{ contactCtaLabel }}
          </a>
        </div>
      </article>

      <article class="card bg-base-100 border border-base-content/15">
        <div class="card-body p-5">
          <h2>Links</h2>
          <div class="card-actions justify-start">
            <a class="btn btn-outline btn-secondary btn-sm" :href="content.contact.linkedin" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a class="btn btn-outline btn-secondary btn-sm" :href="content.contact.github" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
