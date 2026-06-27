<script setup lang="ts">
const route = useRoute()
const { t, locale, setLocale } = useI18n()
const localePath = useLocalePath()

const hasScrolledDown = ref(false)
const isAtTop = ref(true)

const isMainPage = computed(() => {
  const path = route.path.replace(/\/$/, '') || '/'
  return path === '/' || path === '/en' || path === '/es'
})

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
      isAtTop ? 'bg-panel border-matrix-green shadow-[0_4px_12px_rgba(0,255,65,0.15)]' : 'bg-panel/85 backdrop-blur-md border-matrix-dim/40 shadow-[0_4px_20px_rgba(0,0,0,0.8)]'
    ]"
  >
    <div class="flex justify-between items-center h-full px-4 md:px-8 mx-auto max-w-[1440px] w-full box-border">
      <!-- Left Brand Link -->
      <NuxtLink :to="localePath('index')" class="text-matrix-green no-underline text-sm md:text-base tracking-[0.05em] inline-flex items-center transition-all duration-200 outline-none hover:text-matrix-glow hover:[text-shadow:0_0_8px_var(--matrix-glow)] group">
        <span class="text-matrix-dim transition-colors duration-200 group-hover:text-matrix-glow">[</span><span class="px-1 font-bold">{{ t('header.brand') }}</span><span class="text-matrix-dim transition-colors duration-200 group-hover:text-matrix-glow">]</span>
      </NuxtLink>

      <div class="flex items-center gap-2 md:gap-6">
        <!-- Right Navigation Links -->
        <nav class="flex gap-2 sm:gap-4 md:gap-6 text-xs sm:text-sm md:text-base">
          <NuxtLink :to="localePath('index')" active-class="text-matrix-glow [text-shadow:0_0_8px_var(--matrix-glow)] font-bold" class="text-matrix-green no-underline tracking-[0.05em] inline-flex items-center transition-all duration-200 outline-none hover:text-matrix-glow hover:[text-shadow:0_0_8px_var(--matrix-glow)] group">
            <span class="text-matrix-dim transition-colors duration-200 group-hover:text-matrix-glow">[</span><span class="px-1">{{ t('nav.home') }}</span><span class="text-matrix-dim transition-colors duration-200 group-hover:text-matrix-glow">]</span>
          </NuxtLink>
          <NuxtLink :to="localePath('sobre')" active-class="text-matrix-glow [text-shadow:0_0_8px_var(--matrix-glow)] font-bold" class="text-matrix-green no-underline tracking-[0.05em] inline-flex items-center transition-all duration-200 outline-none hover:text-matrix-glow hover:[text-shadow:0_0_8px_var(--matrix-glow)] group">
            <span class="text-matrix-dim transition-colors duration-200 group-hover:text-matrix-glow">[</span><span class="px-1">{{ t('nav.about') }}</span><span class="text-matrix-dim transition-colors duration-200 group-hover:text-matrix-glow">]</span>
          </NuxtLink>
          <NuxtLink :to="localePath('experiencias')" active-class="text-matrix-glow [text-shadow:0_0_8px_var(--matrix-glow)] font-bold" class="text-matrix-green no-underline tracking-[0.05em] inline-flex items-center transition-all duration-200 outline-none hover:text-matrix-glow hover:[text-shadow:0_0_8px_var(--matrix-glow)] group">
            <span class="text-matrix-dim transition-colors duration-200 group-hover:text-matrix-glow">[</span><span class="px-1">{{ t('nav.experience') }}</span><span class="text-matrix-dim transition-colors duration-200 group-hover:text-matrix-glow">]</span>
          </NuxtLink>
          <NuxtLink :to="localePath('contato')" active-class="text-matrix-glow [text-shadow:0_0_8px_var(--matrix-glow)] font-bold" class="text-matrix-green no-underline tracking-[0.05em] inline-flex items-center transition-all duration-200 outline-none hover:text-matrix-glow hover:[text-shadow:0_0_8px_var(--matrix-glow)] group">
            <span class="text-matrix-dim transition-colors duration-200 group-hover:text-matrix-glow">[</span><span class="px-1">{{ t('nav.contact') }}</span><span class="text-matrix-dim transition-colors duration-200 group-hover:text-matrix-glow">]</span>
          </NuxtLink>
        </nav>

        <!-- Language Switcher -->
        <div class="flex items-center gap-1 pl-2 md:pl-4 border-l border-matrix-dim/40 text-xs md:text-sm">
          <button
            type="button"
            @click="setLocale('pt')"
            :class="[
              'px-1.5 py-0.5 transition-all duration-200 cursor-pointer font-mono outline-none',
              locale === 'pt'
                ? 'bg-matrix-green text-void font-bold shadow-[0_0_8px_var(--matrix-green)]'
                : 'text-matrix-dim hover:text-matrix-glow hover:[text-shadow:0_0_5px_var(--matrix-glow)] bg-transparent'
            ]"
            title="Português (BR)"
          >
            PT
          </button>
          <button
            type="button"
            @click="setLocale('en')"
            :class="[
              'px-1.5 py-0.5 transition-all duration-200 cursor-pointer font-mono outline-none',
              locale === 'en'
                ? 'bg-matrix-green text-void font-bold shadow-[0_0_8px_var(--matrix-green)]'
                : 'text-matrix-dim hover:text-matrix-glow hover:[text-shadow:0_0_5px_var(--matrix-glow)] bg-transparent'
            ]"
            title="English"
          >
            EN
          </button>
          <button
            type="button"
            @click="setLocale('es')"
            :class="[
              'px-1.5 py-0.5 transition-all duration-200 cursor-pointer font-mono outline-none',
              locale === 'es'
                ? 'bg-matrix-green text-void font-bold shadow-[0_0_8px_var(--matrix-green)]'
                : 'text-matrix-dim hover:text-matrix-glow hover:[text-shadow:0_0_5px_var(--matrix-glow)] bg-transparent'
            ]"
            title="Español"
          >
            ES
          </button>
        </div>
      </div>
    </div>
  </header>
</template>
