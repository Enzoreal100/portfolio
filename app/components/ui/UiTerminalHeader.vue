<script setup lang="ts">
const route = useRoute()
const { t } = useI18n()

const hasScrolledDown = ref(false)
const isAtTop = ref(true)

const isMainPage = computed(() => route.path === '/' || route.path === '')

const isVisible = computed(() => {
  if (isMainPage.value) {
    return hasScrolledDown.value
  }
  return true
})

const handleScroll = () => {
  if (import.meta.client) {
    const scrollTop = window.scrollY || document.documentElement.scrollTop
    isAtTop.value = scrollTop === 0
    // Trigger hasScrolledDown once user scrolls past 10px from the top
    if (scrollTop > 10) {
      hasScrolledDown.value = true
    }
  }
}

onMounted(() => {
  if (import.meta.client) {
    window.addEventListener('scroll', handleScroll)
    handleScroll()
  }
})

onUnmounted(() => {
  if (import.meta.client) {
    window.removeEventListener('scroll', handleScroll)
  }
})
</script>

<template>
  <header
    :class="[
      'fixed top-0 left-0 w-full h-[60px] z-[1000] box-border font-mono border-b transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]',
      isVisible ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-full opacity-0 pointer-events-none',
      isAtTop ? 'bg-panel border-matrix-green shadow-header-opaque' : 'bg-panel/75 backdrop-blur-md border-matrix-dim/30'
    ]"
  >
    <div class="flex justify-between items-center h-full px-4 md:px-8 mx-auto max-w-[1440px] w-full box-border">
      <!-- Left Brand Link -->
      <NuxtLink to="/" class="text-matrix-green no-underline text-sm md:text-base tracking-[0.05em] inline-flex items-center transition-all duration-200 outline-none hover:text-matrix-glow hover:[text-shadow:0_0_8px_var(--matrix-glow)] group">
        <span class="text-matrix-dim transition-colors duration-200 group-hover:text-matrix-glow">[</span><span class="px-1">EGR</span><span class="text-matrix-dim transition-colors duration-200 group-hover:text-matrix-glow">]</span>
      </NuxtLink>

      <!-- Right Navigation Links -->
      <nav class="flex gap-3 md:gap-6">
        <NuxtLink to="#about" class="text-matrix-green no-underline text-sm md:text-base tracking-[0.05em] inline-flex items-center transition-all duration-200 outline-none hover:text-matrix-glow hover:[text-shadow:0_0_8px_var(--matrix-glow)] group">
          <span class="text-matrix-dim transition-colors duration-200 group-hover:text-matrix-glow">[</span><span class="px-1">{{ t('nav.about') }}</span><span class="text-matrix-dim transition-colors duration-200 group-hover:text-matrix-glow">]</span>
        </NuxtLink>
        <NuxtLink to="#experience" class="text-matrix-green no-underline text-sm md:text-base tracking-[0.05em] inline-flex items-center transition-all duration-200 outline-none hover:text-matrix-glow hover:[text-shadow:0_0_8px_var(--matrix-glow)] group">
          <span class="text-matrix-dim transition-colors duration-200 group-hover:text-matrix-glow">[</span><span class="px-1">{{ t('nav.experience') }}</span><span class="text-matrix-dim transition-colors duration-200 group-hover:text-matrix-glow">]</span>
        </NuxtLink>
        <NuxtLink to="#contact" class="text-matrix-green no-underline text-sm md:text-base tracking-[0.05em] inline-flex items-center transition-all duration-200 outline-none hover:text-matrix-glow hover:[text-shadow:0_0_8px_var(--matrix-glow)] group">
          <span class="text-matrix-dim transition-colors duration-200 group-hover:text-matrix-glow">[</span><span class="px-1">{{ t('nav.contact') }}</span><span class="text-matrix-dim transition-colors duration-200 group-hover:text-matrix-glow">]</span>
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>
