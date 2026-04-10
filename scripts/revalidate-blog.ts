#!/usr/bin/env bun
/**
 * Manually invalidate blog cache entries on the live site.
 *
 * Usage:
 *   bun run scripts/revalidate-blog.ts <slug> [locale]
 *   bun run scripts/revalidate-blog.ts --all
 *   bun run scripts/revalidate-blog.ts --list [locale]
 *
 * Required env vars:
 *   BLOG_REVALIDATE_SECRET   matches server runtimeConfig.blogRevalidateSecret
 *   BLOG_REVALIDATE_URL      e.g. https://francklebas.com (defaults to that)
 */

const SITE = process.env.BLOG_REVALIDATE_URL || "https://francklebas.com";
const SECRET = process.env.BLOG_REVALIDATE_SECRET;

if (!SECRET) {
  console.error("Missing BLOG_REVALIDATE_SECRET in env");
  process.exit(1);
}

const args = process.argv.slice(2);
const body: Record<string, unknown> = {};

if (args.includes("--all")) {
  body.locale = "all";
  body.purgeList = true;
} else if (args.includes("--list")) {
  const idx = args.indexOf("--list");
  body.purgeList = true;
  body.locale = args[idx + 1] || "all";
} else {
  const slug = args[0];
  const locale = args[1] || "all";
  if (!slug) {
    console.error(
      "Usage: revalidate-blog.ts <slug> [locale] | --all | --list [locale]",
    );
    process.exit(1);
  }
  body.slug = slug;
  body.locale = locale;
}

const res = await fetch(`${SITE}/api/blog/revalidate`, {
  method: "POST",
  headers: {
    "content-type": "application/json",
    authorization: `Bearer ${SECRET}`,
  },
  body: JSON.stringify(body),
});

if (!res.ok) {
  console.error(`Failed: HTTP ${res.status}`);
  console.error(await res.text());
  process.exit(1);
}

console.log(JSON.stringify(await res.json(), null, 2));
