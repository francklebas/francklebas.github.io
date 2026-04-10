<script setup lang="ts">
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()
const { locale, t } = useI18n()
const contactEmail = 'francklebas@ik.me'
const contactPhone = '+46 (0)735 103 291'

const navItems = computed(() => [
  { to: localePath('/'), label: t('nav.home') },
  { to: localePath('/about'), label: t('nav.about') },
  { to: localePath('/projects'), label: t('nav.projects') },
  { to: localePath('/blog'), label: t('nav.blog') },
  { to: localePath('/contact'), label: t('nav.contact') }
])

const languageLinks = computed(() => [
  { code: 'en', to: switchLocalePath('en') },
  { code: 'fr', to: switchLocalePath('fr') },
  { code: 'sv', to: switchLocalePath('sv') }
])
</script>

<template>
  <div class="site-shell" data-theme="light">
    <header class="site-header">
      <div class="site-header-inner navbar bg-base-200/80 border border-base-content/15">
        <div class="navbar-start">
          <NuxtLink :to="localePath('/')" class="brand text-lg">FRANCK LEBAS</NuxtLink>
        </div>

        <nav class="navbar-center main-nav" aria-label="Primary navigation">
          <NuxtLink
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            class="btn btn-ghost btn-sm rounded-box"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>

        <div class="navbar-end" aria-label="Language switcher">
          <div class="join">
            <NuxtLink
              v-for="lang in languageLinks"
              :key="lang.code"
              :to="lang.to"
              class="btn btn-xs join-item"
              :class="locale === lang.code ? 'btn-primary' : 'btn-ghost'"
            >
              {{ lang.code.toUpperCase() }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </header>

    <main class="site-main flex-1">
      <div class="site-main-inner">
        <slot />
      </div>
    </main>

    <footer class="site-footer">
      <div class="site-footer-inner">
        <p>{{ t('ui.basedIn') }} · {{ t('ui.availableNow') }}</p>
        <p class="footer-meta">{{ t('ui.builtWith') }}</p>
        <p class="footer-links">
          <a :href="`tel:${contactPhone.replace(/\s+/g, '')}`">{{ t('ui.callLabel') }}: {{ contactPhone }}</a>
          <span>·</span>
          <a :href="`mailto:${contactEmail}`">{{ t('ui.emailLabel') }}: {{ contactEmail }}</a>
        </p>
      </div>
    </footer>
  </div>
</template>
