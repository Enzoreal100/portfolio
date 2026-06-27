<script setup lang="ts">
const { t, tm, rt } = useI18n()

interface JobItem {
  id: string
  company: string
  role: string
  period: string
  location: string
  type: string
  bullets: string[]
}

const jobsList = computed<JobItem[]>(() => {
  const items = resolveI18nList(tm('experience.jobs'), rt) as JobItem[]
  return Array.isArray(items) ? items : []
})
</script>

<template>
  <section class="w-full py-6 box-border font-mono">
    <div class="w-full bg-panel border border-matrix-dim rounded-none shadow-[0_0_8px_var(--matrix-green)] transition-all duration-300 hover:border-matrix-green">
      <!-- Terminal Header -->
      <div class="bg-matrix-dim/20 border-b border-matrix-dim py-2 px-4 text-matrix-green font-bold flex justify-between items-center text-xs md:text-sm">
        <span>{{ t('experience.header') }}</span>
        <span class="text-matrix-dim text-xs">[ STATUS: ACTIVE_TRANSACTIONS ]</span>
      </div>

      <div class="p-6 md:p-8 space-y-6">
        <div class="border-b border-matrix-dim/40 pb-4 mb-6">
          <h2 class="text-xl md:text-3xl font-bold text-matrix-green [text-shadow:0_0_8px_var(--matrix-glow)]">
            >>> EXPERIÊNCIAS PROFISSIONAIS & ACADÊMICAS
          </h2>
          <p class="text-xs md:text-sm text-matrix-dim mt-1">
            // {{ t('experience.subtitle') }}
          </p>
        </div>

        <!-- Cards List -->
        <div class="space-y-6">
          <SectionsExperienceCard 
            v-for="(job, idx) in jobsList" 
            :key="job.id || idx"
            :job="job"
          />
        </div>
      </div>
    </div>
  </section>
</template>
