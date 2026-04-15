# francklebas.github.io

Personal multilingual portfolio website built with Nuxt and deployed to Cloudflare Pages.

## Stack

- **Nuxt 4** (SSG + Cloudflare Pages preset)
- **Vue 3**, **TypeScript**, **Tailwind CSS 4**, **DaisyUI 5**
- `@nuxtjs/i18n` (EN default + browser language detection)
- `@vueuse/motion` for scroll animations
- `@nuxtjs/sitemap` for dynamic sitemap generation
- **Sanity Content Lake** (project: `5v62g31w`, dataset: `production`)
- **Cloudflare Pages** deployment via Wrangler
- **Playwright** + `@axe-core/playwright` for accessibility testing

## Routes

- `/` — Home
- `/about` — About
- `/projects` — Selected projects
- `/contact` — Contact (mail + Calendly)
- `/blog` — Articles list (dev.to integration)
- `/blog/:slug` — Article detail

## Local setup

```bash
bun install
bun run dev
```

## Build and preview

```bash
# Static generation
bun run generate

# Or full build for Cloudflare
bun run build
```

Generated files are in `dist/`.

## Environment variables

Create a local `.env` from `.env.example`.

| Variable | Purpose | Required |
|----------|---------|----------|
| `SANITY_PROJECT_ID` | Sanity project ID (`5v62g31w`) | No |
| `SANITY_DATASET` | Sanity dataset (`production`) | No |
| `SANITY_API_VERSION` | Sanity API version (`2025-01-01`) | No |
| `SANITY_READ_TOKEN` | Read-only token for private dataset | **Yes** for live CMS data |
| `NUXT_PUBLIC_CALENDLY_URL` | Calendly booking link shown on home/contact | Optional |
| `NUXT_DEVTO_USERNAME` | dev.to username for `/blog` articles | Optional |
| `BLOG_REVALIDATE_SECRET` | Secret for on-demand blog revalidation | Optional |

## Sanity auth mode

This repository uses **private dataset + read-only token at build time**:

1. Keep dataset private in Sanity.
2. Create a read-only token in Sanity manage UI.
3. Store token as repository secret: `SANITY_READ_TOKEN`.
4. The build injects the token only at build time, never in browser runtime.

If no token is present, the website falls back to local content in `app/data/fallback-content.ts`.

## Content model (recommended Sanity schema)

Create a document type named `siteContent` with these top-level fields:

- `home`
- `about`
- `contact`
- `projectsTitle`
- `projectsIntro`
- `projects[]`

Localized fields should include `en`, `fr`, and `sv` keys.

## Features

### Contact & Booking
The contact page uses `mailto:` by default for zero backend cost. If `NUXT_PUBLIC_CALENDLY_URL` is set, a **Book a call** button appears on both the home page and the contact page.

### Blog
Articles are fetched from **dev.to** via `NUXT_DEVTO_USERNAME`. Articles can be translated on-the-fly using a **Cloudflare Workers AI** binding (`AI`).

### Theme switcher
Users can toggle between light and dark themes. The preference is persisted to `localStorage` and synced with `data-theme`.

### Accessibility
- axe-core automated scans on every page (`tests/e2e/accessibility.spec.ts`)
- Keyboard navigation checks (focus indicators, skip link)
- Semantic landmarks and ARIA labels

## Deployment

Deployed to **Cloudflare Pages** using Wrangler.

Required secrets (Cloudflare or GitHub Actions):

- `SANITY_READ_TOKEN`

Optional variables:

- `NUXT_PUBLIC_CALENDLY_URL`
- `NUXT_DEVTO_USERNAME`
- `BLOG_REVALIDATE_SECRET`
- `NUXT_APP_BASE_URL` (keep `/` for custom domain)

### Build pipeline notes
A `postbuild` script (`scripts/patch-nitro.js`) patches a known Nitro proxy bug for the Cloudflare preset.
