<script setup lang="ts">
const { t } = useI18n()

const copiedField = ref<string | null>(null)

const copyToClipboard = (text: string, field: string) => {
  if (import.meta.client && navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      copiedField.value = field
      setTimeout(() => {
        if (copiedField.value === field) {
          copiedField.value = null
        }
      }, 3000)
    })
  }
}
</script>

<template>
  <section class="w-full py-6 box-border font-mono">
    <div class="w-full bg-panel border border-matrix-dim rounded-none shadow-[0_0_8px_var(--matrix-green)] transition-all duration-300 hover:border-matrix-green">
      <!-- Terminal Header -->
      <div class="bg-matrix-dim/20 border-b border-matrix-dim py-2 px-4 text-matrix-green font-bold flex justify-between items-center text-xs md:text-sm">
        <span>{{ t('contact.header') }}</span>
        <span class="text-matrix-dim text-xs">[ PORT: 443 // ESTABLISHED ]</span>
      </div>

      <div class="p-6 md:p-8 space-y-8">
        <div class="border-b border-matrix-dim/40 pb-4">
          <h2 class="text-xl md:text-3xl font-bold text-matrix-green [text-shadow:0_0_8px_var(--matrix-glow)]">
            >>> INICIAR CONEXÃO DE CONTATO
          </h2>
          <p class="text-xs md:text-sm text-matrix-dim mt-1">
            // {{ t('contact.subtitle') }}
          </p>
        </div>

        <!-- Contact Channels Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- WhatsApp / Phone -->
          <div class="border border-matrix-dim bg-void/80 p-5 flex flex-col justify-between transition-all hover:border-matrix-green hover:shadow-[0_0_10px_rgba(0,255,65,0.15)]">
            <div>
              <div class="text-xs text-matrix-dim mb-1">// {{ t('contact.phone_label') }}</div>
              <div class="text-lg md:text-xl font-bold text-matrix-glow mb-4">
                {{ t('contact.phone_val') }}
              </div>
            </div>
            <div class="pt-4 border-t border-matrix-dim/30 flex items-center justify-between">
              <button 
                type="button"
                @click="copyToClipboard('+5511939297997', 'phone')"
                class="px-3 py-1.5 bg-matrix-green/10 border border-matrix-green text-matrix-green text-xs font-bold cursor-pointer hover:bg-matrix-green hover:text-void transition-all"
              >
                {{ copiedField === 'phone' ? t('contact.copied_msg') : t('contact.copy_btn') }}
              </button>
              <a 
                href="https://wa.me/5511939297997" 
                target="_blank" 
                rel="noopener noreferrer"
                class="text-xs text-matrix-dim hover:text-matrix-glow underline"
              >
                >>> WHATSAPP
              </a>
            </div>
          </div>

          <!-- Email -->
          <div class="border border-matrix-dim bg-void/80 p-5 flex flex-col justify-between transition-all hover:border-matrix-green hover:shadow-[0_0_10px_rgba(0,255,65,0.15)]">
            <div>
              <div class="text-xs text-matrix-dim mb-1">// {{ t('contact.email_label') }}</div>
              <div class="text-lg md:text-xl font-bold text-matrix-glow mb-4 break-all">
                {{ t('contact.email_val') }}
              </div>
            </div>
            <div class="pt-4 border-t border-matrix-dim/30 flex items-center justify-between">
              <button 
                type="button"
                @click="copyToClipboard('enzoreal100@gmail.com', 'email')"
                class="px-3 py-1.5 bg-matrix-green/10 border border-matrix-green text-matrix-green text-xs font-bold cursor-pointer hover:bg-matrix-green hover:text-void transition-all"
              >
                {{ copiedField === 'email' ? t('contact.copied_msg') : t('contact.copy_btn') }}
              </button>
              <a 
                href="mailto:enzoreal100@gmail.com" 
                class="text-xs text-matrix-dim hover:text-matrix-glow underline"
              >
                >>> ENVIAR E-MAIL
              </a>
            </div>
          </div>

          <!-- LinkedIn -->
          <div class="border border-matrix-dim bg-void/80 p-5 flex flex-col justify-between transition-all hover:border-matrix-green hover:shadow-[0_0_10px_rgba(0,255,65,0.15)]">
            <div>
              <div class="text-xs text-matrix-dim mb-1">// {{ t('contact.linkedin_label') }}</div>
              <div class="text-base md:text-lg font-bold text-matrix-glow mb-4 break-all">
                {{ t('contact.linkedin_val') }}
              </div>
            </div>
            <div class="pt-4 border-t border-matrix-dim/30 flex items-center justify-between">
              <a 
                href="https://linkedin.com/in/enzo-real" 
                target="_blank" 
                rel="noopener noreferrer"
                class="px-3 py-1.5 bg-matrix-green/10 border border-matrix-green text-matrix-green text-xs font-bold no-underline hover:bg-matrix-green hover:text-void transition-all inline-block"
              >
                {{ t('contact.open_btn') }}
              </a>
            </div>
          </div>

          <!-- GitHub -->
          <div class="border border-matrix-dim bg-void/80 p-5 flex flex-col justify-between transition-all hover:border-matrix-green hover:shadow-[0_0_10px_rgba(0,255,65,0.15)]">
            <div>
              <div class="text-xs text-matrix-dim mb-1">// {{ t('contact.github_label') }}</div>
              <div class="text-base md:text-lg font-bold text-matrix-glow mb-4 break-all">
                {{ t('contact.github_val') }}
              </div>
            </div>
            <div class="pt-4 border-t border-matrix-dim/30 flex items-center justify-between">
              <a 
                href="https://github.com/EnzoReal" 
                target="_blank" 
                rel="noopener noreferrer"
                class="px-3 py-1.5 bg-matrix-green/10 border border-matrix-green text-matrix-green text-xs font-bold no-underline hover:bg-matrix-green hover:text-void transition-all inline-block"
              >
                {{ t('contact.open_btn') }}
              </a>
            </div>
          </div>
        </div>

        <!-- ASCII Transmission Status Box -->
        <div class="bg-void p-4 border border-matrix-dim/50 text-xs text-matrix-dim">
          <div class="mb-1 text-matrix-green font-bold">>>> TRANSMISSION STATUS: ESTABLISHED</div>
          <div>[||||||||||||||||||||||||||||||||||||||||] 100% SECURE_SOCKET</div>
        </div>
      </div>
    </div>
  </section>
</template>
