const STORAGE_KEY = 'theme'
type Theme = 'light' | 'dark'

const theme = ref<Theme>('light')

export function useTheme() {
  function apply(value: Theme) {
    theme.value = value
    if (import.meta.client) {
      document.documentElement.setAttribute('data-theme', value)
      localStorage.setItem(STORAGE_KEY, value)
    }
  }

  function toggle() {
    apply(theme.value === 'light' ? 'dark' : 'light')
  }

  function init() {
    if (!import.meta.client) return
    const stored = localStorage.getItem(STORAGE_KEY) as Theme | null
    const preferred = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    apply(stored || preferred)
  }

  return { theme: readonly(theme), toggle, init }
}
