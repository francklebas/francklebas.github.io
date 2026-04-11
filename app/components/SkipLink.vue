<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <a
    href="#main-content"
    class="skip-link"
  >
    {{ t('ui.skipToContent') }}
  </a>
</template>

<style scoped>
.skip-link {
  position: absolute;
  top: -100%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
  padding: 0.75rem 1.5rem;
  background: var(--color-primary);
  color: var(--color-primary-content);
  font-weight: 600;
  text-decoration: none;
  border-radius: var(--radius-box);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: top 0.2s ease;
}

.skip-link:focus {
  top: 1rem;
}

@media (prefers-reduced-motion: reduce) {
  .skip-link {
    transition: none;
  }
}
</style>
