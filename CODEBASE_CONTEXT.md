# Contexte projet

**Stack :** Nuxt 4 (Vue 3 SSG), TypeScript strict, Tailwind CSS 4 + DaisyUI
**CMS :** Sanity (read-only, dataset privé) avec fallback local dans `app/data/`
**i18n :** 3 langues (EN, FR, SV) via `@nuxtjs/i18n`
**Deploy :** Static Site Generation → GitHub Pages / Cloudflare Pages (wrangler preset)
**Tests :** Playwright e2e + axe-core pour l'accessibilité

**Architecture :**
- `app/components/` — composants Vue réutilisables
- `app/composables/` — logique partagée (useSanity, useI18n, etc.)
- `app/pages/` — routes (/about, /projects, /contact)
- `app/data/` — contenu fallback si pas de token Sanity
- `server/` — endpoints backend Nitro
- `i18n/` — fichiers de traduction

**Modules sensibles :**
- Intégration Sanity : token read-only, ne jamais exposer côté client
- i18n : toute string visible doit être traduite dans les 3 langues
- Accessibilité : conformité WCAG, contrastes via CSS variables
- Fallback data : doit rester synchronisé avec le schéma Sanity

**Conventions de code :**
- Early returns systématiques
- Composables Vue pour la logique réutilisable
- CSS variables pour les couleurs (WCAG compliant)
- Nommage explicite (pas d'abréviations)
- Fonctions petites et focalisées

**Anti-patterns interdits :**
- Abstractions prématurées
- Singletons
- Magic numbers
- Commentaires évidents
