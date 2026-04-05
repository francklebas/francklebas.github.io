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
      name: 'jobboard',
      repoUrl: 'https://github.com/francklebas/jobboard',
      previewImage: '/projects/jobboard.png',
      stack: ['Nuxt 4', 'FastAPI', 'PostgreSQL', 'Docker', 'Terraform'],
      useCase: {
        en: 'A full-stack recruitment platform designed for operational clarity and maintainable growth.',
        fr: 'Une plateforme recrutement full-stack pensee pour la clarte operationnelle et la maintenabilite.',
        sv: 'En fullstack-plattform for rekrytering med fokus pa tydlig drift och hallbar utveckling.'
      },
      impact: {
        en: 'Covers infra-to-UI ownership with infrastructure as code and production workflows.',
        fr: 'Demontre une responsabilite complete de l infra a l UI avec IaC et workflows de production.',
        sv: 'Visar helhetsansvar fran infrastruktur till UI med IaC och produktionsfloden.'
      }
    },
    {
      name: 'nuxt-commerce',
      repoUrl: 'https://github.com/francklebas/nuxt-commerce',
      previewImage: '/projects/nuxt-commerce.png',
      stack: ['Nuxt 4', 'Stripe', 'Nuxt Content'],
      useCase: {
        en: 'Headless-style e-commerce implementation with static-first rendering and a content-driven catalog.',
        fr: 'Implementation e-commerce headless avec rendu statique et catalogue pilote par contenu.',
        sv: 'Headless-liknande e-handelslosning med statisk rendering och innehallsdriven katalog.'
      },
      impact: {
        en: 'Shows practical architecture for product pages, checkout flow, and editor autonomy.',
        fr: 'Montre une architecture pragmatique pour pages produit, checkout et autonomie editoriale.',
        sv: 'Visar en praktisk arkitektur for produktsidor, checkout och redaktionell autonomi.'
      }
    },
    {
      name: 'next-swift',
      repoUrl: 'https://github.com/francklebas/next-swift',
      previewImage: '/projects/next-swift.png',
      stack: ['Next.js', 'TypeScript', 'Supabase', 'Clerk', 'Stripe'],
      useCase: {
        en: 'Commercial SaaS starter focused on reliable defaults for authentication, billing, and product shipping.',
        fr: 'Starter SaaS commercial avec des bases solides pour auth, billing et livraison produit.',
        sv: 'Kommersiell SaaS-starter med robusta standardval for inloggning, betalning och leverans.'
      },
      impact: {
        en: 'Accelerates time-to-market for product teams launching subscription products.',
        fr: 'Accelere le time-to-market des equipes lancant des produits a abonnement.',
        sv: 'Minskar time-to-market for team som lanserar prenumerationsprodukter.'
      }
    }
  ]
}
