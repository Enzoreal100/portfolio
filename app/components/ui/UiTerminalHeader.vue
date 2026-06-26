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
      'terminal-header',
      {
        'is-visible': isVisible,
        'is-opaque': isAtTop,
        'is-translucent': !isAtTop
      }
    ]"
  >
    <div class="header-container">
      <!-- Left Brand Link -->
      <NuxtLink to="/" class="brand-link">
        <span class="brackets">[</span><span class="brand-text">EGR</span><span class="brackets">]</span>
      </NuxtLink>

      <!-- Right Navigation Links -->
      <nav class="nav-menu">
        <NuxtLink to="#about" class="nav-item">
          <span class="brackets">[</span><span class="nav-text">{{ t('nav.about') }}</span><span class="brackets">]</span>
        </NuxtLink>
        <NuxtLink to="#experience" class="nav-item">
          <span class="brackets">[</span><span class="nav-text">{{ t('nav.experience') }}</span><span class="brackets">]</span>
        </NuxtLink>
        <NuxtLink to="#contact" class="nav-item">
          <span class="brackets">[</span><span class="nav-text">{{ t('nav.contact') }}</span><span class="brackets">]</span>
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.terminal-header {
  position: fixed;
  top: 0;
  left: 0;
  transform: translateY(-100%);
  width: 100%;
  height: 60px;
  z-index: 1000;
  box-sizing: border-box;
  font-family: 'Fira Code', 'JetBrains Mono', monospace;
  opacity: 0;
  pointer-events: none;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.3s ease, border-color 0.3s ease;
  border-bottom: 1px solid transparent;
}

/* Visibility transition state */
.terminal-header.is-visible {
  transform: translateY(0);
  opacity: 1;
  pointer-events: auto;
}

/* Opacity states */
.terminal-header.is-opaque {
  background-color: var(--panel-bg, #0D110D);
  border-bottom: 1px solid var(--matrix-green, #00FF41);
  box-shadow: 0 0 8px rgba(0, 255, 65, 0.25);
}

.terminal-header.is-translucent {
  background-color: rgba(13, 17, 13, 0.75);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-bottom: 1px solid rgba(0, 143, 17, 0.3);
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0 2rem;
  margin: 0 auto;
  max-width: 1440px;
  width: 100%;
  box-sizing: border-box;
}

/* Base interactive elements */
.brand-link, .nav-item {
  color: var(--matrix-green, #00FF41);
  text-decoration: none;
  font-size: 1rem;
  letter-spacing: 0.05em;
  display: inline-flex;
  align-items: center;
  transition: text-shadow 0.2s ease, color 0.2s ease;
  outline: none;
}

.brackets {
  color: var(--matrix-dim, #008F11);
  transition: color 0.2s ease;
}

.brand-text, .nav-text {
  padding: 0 0.25rem;
}

/* Hover effects */
.brand-link:hover, .nav-item:hover {
  color: var(--matrix-glow, #4AF626);
  text-shadow: 0 0 8px var(--matrix-glow, #4AF626);
}

.brand-link:hover .brackets, .nav-item:hover .brackets {
  color: var(--matrix-glow, #4AF626);
}

/* Navigation layout */
.nav-menu {
  display: flex;
  gap: 1.5rem;
}

@media (max-width: 768px) {
  .header-container {
    padding: 0 1rem;
  }
  
  .nav-menu {
    gap: 0.75rem;
  }
  
  .brand-link, .nav-item {
    font-size: 0.85rem;
  }
}
</style>
