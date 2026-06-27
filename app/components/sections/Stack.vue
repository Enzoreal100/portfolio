<script setup lang="ts">
const { t, tm, rt } = useI18n()

const getList = (key: string): string[] => {
  const items = resolveI18nList(tm(key), rt)
  return Array.isArray(items) ? items : []
}

const engItems = computed(() => getList('stack.items_eng'))
const cloudItems = computed(() => getList('stack.items_cloud'))
const devItems = computed(() => getList('stack.items_dev'))
const coursesList = computed(() => getList('stack.courses'))
</script>

<template>
  <section class="w-full py-6 box-border font-mono">
    <div class="w-full bg-panel border border-matrix-dim rounded-none shadow-[0_0_8px_var(--matrix-green)] transition-all duration-300 hover:border-matrix-green">
      <!-- Terminal Header -->
      <div class="bg-matrix-dim/20 border-b border-matrix-dim py-2 px-4 text-matrix-green font-bold flex justify-between items-center text-xs md:text-sm">
        <span>{{ t('stack.header') }}</span>
        <span class="text-matrix-dim text-xs">[ EXEC_PERM: 755 ]</span>
      </div>

      <div class="p-6 md:p-8 space-y-8">
        <h2 class="text-xl md:text-2xl font-bold text-matrix-green [text-shadow:0_0_8px_var(--matrix-glow)] border-b border-matrix-dim/40 pb-3">
          >>> {{ t('stack.title') }}
        </h2>

        <!-- Skills Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <!-- Engineering & Modeling -->
          <div class="border border-matrix-dim bg-void/60 p-5 flex flex-col justify-between transition-all hover:border-matrix-green hover:shadow-[0_0_10px_rgba(0,255,65,0.15)]">
            <div>
              <div class="text-sm font-bold text-matrix-glow mb-4 pb-2 border-b border-matrix-dim/30 tracking-wider">
                {{ t('stack.cat_eng') }}
              </div>
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="(skill, i) in engItems" 
                  :key="i"
                  class="px-2.5 py-1 text-xs bg-panel border border-matrix-dim text-matrix-green hover:border-matrix-green hover:text-matrix-glow transition-all"
                >
                  {{ skill }}
                </span>
              </div>
            </div>
          </div>

          <!-- Cloud & Databases -->
          <div class="border border-matrix-dim bg-void/60 p-5 flex flex-col justify-between transition-all hover:border-matrix-green hover:shadow-[0_0_10px_rgba(0,255,65,0.15)]">
            <div>
              <div class="text-sm font-bold text-matrix-glow mb-4 pb-2 border-b border-matrix-dim/30 tracking-wider">
                {{ t('stack.cat_cloud') }}
              </div>
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="(skill, i) in cloudItems" 
                  :key="i"
                  class="px-2.5 py-1 text-xs bg-panel border border-matrix-dim text-matrix-green hover:border-matrix-green hover:text-matrix-glow transition-all"
                >
                  {{ skill }}
                </span>
              </div>
            </div>
          </div>

          <!-- Development & DevOps -->
          <div class="border border-matrix-dim bg-void/60 p-5 flex flex-col justify-between transition-all hover:border-matrix-green hover:shadow-[0_0_10px_rgba(0,255,65,0.15)]">
            <div>
              <div class="text-sm font-bold text-matrix-glow mb-4 pb-2 border-b border-matrix-dim/30 tracking-wider">
                {{ t('stack.cat_dev') }}
              </div>
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="(skill, i) in devItems" 
                  :key="i"
                  class="px-2.5 py-1 text-xs bg-panel border border-matrix-dim text-matrix-green hover:border-matrix-green hover:text-matrix-glow transition-all"
                >
                  {{ skill }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Complementary Courses -->
        <div class="border border-matrix-dim bg-void/80 p-6 mt-8">
          <div class="text-xs text-matrix-dim mb-1">{{ t('stack.courses_header') }}</div>
          <h3 class="text-base md:text-lg font-bold text-matrix-green mb-4 border-b border-matrix-dim/30 pb-2">
            >>> {{ t('stack.courses_title') }}
          </h3>
          <ul class="space-y-3 list-none p-0 m-0">
            <li 
              v-for="(course, idx) in coursesList" 
              :key="idx"
              class="flex items-start gap-3 text-sm md:text-base text-matrix-green/90"
            >
              <span class="text-matrix-glow font-bold">[✓]</span>
              <span>{{ course }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
