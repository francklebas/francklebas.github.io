# Sanity schema blueprint

This is the schema shape expected by `app/composables/use-site-content.ts`.

## Document type: `siteContent`

Top-level structure:

```ts
{
  _type: 'siteContent',
  home: { ... },
  about: { ... },
  contact: { ... },
  projectsTitle: { en: string, fr: string, sv: string },
  projectsIntro: { en: string, fr: string, sv: string },
  projects: [
    {
      name: string,
      repoUrl: string,
      stack: string[],
      useCase: { en: string, fr: string, sv: string },
      impact: { en: string, fr: string, sv: string }
    }
  ]
}
```

Localized fields should use `en`, `fr`, and `sv` keys.

The frontend merges Sanity content with local fallback content to prevent blank pages.
