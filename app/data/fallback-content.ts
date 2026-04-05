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
        fr: 'Architecte frontend forme au design, je construis des systemes qui passent a l echelle, restent rapides et gardent une qualite d execution.',
        sv: 'Designutbildad frontend-arkitekt som bygger system som skalar, forblir snabba och samtidigt kanns genomarbetade.'
      },
      primaryCtaLabel: {
        en: 'View selected projects',
        fr: 'Voir les projets selectionnes',
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
        fr: 'Design systems et APIs de composants composables pour une maintenabilite long terme.',
        sv: 'Designsystem och komponerbara komponent-API:er for langsiktig hallbarhet.'
      },
      {
        en: 'SSR/SSG strategy, Core Web Vitals ownership, and measurable SEO outcomes.',
        fr: 'Strategie SSR/SSG, pilotage des Core Web Vitals et impact SEO mesurable.',
        sv: 'SSR/SSG-strategi, agarskap av Core Web Vitals och matbara SEO-resultat.'
      },
      {
        en: 'Mentoring teams, code review culture, and architecture standards that scale.',
        fr: 'Mentorat, culture de code review et standards d architecture qui passent a l echelle.',
        sv: 'Mentorskap, code review-kultur och arkitekturstandarder som skalar.'
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
          sv: 'anvandare pa en Vue-baserad SaaS-plattform'
        }
      },
      {
        value: '70%',
        progress: 70,
        label: {
          en: 'CI/CD build time reduction (Vite + TypeScript migration)',
          fr: 'reduction du temps de build CI/CD (migration Vite + TypeScript)',
          sv: 'kortare CI/CD-byggtid (migrering till Vite + TypeScript)'
        }
      },
      {
        value: '50%',
        progress: 50,
        label: {
          en: 'FCP/LCP improvement on a national high-traffic platform',
          fr: 'amelioration FCP/LCP sur une plateforme nationale a fort trafic',
          sv: 'forbattring av FCP/LCP pa en nationell hogtrafikplattform'
        }
      },
      {
        value: '35%',
        progress: 35,
        label: {
          en: 'organic traffic growth via SSR and structured data',
          fr: 'croissance du trafic organique via SSR et donnees structurees',
          sv: 'okad organisk trafik via SSR och strukturerad data'
        }
      }
    ]
  },
  about: {
    title: {
      en: 'About',
      fr: 'A propos',
      sv: 'Om mig'
    },
    intro: {
      en: 'I design frontend systems that stay fast, understandable, and evolutive under product pressure. My background in visual communication shapes both API design and UX decisions.',
      fr: 'Je concois des systemes frontend rapides, lisibles et evolutifs sous pression produit. Ma formation en communication visuelle influence mes choix d API et d experience utilisateur.',
      sv: 'Jag bygger frontend-system som forblir snabba, begripliga och utvecklingsbara under produkttryck. Min bakgrund inom visuell kommunikation paverkar bade API-design och UX-beslut.'
    },
    philosophyTitle: {
      en: 'Architecture philosophy',
      fr: 'Philosophie d architecture',
      sv: 'Arkitekturfilosofi'
    },
    philosophy: [
      {
        en: 'Standards first: semantic HTML and native web APIs before unnecessary abstractions.',
        fr: 'Standards first: HTML semantique et APIs web natives avant les abstractions inutiles.',
        sv: 'Standarder forst: semantisk HTML och webbens egna API:er fore onodiga abstraktioner.'
      },
      {
        en: 'Performance by design: rendering strategy, LCP budgets, and bundle ownership from day one.',
        fr: 'Performance by design: strategie de rendu, budget LCP et maitrise du bundle des le depart.',
        sv: 'Prestanda by design: renderingsstrategi, LCP-budget och kontroll over bundlen fran dag ett.'
      },
      {
        en: 'Composable systems: design tokens, reusable component APIs, and CMS-driven content workflows.',
        fr: 'Systemes composables: design tokens, composants reutilisables et workflows de contenu pilotes par CMS.',
        sv: 'Komponerbara system: design tokens, ateranvandbara komponent-API:er och CMS-styrda innehallsfloden.'
      }
    ],
    experienceTitle: {
      en: 'Selected experience',
      fr: 'Experience selectionnee',
      sv: 'Utvald erfarenhet'
    },
    experiences: [
      {
        role: 'Lead Frontend Architect',
        company: 'Betao AB',
        period: '2022-2026',
        details: {
          en: 'Owned the complete Vue 3 frontend architecture for a multi-product SaaS platform (500k+ users), led design-system delivery, and mentored six developers.',
          fr: 'Responsable de toute l architecture frontend Vue 3 pour une plateforme SaaS multi-produits (500k+ utilisateurs), avec pilotage design system et mentorat de six developpeurs.',
          sv: 'Ansvarade for hela Vue 3-arkitekturen for en SaaS-plattform med flera produkter (500k+ anvandare), byggde designsystem och coachade sex utvecklare.'
        }
      },
      {
        role: 'Senior React Developer',
        company: 'FDJ',
        period: '2019-2020',
        details: {
          en: 'Led React architecture on a national lottery platform serving millions of users, with major Core Web Vitals gains.',
          fr: 'Pilotage de l architecture React sur la plateforme nationale FDJ avec des gains significatifs sur les Core Web Vitals.',
          sv: 'Ledde React-arkitekturen for den nationella lotteriplattformen FDJ med tydliga forbattringar av Core Web Vitals.'
        }
      },
      {
        role: 'Lead Frontend Developer & Fullstack Engineer',
        company: 'Inovalia',
        period: '2017-2019',
        details: {
          en: 'Early Next.js adoption for B2B SaaS with real-time collaboration and SSR-first architecture.',
          fr: 'Adoption precurseur de Next.js pour un SaaS B2B avec collaboration temps reel et architecture SSR.',
          sv: 'Tidig adoption av Next.js for B2B-SaaS med realtidssamarbete och SSR-forst-arkitektur.'
        }
      },
      {
        role: 'Founder & Full Stack Developer',
        company: 'Desire Labs',
        period: '2009-2020',
        details: {
          en: 'Founded and ran an independent web agency, shipping 50+ projects with end-to-end product ownership.',
          fr: 'Fondateur d une agence web independante avec plus de 50 projets livres en responsabilite complete.',
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
      fr: 'Pour des missions d architecture, des roles senior frontend, ou une collaboration produit, le plus simple est un email direct.',
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
    fr: 'Projets selectionnes',
    sv: 'Utvalda projekt'
  },
  projectsIntro: {
    en: 'A manual shortlist of repositories representing product architecture, frontend craft, and end-to-end ownership.',
    fr: 'Une short-list manuelle de repositories representant architecture produit, qualite frontend et responsabilite end-to-end.',
    sv: 'En manuell shortlist av repositories som visar produktarkitektur, frontend-kvalitet och end-to-end-ansvar.'
  },
  projects: [
    {
      name: 'NextSwift Pro - SaaS Boilerplate',
      repoUrl: 'https://github.com/francklebas/next-swift',
      previewImage: '/projects/next-swift.png',
      stack: [
        'Next.js 15 App Router',
        'TypeScript',
        'Clerk Authentication',
        'Supabase Backend',
        'Stripe Subscriptions',
        'Sold on Gumroad'
      ],
      useCase: {
        en: 'Commercial SaaS starter kit built with Next.js 15, TypeScript, Clerk, Supabase, and Stripe for indie makers and small teams launching subscription products fast.',
        fr: 'Starter kit SaaS commercial avec Next.js 15, TypeScript, Clerk, Supabase et Stripe, pense pour les indie makers et petites equipes qui lancent vite.',
        sv: 'Kommersiellt SaaS-starterkit byggt med Next.js 15, TypeScript, Clerk, Supabase och Stripe for indie makers och sma team som vill lansera snabbt.'
      },
      impact: {
        en: 'Includes ready-to-use auth, user dashboard, Stripe billing and webhooks, Supabase integration, and clean production-ready architecture patterns from day one.',
        fr: 'Inclut auth prete a l emploi, dashboard utilisateur, billing Stripe et webhooks, integration Supabase et architecture propre prete prod des le premier jour.',
        sv: 'Inkluderar fardig autentisering, anvandardashboard, Stripe billing och webhooks, Supabase-integration och rena produktionsklara arkitekturmonster fran dag ett.'
      }
    },
    {
      name: 'Nuxt Commerce - Headless Storefront',
      repoUrl: 'https://github.com/francklebas/nuxt-commerce',
      previewImage: '/projects/nuxt-commerce.png',
      stack: ['Nuxt 4', 'Vue 3', 'TypeScript', 'Stripe', 'Sanity'],
      useCase: {
        en: 'Nuxt 4 premium storefront for solo founders and small brands, with YAML-first catalog or Sanity adapter, Stripe Checkout, SSR-first rendering, and i18n.',
        fr: 'Storefront premium Nuxt 4 pour solo founders et petites marques, avec catalogue YAML ou adaptateur Sanity, Stripe Checkout, rendu SSR et i18n.',
        sv: 'Premium storefront i Nuxt 4 for solo founders och mindre varumarken, med YAML-katalog eller Sanity-adapter, Stripe Checkout, SSR-forst och i18n.'
      },
      impact: {
        en: 'Designed to launch a production-ready shop in one day, with high Lighthouse targets and full developer ownership.',
        fr: 'Concu pour lancer une boutique prete pour la production en une journee, avec objectifs Lighthouse eleves et responsabilite complete.',
        sv: 'Utformad for att lansera en produktionsklar butik pa en dag, med hoga Lighthouse-mal och fullt utvecklaransvar.'
      }
    },
    {
      name: 'JobBoard Stockholm',
      repoUrl: 'https://github.com/francklebas/jobboard',
      previewImage: '/projects/jobboard.png',
      stack: ['Nuxt 4', 'FastAPI', 'Python', 'Docker', 'APScheduler'],
      useCase: {
        en: 'Full-stack job aggregation platform combining SSR frontend, automated scraping, and Dockerized backend services for the Stockholm tech market.',
        fr: 'Plateforme full-stack d aggregation d offres combinant frontend SSR, scraping automatise et services backend Dockerises pour le marche tech de Stockholm.',
        sv: 'Fullstack-plattform for jobbaggregering med SSR-frontend, automatiserad scraping och dockeriserade backendtjanster for Stockholms techmarknad.'
      },
      impact: {
        en: 'Demonstrates full ownership from data ingestion and caching to user-facing product experience.',
        fr: 'Demontre une responsabilite complete de l ingestion de donnees et du cache jusqu a l experience produit cote utilisateur.',
        sv: 'Visar helhetsansvar fran datainhamtning och cache till produktupplevelsen for slutanvandaren.'
      }
    }
  ]
}
