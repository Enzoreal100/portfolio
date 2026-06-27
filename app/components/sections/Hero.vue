<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
</script>

<template>
  <section class="w-full py-6 box-border font-mono">
    <div class="w-full bg-panel border border-matrix-dim rounded-none shadow-[0_0_8px_var(--matrix-green)] transition-all duration-300 hover:border-matrix-green">
      <!-- Terminal Window Bar -->
      <div class="bg-matrix-dim/20 border-b border-matrix-dim py-2 px-4 text-matrix-green font-bold flex items-center justify-between text-xs md:text-sm">
        <span>{{ t('hero.boot_command') }}</span>
        <div class="flex gap-1.5">
          <span class="w-2.5 h-2.5 inline-block bg-matrix-dim/50 border border-matrix-green"></span>
          <span class="w-2.5 h-2.5 inline-block bg-matrix-dim/50 border border-matrix-green"></span>
          <span class="w-2.5 h-2.5 inline-block bg-matrix-green shadow-[0_0_5px_var(--matrix-green)]"></span>
        </div>
      </div>

      <!-- Terminal Body -->
      <div class="p-6 md:p-8 overflow-x-auto">
        <!-- ASCII Banner -->
        <pre class="text-matrix-green [text-shadow:0_0_5px_var(--matrix-glow)] leading-[1.1] mb-6 text-[0.55rem] sm:text-xs md:text-base font-bold select-none overflow-hidden">
███████╗ ██████╗ ██████╗ 
██╔════╝██╔════╝ ██╔══██╗
█████╗  ██║  ███╗██████╔╝
██╔══╝  ██║   ██║██╔══██╗
███████╗╚██████╔╝██║  ██║
╚══════╝ ╚═════╝ ╚═╝  ╚═╝
        </pre>

        <div class="space-y-3 mb-8 border-l-2 border-matrix-green pl-4">
          <h1 class="text-2xl md:text-4xl font-bold tracking-wider text-matrix-green [text-shadow:0_0_8px_var(--matrix-glow)]">
            {{ t('hero.title') }}
          </h1>
          <p class="text-sm md:text-lg text-matrix-glow font-medium">
            // {{ t('hero.subtitle') }}
          </p>
        </div>

        <div class="space-y-2 text-xs md:text-sm text-matrix-dim mb-8 bg-void/60 p-4 border border-matrix-dim/40">
          <p class="text-matrix-green font-bold">{{ t('hero.status') }}</p>
          <p>{{ t('hero.connection') }}</p>
        </div>

        <!-- Executive Summary Box -->
        <div class="my-6 border border-matrix-green/60 bg-void/80 p-5 shadow-[inset_0_0_10px_rgba(0,255,65,0.1)]">
          <div class="text-xs text-matrix-dim mb-2">{{ t('hero.summary_cmd') }}</div>
          <p class="text-sm md:text-base text-matrix-green leading-relaxed">
            {{ t('hero.summary_text') }}
          </p>
        </div>

        <!-- Call to action buttons -->
        <div class="mt-8 pt-4 border-t border-matrix-dim/30 flex flex-wrap gap-4 items-center">
          <NuxtLink 
            :to="localePath('sobre')" 
            class="inline-block px-4 py-2 border border-matrix-green bg-matrix-green/10 text-matrix-green text-xs md:text-sm font-bold no-underline hover:bg-matrix-green hover:text-void hover:shadow-[0_0_10px_var(--matrix-green)] transition-all duration-200 cursor-pointer"
          >
            {{ t('hero.btn_about') }}
          </NuxtLink>
          <NuxtLink 
            :to="localePath('experiencias')" 
            class="inline-block px-4 py-2 border border-matrix-dim bg-transparent text-matrix-dim text-xs md:text-sm font-bold no-underline hover:border-matrix-green hover:text-matrix-glow hover:shadow-[0_0_8px_var(--matrix-glow)] transition-all duration-200 cursor-pointer"
          >
            {{ t('hero.btn_experience') }}
          </NuxtLink>
          <NuxtLink 
            :to="localePath('contato')" 
            class="inline-block px-4 py-2 border border-matrix-dim bg-transparent text-matrix-dim text-xs md:text-sm font-bold no-underline hover:border-matrix-green hover:text-matrix-glow hover:shadow-[0_0_8px_var(--matrix-glow)] transition-all duration-200 cursor-pointer"
          >
            {{ t('hero.btn_contact') }}
          </NuxtLink>
        </div>

        <p class="text-matrix-glow/70 text-xs mt-6 italic animate-pulse">
          {{ t('hero.explore_hint') }}
        </p>
      </div>
    </div>
  </section>
</template>
