<script setup lang="ts">
interface JobItem {
  id: string
  company: string
  role: string
  period: string
  location: string
  type: string
  bullets: string[]
}

defineProps<{
  job: JobItem
}>()
</script>

<template>
  <div class="w-full bg-void border border-matrix-dim/80 p-5 md:p-6 transition-all duration-300 hover:border-matrix-green hover:shadow-[0_0_12px_rgba(0,255,65,0.2)] font-mono">
    <!-- Log Header -->
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-matrix-dim/40 pb-3 mb-4">
      <div class="flex items-center gap-2">
        <span class="text-xs text-matrix-dim font-bold">>>> LOG_ID: {{ job.id }}</span>
        <span class="text-xs px-2 py-0.5 bg-matrix-green/10 border border-matrix-green text-matrix-glow font-bold">
          {{ job.type }}
        </span>
      </div>
      <div class="text-xs md:text-sm text-matrix-green bg-panel px-3 py-1 border border-matrix-dim font-bold w-fit">
        [{{ job.period }}]
      </div>
    </div>

    <!-- Role and Company -->
    <div class="mb-4">
      <h3 class="text-lg md:text-xl font-bold text-matrix-glow [text-shadow:0_0_5px_var(--matrix-glow)]">
        {{ job.role }}
      </h3>
      <div class="text-sm md:text-base text-matrix-green mt-1 flex items-center gap-2">
        <span class="text-matrix-dim">@</span>
        <span class="font-bold underline">{{ job.company }}</span>
        <span class="text-matrix-dim text-xs ml-auto">({{ job.location }})</span>
      </div>
    </div>

    <!-- Execution Bullets -->
    <div class="space-y-2.5 mt-4 pt-4 border-t border-matrix-dim/20">
      <div 
        v-for="(bullet, index) in job.bullets" 
        :key="index"
        class="flex items-start gap-3 text-xs md:text-sm text-matrix-green/90 leading-relaxed"
      >
        <span class="text-matrix-glow select-none font-bold mt-0.5">></span>
        <span>{{ bullet }}</span>
      </div>
    </div>
  </div>
</template>
