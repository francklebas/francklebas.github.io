# francklebas.github.io

Personal multilingual portfolio website built with Nuxt SSG and powered by Sanity as headless CMS.

## Stack

- Nuxt 4 (static generation)
- `@nuxtjs/i18n` (EN default + browser language detection)
- Sanity Content Lake (project: `5v62g31w`, dataset: `production`)
- GitHub Pages deployment

## Routes

- `/`
- `/about`
- `/projects`
- `/contact`

## Local setup

```bash
bun install
bun run dev
```

## Build static output

```bash
bun run generate
```

Generated files are in `.output/public`.

## Environment variables

Create a local `.env` from `.env.example`.

- `SANITY_PROJECT_ID=5v62g31w`
- `SANITY_DATASET=production`
- `SANITY_API_VERSION=2025-01-01`
- `SANITY_READ_TOKEN=<read-only token>`

## Sanity auth mode (A)

This repository uses **private dataset + read-only token at build time**:

1. Keep dataset private in Sanity.
2. Create a read-only token in Sanity manage UI.
3. Store token as GitHub secret: `SANITY_READ_TOKEN`.
4. Workflow injects token only during build, never in browser runtime.

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

## Contact behavior

Contact page uses `mailto:` intentionally for zero backend cost and zero secret exposure on GitHub Pages.

## GitHub Pages deployment

Use the included workflow in `.github/workflows/deploy.yml`.

Required repository secrets:

- `SANITY_READ_TOKEN`

Optional repository variables:

- `NUXT_APP_BASE_URL` (keep `/` for `francklebas.github.io`)
