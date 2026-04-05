import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n'],
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()]
  },
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
    head: {
      title: 'Franck Lebas - Frontend Architect',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        {
          name: 'description',
          content:
            'Frontend Architect with 17 years of experience in Vue, React, TypeScript, and high-traffic product engineering.'
        }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Source+Serif+4:wght@400;600&display=swap'
        }
      ]
    }
  },
  routeRules: {
    '/**': {
      headers: {
        'Content-Security-Policy':
          "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https:; connect-src 'self' https://*.sanity.io; frame-ancestors 'none'; base-uri 'self';",
        'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'DENY',
        'Referrer-Policy': 'strict-origin-when-cross-origin'
      }
    }
  },
  runtimeConfig: {
    sanityReadToken: process.env.SANITY_READ_TOKEN,
    public: {
      sanity: {
        projectId: process.env.SANITY_PROJECT_ID || '5v62g31w',
        dataset: process.env.SANITY_DATASET || 'production',
        apiVersion: process.env.SANITY_API_VERSION || '2025-01-01'
      }
    }
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/about', '/contact', '/projects']
    }
  },
  i18n: {
    baseUrl: 'https://francklebas.github.io',
    locales: [
      { code: 'en', language: 'en-US', name: 'English' },
      { code: 'fr', language: 'fr-FR', name: 'Francais' },
      { code: 'sv', language: 'sv-SE', name: 'Svenska' }
    ],
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      alwaysRedirect: false,
      fallbackLocale: 'en'
    },
    bundle: {
      optimizeTranslationDirective: false
    },
    vueI18n: './i18n.config.ts'
  }
})
