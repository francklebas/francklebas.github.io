<script setup lang="ts">
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();
const { locale, t } = useI18n();
const { theme, toggle: toggleTheme, init: initTheme } = useTheme();
const contactEmail = "francklebas@ik.me";
const contactPhone = "+46 (0)735 103 291";

onMounted(() => initTheme());

const navItems = computed(() => [
  { to: localePath("/"), label: t("nav.home") },
  { to: localePath("/about"), label: t("nav.about") },
  { to: localePath("/projects"), label: t("nav.projects") },
  { to: localePath("/blog"), label: t("nav.blog") },
  { to: localePath("/contact"), label: t("nav.contact") },
]);

const languageLinks = computed(() => [
  { code: "en", to: switchLocalePath("en") },
  { code: "fr", to: switchLocalePath("fr") },
  { code: "sv", to: switchLocalePath("sv") },
]);
</script>

<template>
  <div class="site-shell">
    <header class="site-header">
      <div
        class="site-header-inner navbar bg-base-200/80 border border-base-content/15"
      >
        <div class="navbar-start">
          <NuxtLink :to="localePath('/')" class="brand text-lg"
            >FRANCK LEBAS</NuxtLink
          >
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

        <div class="navbar-end gap-2" aria-label="Language switcher">
          <button
            class="btn btn-ghost btn-xs btn-square"
            :aria-label="
              theme === 'dark' ? t('ui.switchToLight') : t('ui.switchToDark')
            "
            @click="toggleTheme"
          >
            <svg
              v-if="theme === 'light'"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          </button>
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
        <p>{{ t("ui.basedIn") }} · {{ t("ui.availableNow") }}</p>
        <p class="footer-meta">{{ t("ui.builtWith") }}</p>
        <p class="footer-links">
          <a :href="`tel:${contactPhone.replace(/\s+/g, '')}`"
            >{{ t("ui.callLabel") }}: {{ contactPhone }}</a
          >
          <span>·</span>
          <a :href="`mailto:${contactEmail}`"
            >{{ t("ui.emailLabel") }}: {{ contactEmail }}</a
          >
        </p>
      </div>
    </footer>
  </div>
</template>
