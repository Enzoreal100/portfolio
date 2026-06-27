<script setup lang="ts">
const { t, tm, rt } = useI18n()

interface LanguageItem {
  name: string
  level: string
}

const languagesList = computed<LanguageItem[]>(() => {
  const items = resolveI18nList(tm('about.languages'), rt) as LanguageItem[]
  return Array.isArray(items) ? items : []
})

const photoError = ref(false)
const profileImgUrl = '/profile.jpg'
const handleImageError = () => {
  photoError.value = true
}
</script>

<template>
  <section class="w-full py-6 box-border font-mono">
    <div class="w-full bg-panel border border-matrix-dim rounded-none shadow-[0_0_8px_var(--matrix-green)] transition-all duration-300 hover:border-matrix-green">
      <!-- Terminal Header -->
      <div class="bg-matrix-dim/20 border-b border-matrix-dim py-2 px-4 text-matrix-green font-bold flex justify-between items-center text-xs md:text-sm">
        <span>{{ t('about.header') }}</span>
        <span class="text-matrix-dim text-xs">[ READ_ONLY ]</span>
      </div>

      <div class="p-6 md:p-8 space-y-8">
        <!-- Profile Grid: Photo + Metadata -->
        <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <!-- CRT Photo Frame / Avatar Box (3 cols on desktop) -->
          <div class="md:col-span-4 flex flex-col items-center">
            <div class="relative w-full max-w-[260px] aspect-square border-2 border-matrix-green bg-void p-2 shadow-[0_0_12px_rgba(0,255,65,0.3)] flex flex-col items-center justify-center overflow-hidden">
              <!-- Scanline effect inner container -->
              <div class="w-full h-full border border-matrix-dim/50 flex items-center justify-center relative overflow-hidden bg-void">
                <img 
                  v-if="!photoError"
                  :src="profileImgUrl" 
                  :alt="t('about.photo_alt')"
                  class="w-full h-full object-cover filter contrast-125 brightness-90 sepia-[0.3] hue-rotate-[70deg] saturate-[300%]"
                  @error="handleImageError"
                />
                <!-- ASCII Cyberpunk Fallback if image not found -->
                <div v-else class="text-center p-4 flex flex-col items-center justify-center w-full h-full bg-panel/40">
                  <pre class="text-[0.45rem] leading-[1.1] text-matrix-green [text-shadow:0_0_5px_var(--matrix-glow)] font-mono select-none">
 .---.
/     \
| () () |
 \  ^  /
  |||||
  |||||
                  </pre>
                  <div class="mt-3 text-xs font-bold text-matrix-green tracking-widest">[ BIO_ID: EGR ]</div>
                  <div class="text-[0.65rem] text-matrix-dim mt-1">ENZO GAIÃO REAL</div>
                </div>
              </div>
            </div>
            <div class="mt-2 text-xs text-matrix-dim text-center font-mono">
              >>> PERFIL AUTENTICADO // CRT_VGA
            </div>
          </div>

          <!-- JSON Bio Data (8 cols on desktop) -->
          <div class="md:col-span-8 bg-void/80 border border-matrix-dim/60 p-5 md:p-6 shadow-[inset_0_0_10px_rgba(0,143,17,0.15)] overflow-x-auto text-sm md:text-base leading-relaxed">
            <div class="text-matrix-dim mb-3">// DADOS PESSOAIS E OBJETIVO</div>
            <p class="mb-2">
              <span class="text-matrix-green font-bold">{{ t('about.name_label') }}</span> 
              <span class="text-matrix-glow ml-2">{{ t('about.name_value') }}</span>,
            </p>
            <p class="mb-4">
              <span class="text-matrix-green font-bold">{{ t('about.role_label') }}</span> 
              <span class="text-matrix-glow ml-2">{{ t('about.role_value') }}</span>,
            </p>
            <div class="mt-4 pt-4 border-t border-matrix-dim/30">
              <span class="text-matrix-green font-bold block mb-2">{{ t('about.obj_label') }}</span>
              <p class="text-matrix-green/90 text-sm md:text-base leading-relaxed bg-panel/50 p-4 border-l-2 border-matrix-glow">
                {{ t('about.obj_value') }}
              </p>
            </div>
          </div>
        </div>

        <!-- Academic Background Section -->
        <div class="border border-matrix-dim bg-void/60 p-6">
          <div class="text-xs text-matrix-dim mb-1">{{ t('about.edu_header') }}</div>
          <h3 class="text-lg md:text-xl font-bold text-matrix-green [text-shadow:0_0_5px_var(--matrix-glow)] mb-4 border-b border-matrix-dim/40 pb-2">
            >>> {{ t('about.edu_title') }}
          </h3>
          <div class="flex flex-col md:flex-row md:items-center justify-between mb-2">
            <div class="text-base font-bold text-matrix-glow">{{ t('about.edu_institution') }}</div>
            <div class="text-xs md:text-sm text-matrix-green bg-matrix-dim/20 px-2 py-1 border border-matrix-dim font-mono w-fit mt-1 md:mt-0">
              {{ t('about.edu_period') }}
            </div>
          </div>
          <div class="text-sm font-semibold text-matrix-green mb-3">{{ t('about.edu_course') }}</div>
          <p class="text-xs md:text-sm text-matrix-dim leading-relaxed">
            // {{ t('about.edu_details') }}
          </p>
        </div>

        <!-- Languages Section -->
        <div class="border border-matrix-dim bg-void/60 p-6">
          <div class="text-xs text-matrix-dim mb-1">{{ t('about.lang_header') }}</div>
          <h3 class="text-lg md:text-xl font-bold text-matrix-green [text-shadow:0_0_5px_var(--matrix-glow)] mb-4 border-b border-matrix-dim/40 pb-2">
            >>> {{ t('about.lang_title') }}
          </h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div 
              v-for="(lang, idx) in languagesList" 
              :key="idx"
              class="bg-panel border border-matrix-dim/60 p-3 text-center transition-all hover:border-matrix-green hover:shadow-[0_0_8px_var(--matrix-glow)]"
            >
              <div class="text-sm font-bold text-matrix-green mb-1">{{ lang.name }}</div>
              <div class="text-xs text-matrix-dim font-mono">[{{ lang.level }}]</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
