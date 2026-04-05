import { createClient } from '@sanity/client'
import { fallbackContent } from '~/data/fallback-content'
import type { SiteContent } from '~/types/content'

const SITE_CONTENT_QUERY = `*[_type == "siteContent"][0]`

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function mergeDeep<T>(base: T, extra: unknown): T {
  if (!isRecord(extra)) {
    return base
  }

  const output: Record<string, unknown> = { ...(base as Record<string, unknown>) }
  for (const key of Object.keys(extra)) {
    const baseValue = output[key]
    const extraValue = extra[key]

    if (Array.isArray(baseValue) && Array.isArray(extraValue)) {
      output[key] = extraValue.length > 0 ? extraValue : baseValue
      continue
    }

    if (isRecord(baseValue) && isRecord(extraValue)) {
      output[key] = mergeDeep(baseValue, extraValue)
      continue
    }

    if (extraValue !== undefined && extraValue !== null && extraValue !== '') {
      output[key] = extraValue
    }
  }

  return output as T
}

export async function loadSiteContent() {
  const config = useRuntimeConfig()
  const sanityConfig = config.public.sanity as {
    projectId?: string
    dataset?: string
    apiVersion?: string
  }

  if (!sanityConfig.projectId || !sanityConfig.dataset) {
    return fallbackContent
  }

  try {
    const client = createClient({
      projectId: sanityConfig.projectId,
      dataset: sanityConfig.dataset,
      apiVersion: sanityConfig.apiVersion || '2025-01-01',
      token: config.sanityReadToken,
      useCdn: !config.sanityReadToken
    })

    const remote = await client.fetch<Partial<SiteContent> | null>(SITE_CONTENT_QUERY)
    if (!remote) {
      return fallbackContent
    }

    return mergeDeep(structuredClone(fallbackContent), remote)
  } catch {
    return fallbackContent
  }
}
