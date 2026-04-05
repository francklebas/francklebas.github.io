import type { SiteContent } from '~/types/content'

export const fallbackContent: SiteContent = {
  home: {
    hero: {
      eyebrow: {
        en: 'Frontend architecture and product delivery',
        fr: 'Architecture frontend et livraison produit',
        sv: 'Frontend-arkitektur och produktleverans'
      },
      title: {
        en: 'Franck Lebas',
        fr: 'Franck Lebas',
        sv: 'Franck Lebas'
      },
      lead: {
        en: 'Design-trained frontend architect building systems that scale, stay fast, and still feel crafted under product pressure.',
        fr: 'Architecte frontend formé au design, je construis des systèmes qui passent à l\'échelle, restent rapides et conservent une véritable qualité d\'exécution, même sous forte pression produit.',
        sv: 'Designutbildad frontend-arkitekt som bygger system som skalar, förblir snabba och fortfarande känns välgjorda under produktpress.'
      },
      primaryCtaLabel: {
        en: 'View selected projects',
        fr: 'Voir les projets sélectionnés',
        sv: 'Se utvalda projekt'
      },
      primaryCtaHref: '/projects'
    },
    highlightsTitle: {
      en: 'Current focus',
      fr: 'Focus actuel',
      sv: 'Nuvarande fokus'
    },
    highlights: [
      {
        en: 'Design systems and composable component APIs for long-term maintainability.',
        fr: 'Design systems et APIs de composants composables pour une maintenabilité à long terme.',
        sv: 'Designsystem och komposabla komponent-APIs för långsiktig underhållbarhet.'
      },
      {
        en: 'SSR/SSG strategy, Core Web Vitals ownership, and measurable SEO outcomes.',
        fr: 'Strategie SSR/SSG, pilotage des Core Web Vitals et impact SEO mesurable.',
        sv: 'SSR/SSG-strategi, ägandeskap över Core Web Vitals och mätbara SEO-resultat.'
      },
      {
        en: 'Mentoring teams, code review culture, and architecture standards that scale.',
        fr: 'Mentorat d\'équipes, culture de code review et standards d\'architecture qui passent à l\'échelle.',
        sv: 'Mentorskap, kodgranskning och arkitekturstandarder som skalar.'
      }
    ],
    approachTitle: {
      en: 'My Approach',
      fr: 'Mon approche',
      sv: 'Mitt arbetssatt'
    },
    approachIntro: [
      {
        en: 'I design frontend systems that are fast, scalable, and maintainable without sacrificing user experience.',
        fr: 'Je conçois des systèmes frontend rapides, scalables et maintenables, sans jamais sacrifier l\'expérience utilisateur.',
        sv: 'Jag designar frontend-system som är snabba, skalbara och underhållbara – utan att kompromissa med användarupplevelsen.'
      },
      {
        en: 'Trained as a designer, I approach architecture through composable APIs, token-based design systems, and performance-by-default strategies.',
        fr: 'Formé au design, j\'aborde l\'architecture à travers des APIs de composants composables, des design systems basés sur des tokens et une performance pensée par défaut (SSR/SSG, Core Web Vitals, données structurées).',
        sv: 'Med en bakgrund som designer närmar jag mig arkitektur genom komposabla komponent-APIs, token-baserade designsystem och prestanda som standard (SSR/SSG, Core Web Vitals, strukturerad data).'
      }
    ],
    approachBullets: [
      {
        en: 'Build clean abstractions that scale with the product.',
        fr: 'Créer des abstractions claires qui évoluent avec le produit.',
        sv: 'Bygga rena abstraktioner som växer med produkten.'
      },
      {
        en: 'Deliver measurable gains in speed and developer experience.',
        fr: 'Délivrer des gains mesurables en performance et en expérience développeur.',
        sv: 'Leverera mätbara förbättringar i hastighet och utvecklarupplevelse.'
      },
      {
        en: 'Craft interfaces that still feel intentional under delivery pressure.',
        fr: 'Concevoir des interfaces soignées, même sous forte pression de livraison.',
        sv: 'Skapa gränssnitt som fortfarande känns omsorgsfullt utformade, även under tight leveranspress.'
      }
    ],
    metricsTitle: {
      en: 'Impact at a glance',
      fr: 'Impact en bref',
      sv: 'Effekt i korthet'
    },
    metrics: [
      {
        value: '500k+',
        progress: 92,
        label: {
          en: 'users served on a Vue SaaS platform',
          fr: 'utilisateurs servis sur une plateforme SaaS Vue',
          sv: 'användare på en Vue-baserad SaaS-plattform'
        }
      },
      {
        value: '70%',
        progress: 70,
        label: {
          en: 'CI/CD build time reduction (Vite + TypeScript migration)',
          fr: 'réduction du temps de build CI/CD (migration Vite + TypeScript)',
          sv: '70% minskning av CI/CD-byggtid (Vite + TypeScript-migrering)'
        }
      },
      {
        value: '50%',
        progress: 50,
        label: {
          en: 'FCP/LCP improvement on a national high-traffic platform',
          fr: 'amélioration FCP/LCP sur une plateforme nationale à fort trafic',
          sv: '50% förbättring av FCP/LCP på en nationell högbelastad plattform'
        }
      },
      {
        value: '35%',
        progress: 35,
        label: {
          en: 'organic traffic growth via SSR and structured data',
          fr: 'croissance du trafic organique via SSR et données structurées',
          sv: '35% organisk trafiktillväxt via SSR och strukturerad data'
        }
      }
    ]
  },
  about: {
    title: {
      en: 'About',
      fr: 'À propos',
      sv: 'Om mig'
    },
    intro: {
      en: 'I design frontend systems that stay fast, understandable, and evolutive under product pressure. My background in visual communication shapes both API design and UX decisions.',
      fr: 'Je conçois des systèmes frontend rapides, lisibles et évolutifs sous pression produit. Ma formation en communication visuelle influence mes choix d\'API et d\'expérience utilisateur.',
      sv: 'Jag bygger frontend-system som förblir snabba, begripliga och utvecklingsbara under produkttryck. Min bakgrund inom visuell kommunikation påverkar både API-design och UX-beslut.'
    },
    philosophyTitle: {
      en: 'Architecture philosophy',
      fr: 'Philosophie d\'architecture',
      sv: 'Arkitekturfilosofi'
    },
    philosophy: [
      {
        en: 'Standards first: semantic HTML and native web APIs before unnecessary abstractions.',
        fr: 'Standards first: HTML sémantique et APIs web natives avant les abstractions inutiles.',
        sv: 'Standarder forst: semantisk HTML och webbens egna API:er fore onodiga abstraktioner.'
      },
      {
        en: 'Performance by design: rendering strategy, LCP budgets, and bundle ownership from day one.',
        fr: 'Performance by design: stratégie de rendu, budget LCP et maîtrise du bundle dès le départ.',
        sv: 'Prestanda by design: renderingsstrategi, LCP-budget och kontroll over bundlen fran dag ett.'
      },
      {
        en: 'Composable systems: design tokens, reusable component APIs, and CMS-driven content workflows.',
        fr: 'Systèmes composables: design tokens, composants réutilisables et workflows de contenu pilotés par CMS.',
        sv: 'Komponerbara system: design tokens, ateranvandbara komponent-API:er och CMS-styrda innehallsfloden.'
      }
    ],
    experienceTitle: {
      en: 'Selected experience',
      fr: 'Expérience sélectionnée',
      sv: 'Utvald erfarenhet'
    },
    experiences: [
      {
        role: 'Lead Frontend Architect',
        company: 'Betao AB',
        period: '2022-2026',
        details: {
          en: 'Owned the complete Vue 3 frontend architecture for a multi-product SaaS platform (500k+ users), led design-system delivery, and mentored six developers.',
          fr: 'Responsable de toute l\'architecture frontend Vue 3 pour une plateforme SaaS multi-produits (500k+ utilisateurs), avec pilotage design system et mentorat de six développeurs.',
          sv: 'Ansvarade for hela Vue 3-arkitekturen for en SaaS-plattform med flera produkter (500k+ anvandare), byggde designsystem och coachade sex utvecklare.'
        }
      },
      {
        role: 'Senior React Developer',
        company: 'FDJ',
        period: '2019-2020',
        details: {
          en: 'Led React architecture on a national lottery platform serving millions of users, with major Core Web Vitals gains.',
          fr: 'Pilotage de l\'architecture React sur la plateforme nationale FDJ avec des gains significatifs sur les Core Web Vitals.',
          sv: 'Ledde React-arkitekturen for den nationella lotteriplattformen FDJ med tydliga forbattringar av Core Web Vitals.'
        }
      },
      {
        role: 'Lead Frontend Developer & Fullstack Engineer',
        company: 'Inovalia',
        period: '2017-2019',
        details: {
          en: 'Early Next.js adoption for B2B SaaS with real-time collaboration and SSR-first architecture.',
          fr: 'Adoption précurseur de Next.js pour un SaaS B2B avec collaboration temps réel et architecture SSR.',
          sv: 'Tidig adoption av Next.js for B2B-SaaS med realtidssamarbete och SSR-forst-arkitektur.'
        }
      },
      {
        role: 'Founder & Full Stack Developer',
        company: 'Desire Labs',
        period: '2009-2020',
        details: {
          en: 'Founded and ran an independent web agency, shipping 50+ projects with end-to-end product ownership.',
          fr: 'Fondateur d\'une agence web indépendante avec plus de 50 projets livrés en responsabilité complète.',
          sv: 'Grundade och drev en oberoende webbyra med over 50 levererade projekt och helhetsansvar.'
        }
      }
    ]
  },
  contact: {
    title: {
      en: 'Contact',
      fr: 'Contact',
      sv: 'Kontakt'
    },
    intro: {
      en: 'For architecture consulting, senior frontend roles, or product collaboration, the fastest way is direct email.',
      fr: 'Pour des missions d\'architecture, des rôles senior frontend, ou une collaboration produit, le plus simple est un email direct.',
      sv: 'For arkitekturuppdrag, seniora frontendroller eller produktsamarbeten ar direkt e-post det snabbaste alternativet.'
    },
    mailtoSubject: {
      en: 'Project inquiry from francklebas.github.io',
      fr: 'Prise de contact depuis francklebas.github.io',
      sv: 'Projektforfragan fran francklebas.github.io'
    },
    mailtoBody: {
      en: 'Hi Franck,%0D%0A%0D%0AName:%0D%0ACompany:%0D%0AContext:%0D%0ATimeline:%0D%0A%0D%0ABest regards,',
      fr: 'Bonjour Franck,%0D%0A%0D%0ANom:%0D%0AEntreprise:%0D%0AContexte:%0D%0APlanning:%0D%0A%0D%0ACordialement,',
      sv: 'Hej Franck,%0D%0A%0D%0ANamn:%0D%0AForetag:%0D%0ABakgrund:%0D%0ATidsplan:%0D%0A%0D%0AVanliga halsningar,'
    },
    email: 'francklebas@ik.me',
    phone: '+46 (0)735 103 291',
    linkedin: 'https://linkedin.com/in/francklebas',
    github: 'https://github.com/francklebas'
  },
  projectsTitle: {
    en: 'Selected projects',
    fr: 'Projets sélectionnés',
    sv: 'Utvalda projekt'
  },
  projectsIntro: {
    en: 'A manual shortlist of repositories representing product architecture, frontend craft, and end-to-end ownership.',
    fr: 'Une short-list manuelle de repositories représentant architecture produit, qualité frontend et responsabilité end-to-end.',
    sv: 'En manuell shortlist av repositories som visar produktarkitektur, frontend-kvalitet och end-to-end-ansvar.'
  },
  projects: [
    {
      name: 'NextSwift Pro - SaaS Boilerplate',
      repoUrl: 'https://github.com/francklebas/next-swift',
      previewImage: '/projects/next-swift.webp',
      role: {
        en: 'Lead Developer & Architect',
        fr: 'Lead Developer & Architect',
        sv: 'Lead Developer & Architect'
      },
      stack: [
        'Next.js 15 App Router',
        'TypeScript',
        'Clerk Authentication',
        'Supabase Backend',
        'Stripe Subscriptions',
        'Sold on Gumroad'
      ],
      useCase: {
        en: 'Production-ready SaaS starter kit built with Next.js 15 (App Router), TypeScript, Clerk, Supabase and Stripe. Designed for indie makers and small teams who want to launch secure subscription products in days instead of weeks.',
        fr: 'Starter kit SaaS prêt pour la production, construit avec Next.js 15 (App Router), TypeScript, Clerk, Supabase et Stripe. Conçu pour les indie makers et petites équipes qui veulent lancer un produit avec abonnement sécurisé en quelques jours au lieu de plusieurs semaines.',
        sv: 'Produktionsfärdigt SaaS-starterkit byggt med Next.js 15 (App Router), TypeScript, Clerk, Supabase och Stripe. Skapat för indie makers och små team som vill lansera säkra prenumerationsprodukter på dagar istället för veckor.'
      },
      impact: {
        en: 'Includes authentication, user dashboard, Stripe billing & webhooks, and clean architecture patterns. Sold commercially on Gumroad.',
        fr: 'Inclut authentification, dashboard utilisateur, facturation Stripe, webhooks et une architecture propre. Vendu commercialement sur Gumroad.',
        sv: 'Innehåller autentisering, användardashboard, Stripe-fakturering, webhooks och ren arkitektur. Såld kommersiellt på Gumroad.'
      }
    },
    {
      name: 'Nuxt Commerce - Headless Storefront',
      repoUrl: 'https://github.com/francklebas/nuxt-commerce',
      previewImage: '/projects/nuxt-commerce.webp',
      role: {
        en: 'Lead Frontend Architect',
        fr: 'Lead Frontend Architect',
        sv: 'Lead Frontend Architect'
      },
      stack: ['Nuxt 4', 'Vue 3', 'TypeScript', 'Stripe', 'Sanity'],
      useCase: {
        en: 'Premium headless e-commerce storefront built with Nuxt 4, Vue 3, TypeScript and Tailwind. Features YAML-first product catalog with Sanity adapter, Stripe Checkout, SSR-first rendering, i18n and Lighthouse 95+ performance.',
        fr: 'Storefront e-commerce headless premium réalisé avec Nuxt 4, Vue 3, TypeScript et Tailwind. Catalogue produit YAML-first avec adaptateur Sanity, Stripe Checkout, rendu SSR-first, i18n et performances Lighthouse 95+.',
        sv: 'Premium headless e-handelsbutik byggd med Nuxt 4, Vue 3, TypeScript och Tailwind. YAML-first produktkatalog med Sanity-adapter, Stripe Checkout, SSR-first rendering, i18n och Lighthouse 95+ prestanda.'
      },
      impact: {
        en: 'Built to help solo founders and small brands launch fast, maintainable online stores in record time.',
        fr: 'Pensé pour permettre aux fondateurs solo et petites marques de lancer une boutique rapide et maintenable en un temps record.',
        sv: 'Designad för att låta solo-grundare och små varumärken lansera snabba och underhållbara butiker på rekordtid.'
      }
    },
    {
      name: 'JobBoard Stockholm',
      repoUrl: 'https://github.com/francklebas/jobboard',
      previewImage: '/projects/jobboard.webp',
      role: {
        en: 'Full-Stack Architect & Developer',
        fr: 'Full-Stack Architect & Developer',
        sv: 'Full-Stack Architect & Developer'
      },
      stack: ['Nuxt 4', 'FastAPI', 'Python', 'Docker', 'APScheduler'],
      useCase: {
        en: 'Full-stack job aggregation platform specialized in frontend roles in Stockholm. Built with Nuxt 4 (SSR), FastAPI backend, automated scraping, intelligent caching and Docker deployment.',
        fr: 'Plateforme full-stack d\'agrégation d\'offres d\'emploi frontend à Stockholm. Construite avec Nuxt 4 (SSR), backend FastAPI, scraping automatisé, caching intelligent et déploiement Docker.',
        sv: 'Full-stack jobbaggregator specialiserad på frontend-roller i Stockholm. Byggd med Nuxt 4 (SSR), FastAPI-backend, automatiserad scraping, intelligent caching och Docker-deployment.'
      },
      impact: {
        en: 'Demonstrates complete end-to-end ownership from infrastructure to scalable frontend architecture.',
        fr: 'Démontre une prise en charge complète : de l\'infrastructure et du pipeline de données jusqu\'à l\'architecture frontend scalable et l\'expérience produit.',
        sv: 'Visar full end-to-end ägandeskap från infrastruktur till skalbar frontend-arkitektur och produktupplevelse.'
      }
    }
  ]
}
