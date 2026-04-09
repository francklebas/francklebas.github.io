import { useMotions } from '@vueuse/motion'

const MAX_OFFSET = 28
const PREFIX = 'parallax-'

export function useParallaxOnScroll() {
  if (!import.meta.client) {
    return
  }
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return
  }

  const motions = useMotions()
  let rafId = 0

  const tick = () => {
    const vh = window.innerHeight
    const viewportCenter = vh / 2
    for (const key in motions) {
      if (!key.startsWith(PREFIX)) {
        continue
      }
      const motion = motions[key]
      const el = motion?.target as HTMLElement | undefined
      if (!el) {
        continue
      }
      const rect = el.getBoundingClientRect()
      if (rect.bottom < -100 || rect.top > vh + 100) {
        continue
      }
      const progress = (rect.top + rect.height / 2 - viewportCenter) / vh
      const clamped = Math.max(-1, Math.min(1, progress))
      motion.set({ y: -clamped * MAX_OFFSET })
    }
    rafId = requestAnimationFrame(tick)
  }

  onMounted(() => {
    rafId = requestAnimationFrame(tick)
  })

  onBeforeUnmount(() => {
    if (rafId) {
      cancelAnimationFrame(rafId)
    }
  })
}
