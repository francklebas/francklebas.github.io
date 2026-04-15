# francklebas.github.io

Personal multilingual portfolio website built with Nuxt and deployed to Cloudflare Pages.

## Stack

- **Nuxt 4** (SSG + Cloudflare Pages preset)
- **Vue 3**, **TypeScript**, **Tailwind CSS 4**, **DaisyUI 5**
- `@nuxtjs/i18n` (EN default + browser language detection)
- `@vueuse/motion` for scroll animations
- `@nuxtjs/sitemap` for dynamic sitemap generation
- **Sanity Content Lake** as headless CMS
- **Cloudflare Pages** for hosting + **Wrangler** for CLI deployment
- **Cloudflare Workers AI** for on-the-fly blog article translation
- **Cloudflare KV** for caching blog translations and list
- **Playwright** + `@axe-core/playwright` for accessibility testing

## Routes

- `/` — Home
- `/about` — About
- `/projects` — Selected projects
- `/contact` — Contact (mail + Calendly)
- `/blog` — Articles list (dev.to integration)
- `/blog/:slug` — Article detail

---

## Reproduce from zero

### 1. Prerequisites

- **Node.js** >= 20 (or **Bun**)
- A **Cloudflare** account (free tier works)
- A **Sanity** account (free tier works)
- (Optional) A **dev.to** account if you want the blog section
- (Optional) A **Calendly** account if you want the booking button

### 2. Clone and install

```bash
git clone https://github.com/francklebas/francklebas.github.io.git
cd francklebas.github.io
bun install
# or: npm install
```

### 3. Configure Sanity (CMS)

The site reads content from a private Sanity dataset at **build time**. If no token is provided, it falls back to `app/data/fallback-content.ts`.

#### 3.1 Create a Sanity project

1. Go to [sanity.io/manage](https://sanity.io/manage) and create a new project.
2. Note down the **Project ID**.
3. Create a dataset named `production` and keep it **Private**.
4. In the project settings, add your local origin to **CORS Origins**:
   - `http://localhost:3000`
   - Your production domain (e.g. `https://francklebas.com`)

#### 3.2 Create a read-only API token

1. In Sanity manage, go to **API > Tokens**.
2. Click **Add API token**.
3. Name it `nuxt-readonly` and set the role to **Viewer** (read-only).
4. Copy the token immediately — you will not see it again.

#### 3.3 (Optional) Import the recommended schema

The code expects a document type named `siteContent` with these top-level fields:

- `home`
- `about`
- `contact`
- `projectsTitle`
- `projectsIntro`
- `projects[]`

Localized fields must include `en`, `fr`, and `sv` keys.

You can create this schema manually in Sanity Studio or adapt the fallback content in `app/data/fallback-content.ts` into a migration script.

### 4. Configure local environment

Copy the example file and fill in your credentials:

```bash
cp .env.example .env
```

Edit `.env`:

```env
SANITY_PROJECT_ID=your-project-id
SANITY_DATASET=production
SANITY_API_VERSION=2025-01-01
SANITY_READ_TOKEN=your-read-only-token
NUXT_APP_BASE_URL=/
NUXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-name/30min
NUXT_DEVTO_USERNAME=your-devto-username
```

> **Security note:** `SANITY_READ_TOKEN` is only used server-side during build. It is never exposed to the browser.

### 5. Run locally

```bash
bun run dev
```

The site will be available at `http://localhost:3000`.

If you skipped the Sanity setup, the site will still render using the local fallback content.

### 6. Run tests

```bash
# Accessibility + keyboard + landmark tests
bun run test:e2e

# With UI mode
bun run test:e2e:ui
```

---

## Deploy to Cloudflare Pages

### 7. Install and authenticate Wrangler

```bash
npm install -g wrangler
wrangler login
```

This opens a browser window to authorize the CLI with your Cloudflare account.

### 8. Create the Pages project

You can create the project either via the Cloudflare Dashboard or via Wrangler:

```bash
wrangler pages project create francklebas-site --production-branch=main
```

> If the name is already taken, pick a unique one and update `wrangler.toml` accordingly.

### 9. Create the KV namespace

The blog translation cache requires a KV namespace:

```bash
wrangler kv:namespace create BLOG_KV
```

Copy the returned `id` and paste it into `wrangler.toml`:

```toml
[[kv_namespaces]]
binding = "BLOG_KV"
id = "your-kv-namespace-id"
```

### 10. Enable Workers AI

Workers AI is enabled at the account level on Cloudflare.

1. Go to your Cloudflare Dashboard → **AI > Workers AI**.
2. Accept the terms if you haven't already.
3. The `ai` binding in `wrangler.toml` is already configured and will work automatically:

```toml
[ai]
binding = "AI"
```

### 11. Upload secrets to Cloudflare

Upload the sensitive tokens so they are available during the build:

```bash
wrangler pages secret put SANITY_READ_TOKEN
# paste your token when prompted

wrangler pages secret put BLOG_REVALIDATE_SECRET
# paste a random secret string (used for on-demand blog revalidation)
```

Optional public variables (non-secret) can be added with:

```bash
wrangler pages deployment-tail --project-name=francklebas-site
```

Or set them in the Cloudflare Dashboard under **Pages > Project > Settings > Environment variables**:

- `NUXT_PUBLIC_CALENDLY_URL`
- `NUXT_DEVTO_USERNAME`
- `NUXT_APP_BASE_URL` (use `/` for custom domains)
- `SANITY_PROJECT_ID`
- `SANITY_DATASET`
- `SANITY_API_VERSION`

### 12. Build and deploy

```bash
# Production build + deploy
bun run build:deploy
```

This runs:
1. `nuxt build` (outputs to `dist/`)
2. `node scripts/patch-nitro.js` (fixes a known Cloudflare proxy bug)
3. `wrangler pages deploy dist`

#### Preview before deploying

```bash
bun run build
bun run preview:cf
```

---

## Build pipeline notes

### `scripts/patch-nitro.js`

The Cloudflare Pages preset in Nitro contains a known proxy bug that can break runtime execution. A `postbuild` script automatically patches the generated worker:

```json
"scripts": {
  "build": "nuxt build",
  "postbuild": "node scripts/patch-nitro.js",
  "build:deploy": "npm run build && npm run deploy"
}
```

### Why `nodejs_compat_v2`?

`wrangler.toml` uses `compatibility_flags = ["nodejs_compat_v2"]` to ensure full Node.js API compatibility for the server-side parts (markdown rendering, Sanity client, etc.).

---

## Content model ( Sanity schema )

Create a document type named `siteContent` with these top-level fields:

- `home`
- `about`
- `contact`
- `projectsTitle`
- `projectsIntro`
- `projects[]`

Localized fields should include `en`, `fr`, and `sv` keys.

You can find the exact shape expected by the frontend in `app/types/content.ts` and the fallback data in `app/data/fallback-content.ts`.

---

## Features

### Contact & Booking
The contact page uses `mailto:` by default for zero backend cost. If `NUXT_PUBLIC_CALENDLY_URL` is set, a **Book a call** button appears on both the home page and the contact page.

### Blog
Articles are fetched from **dev.to** via `NUXT_DEVTO_USERNAME`. Articles can be translated on-the-fly using the **Cloudflare Workers AI** binding (`AI`). Translations are cached in **KV** (`BLOG_KV`) to reduce API calls.

### Theme switcher
Users can toggle between light and dark themes. The preference is persisted to `localStorage` and synced with the `data-theme` attribute on `<html>`.

### Accessibility
- axe-core automated scans on every page (`tests/e2e/accessibility.spec.ts`)
- Keyboard navigation checks (focus indicators, skip link)
- Semantic landmarks and ARIA labels
- Reduced motion support (`prefers-reduced-motion`)

---

## Useful commands

| Command | Description |
|---------|-------------|
| `bun run dev` | Start local dev server |
| `bun run generate` | Generate static site |
| `bun run build` | Build for Cloudflare Pages |
| `bun run preview:cf` | Preview the Cloudflare build locally |
| `bun run deploy` | Deploy `dist/` to Cloudflare Pages |
| `bun run build:deploy` | Build + deploy in one command |
| `bun run test:e2e` | Run Playwright accessibility tests |
| `wrangler kv:namespace list` | List KV namespaces |
| `wrangler pages secret list` | List uploaded secrets |
