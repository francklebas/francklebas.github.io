import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test.describe('Accessibility baseline', () => {
  const pages = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ]

  for (const page of pages) {
    test(`${page.name} page should have no accessibility violations`, async ({ page: p }) => {
      await p.goto(page.path)
      
      const accessibilityScanResults = await new AxeBuilder({ page: p })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
        .analyze()

      expect(accessibilityScanResults.violations).toEqual([])
    })
  }
})

test.describe('Keyboard navigation', () => {
  test('Skip link should be focusable', async ({ page }) => {
    await page.goto('/')
    await page.keyboard.press('Tab')
    
    const skipLink = page.getByRole('link', { name: /aller au contenu|skip to content/i })
    await expect(skipLink).toBeFocused()
  })

  test('Focus indicators should be visible', async ({ page }) => {
    await page.goto('/')
    await page.keyboard.press('Tab')
    
    const focusedElement = page.locator(':focus')
    await expect(focusedElement).toBeVisible()
    
    const styles = await focusedElement.evaluate(el => {
      const computed = window.getComputedStyle(el)
      return {
        outline: computed.outline,
        outlineOffset: computed.outlineOffset,
        boxShadow: computed.boxShadow,
      }
    })
    
    const hasVisibleOutline = styles.outline !== 'none' || 
                              styles.outline !== '0px' ||
                              styles.boxShadow !== 'none'
    expect(hasVisibleOutline).toBe(true)
  })
})

test.describe('Landmarks', () => {
  test('Main landmark should exist', async ({ page }) => {
    await page.goto('/')
    const main = page.locator('main')
    await expect(main).toHaveCount(1)
  })

  test('Navigation landmark should exist', async ({ page }) => {
    await page.goto('/')
    const nav = page.locator('nav[aria-label]')
    await expect(nav).toHaveCount(1)
  })
})
