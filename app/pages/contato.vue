<script setup lang="ts">
const { t } = useI18n()

definePageMeta({
  alias: ['/contact']
})

useHead({
  title: () => `${t('system.title')} // ${t('nav.contact')}`
})
</script>

<template>
  <main class="max-w-[1440px] mx-auto pt-20 px-4 md:px-8 pb-12 box-border">
    <SectionsContact />
  </main>
</template>
