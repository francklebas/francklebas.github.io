<script setup lang="ts">
const i18nHead = useLocaleHead({
  addDirAttribute: true,
  addSeoAttributes: true
})
</script>

<template>
  <Html :lang="i18nHead.htmlAttrs?.lang || 'en'" :dir="i18nHead.htmlAttrs?.dir">
    <Head>
      <template v-for="link in i18nHead.link" :key="link.key || link.href">
        <Link v-bind="link" />
      </template>
      <template v-for="meta in i18nHead.meta" :key="meta.key || meta.property || meta.name">
        <Meta v-bind="meta" />
      </template>
    </Head>
    <Body>
      <SkipLink />
      <NuxtLayout>
        <NuxtRouteAnnouncer />
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>
