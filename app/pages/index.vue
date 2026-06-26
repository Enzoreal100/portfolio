<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <main class="max-w-[1440px] mx-auto pt-20 px-4 md:px-8 pb-4 md:pb-8 box-border">
    <!-- Hero Mock / Boot Sequence Section -->
    <section id="hero" class="min-h-[90vh] flex items-center justify-center py-8 box-border">
      <div class="w-full bg-panel border border-matrix-dim rounded-none shadow-matrix-card transition-all duration-300 hover:border-matrix-green hover:shadow-matrix-card-hover">
        <div class="bg-matrix-dim/10 border-b border-matrix-dim py-2 px-4 text-matrix-green font-bold">> system_boot.sh</div>
        <div class="p-6 overflow-x-auto">
          <pre class="text-matrix-green [text-shadow:0_0_5px_var(--matrix-glow)] leading-[1.2] mb-8 text-[0.6rem] md:text-base font-mono">
███████╗ ██████╗ ██████╗ 
██╔════╝██╔════╝ ██╔══██╗
█████╗  ██║  ███╗██████╔╝
██╔══╝  ██║   ██║██╔══██╗
███████╗╚██████╔╝██║  ██║
╚══════╝ ╚═════╝ ╚═╝  ╚═╝
          </pre>
          <p class="text-lg md:text-xl mb-4">{{ t('system.welcome') }}</p>
          <p class="text-matrix-dim my-2">> status: 200 OK</p>
          <p class="text-matrix-dim my-2">> connection: SECURE_SSL_TLS</p>
          <p class="text-matrix-glow [text-shadow:0_0_8px_var(--matrix-glow)] mt-8 font-bold animate-pulse">>>> SCROLL DOWN TO INITIALIZE DIRECT INTERFACE <<<</p>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="min-h-[90vh] flex items-center justify-center py-8 box-border">
      <div class="w-full bg-panel border border-matrix-dim rounded-none shadow-matrix-card transition-all duration-300 hover:border-matrix-green hover:shadow-matrix-card-hover">
        <div class="bg-matrix-dim/10 border-b border-matrix-dim py-2 px-4 text-matrix-green font-bold">> cat enzo_profile.json</div>
        <div class="p-6 overflow-x-auto">
          <p><span class="text-matrix-green">"name":</span> <span class="text-matrix-glow">"Enzo Real"</span>,</p>
          <p><span class="text-matrix-green">"role":</span> <span class="text-matrix-glow">"Data Engineer & Software Developer"</span>,</p>
          <p><span class="text-matrix-green">"stack":</span> [<span class="text-matrix-glow">"Python"</span>, <span class="text-matrix-glow">"Airflow"</span>, <span class="text-matrix-glow">"AWS"</span>, <span class="text-matrix-glow">"Java"</span>, <span class="text-matrix-glow">".NET"</span>],</p>
          <p><span class="text-matrix-green">"status":</span> <span class="text-matrix-glow">"Active / Querying Data Pipelines"</span></p>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section id="experience" class="min-h-[90vh] flex items-center justify-center py-8 box-border">
      <div class="w-full bg-panel border border-matrix-dim rounded-none shadow-matrix-card transition-all duration-300 hover:border-matrix-green hover:shadow-matrix-card-hover">
        <div class="bg-matrix-dim/10 border-b border-matrix-dim py-2 px-4 text-matrix-green font-bold">{{ t('experience.header') }}</div>
        <div class="p-6 overflow-x-auto">
          <p>{{ t('experience.dir') }}</p>
          <p>-rwxr-xr-x  enzo staff  32014 Jun 26 00:00 <a href="#" class="text-matrix-green underline transition-all hover:text-matrix-glow hover:[text-shadow:0_0_5px_var(--matrix-glow)]">{{ t('experience.job1') }}</a></p>
          <p>-rwxr-xr-x  enzo staff  18902 Jun 26 00:00 <a href="#" class="text-matrix-green underline transition-all hover:text-matrix-glow hover:[text-shadow:0_0_5px_var(--matrix-glow)]">{{ t('experience.job2') }}</a></p>
          <p>-rwxr-xr-x  enzo staff  45091 Jun 26 00:00 <a href="#" class="text-matrix-green underline transition-all hover:text-matrix-glow hover:[text-shadow:0_0_5px_var(--matrix-glow)]">{{ t('experience.job3') }}</a></p>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="min-h-[90vh] flex items-center justify-center py-8 box-border">
      <div class="w-full bg-panel border border-matrix-dim rounded-none shadow-matrix-card transition-all duration-300 hover:border-matrix-green hover:shadow-matrix-card-hover">
        <div class="bg-matrix-dim/10 border-b border-matrix-dim py-2 px-4 text-matrix-green font-bold">> ./establish_comms.sh</div>
        <div class="p-6 overflow-x-auto">
          <p class="text-matrix-green font-mono">[||||||||||||||||||||] 100% SUCCESS</p>
          <p>root@enzo:~# mailto:enzo.real@example.com</p>
          <p class="text-matrix-dim my-2">> [ ./send_transmission.sh ]</p>
        </div>
      </div>
    </section>
  </main>
</template>
