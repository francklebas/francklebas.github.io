export type LocaleCode = 'en' | 'fr' | 'sv'

export type LocalizedText = Record<LocaleCode, string>

export interface HeroContent {
  eyebrow: LocalizedText
  title: LocalizedText
  lead: LocalizedText
  primaryCtaLabel: LocalizedText
  primaryCtaHref: string
}

export interface Metric {
  value: string
  label: LocalizedText
  progress?: number
}

export interface ExperienceItem {
  role: string
  company: string
  period: string
  details: LocalizedText
}

export interface ProjectItem {
  name: string
  repoUrl: string
  demoUrl?: string
  previewImage?: string
  role?: LocalizedText
  stack: string[]
  useCase: LocalizedText
  impact: LocalizedText
}

export interface ContactContent {
  title: LocalizedText
  intro: LocalizedText
  mailtoSubject: LocalizedText
  mailtoBody: LocalizedText
  calendly?: string
  email: string
  phone?: string
  linkedin: string
  github: string
}

export interface AboutContent {
  title: LocalizedText
  intro: LocalizedText
  philosophyTitle: LocalizedText
  philosophy: LocalizedText[]
  experienceTitle: LocalizedText
  experiences: ExperienceItem[]
}

export interface HomeContent {
  hero: HeroContent
  highlightsTitle: LocalizedText
  highlights: LocalizedText[]
  approachTitle?: LocalizedText
  approachIntro?: LocalizedText[]
  approachBullets?: LocalizedText[]
  metricsTitle: LocalizedText
  metrics: Metric[]
}

export interface SiteContent {
  home: HomeContent
  about: AboutContent
  contact: ContactContent
  projectsTitle: LocalizedText
  projectsIntro: LocalizedText
  projects: ProjectItem[]
}
