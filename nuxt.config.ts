import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/sitemap", "@nuxtjs/i18n", "@vueuse/motion/nuxt"],
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || "/",
    head: {
      title: "Franck Lebas - Frontend Architect",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        {
          name: "description",
          content:
            "Frontend Architect with 17 years of experience in Vue, React, TypeScript, and high-traffic product engineering.",
        },
      ],
      script: [
        {
          innerHTML: `(function(){try{var t=localStorage.getItem('theme')||(matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light');document.documentElement.setAttribute('data-theme',t)}catch(e){}})()`,
          type: "text/javascript",
        },
      ],
    },
  },
  routeRules: {
    "/blog/**": { prerender: false },
    "/fr/blog/**": { prerender: false },
    "/sv/blog/**": { prerender: false },
    "/**": {
      headers: {
        "Content-Security-Policy":
          "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https:; connect-src 'self' https://*.sanity.io; frame-ancestors 'none'; base-uri 'self';",
        "Strict-Transport-Security":
          "max-age=31536000; includeSubDomains; preload",
        "X-Content-Type-Options": "nosniff",
        "X-Frame-Options": "DENY",
        "Referrer-Policy": "strict-origin-when-cross-origin",
      },
    },
  },
  runtimeConfig: {
    sanityReadToken: process.env.SANITY_READ_TOKEN,
    devtoUsername: process.env.NUXT_DEVTO_USERNAME || "",
    blogRevalidateSecret: process.env.BLOG_REVALIDATE_SECRET || "",
    public: {
      calendlyUrl: process.env.NUXT_PUBLIC_CALENDLY_URL || "",
      sanity: {
        projectId: process.env.SANITY_PROJECT_ID || "5v62g31w",
        dataset: process.env.SANITY_DATASET || "production",
        apiVersion: process.env.SANITY_API_VERSION || "2025-01-01",
      },
      motion: {
        directives: {
          "pop-bottom": {
            initial: {
              scale: 0,
              opacity: 0,
              y: 100,
            },
            visible: {
              scale: 1,
              opacity: 1,
              y: 0,
            },
          },
        },
      },
    },
  },
  nitro: {
    preset: "cloudflare-pages",
    prerender: {
      crawlLinks: true,
      routes: ["/", "/about", "/contact", "/projects"],
    },
  },
  i18n: {
    baseUrl: "https://francklebas.com",
    locales: [
      { code: "en", language: "en-US", name: "English" },
      { code: "fr", language: "fr-FR", name: "Francais" },
      { code: "sv", language: "sv-SE", name: "Svenska" },
    ],
    strategy: "prefix_except_default",
    defaultLocale: "en",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
      alwaysRedirect: false,
      fallbackLocale: "en",
    },
    bundle: {
      optimizeTranslationDirective: false,
    },
    vueI18n: "./i18n.config.ts",
  },
  site: {
    url: "https://francklebas.com",
  },
  sitemap: {
    sources: ["/api/__sitemap__/urls"],
  },
});
