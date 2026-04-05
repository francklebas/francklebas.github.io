let observer: IntersectionObserver | null = null

function createObserver() {
  if (!import.meta.client || observer) {
    return
  }

  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer?.unobserve(entry.target)
        }
      }
    },
    {
      threshold: 0.18,
      rootMargin: '0px 0px -8% 0px'
    }
  )
}

export function initRevealOnScroll() {
  if (!import.meta.client) {
    return
  }

  const candidates = Array.from(document.querySelectorAll<HTMLElement>('.reveal-init'))
  if (!candidates.length) {
    return
  }

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    for (const item of candidates) {
      item.classList.add('is-visible')
    }
    return
  }

  createObserver()

  for (const item of candidates) {
    if (!item.classList.contains('is-visible')) {
      observer?.observe(item)
    }
  }
}
