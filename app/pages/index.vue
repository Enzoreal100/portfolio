<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <main class="page-container">
    <!-- Hero Mock / Boot Sequence Section -->
    <section id="hero" class="terminal-section">
      <div class="terminal-card">
        <div class="card-header">> system_boot.sh</div>
        <div class="card-body">
          <pre class="ascii-art">
███████╗ ██████╗ ██████╗ 
██╔════╝██╔════╝ ██╔══██╗
█████╗  ██║  ███╗██████╔╝
██╔══╝  ██║   ██║██╔══██╗
███████╗╚██████╔╝██║  ██║
╚══════╝ ╚═════╝ ╚═╝  ╚═╝
          </pre>
          <p class="status-text">{{ t('system.welcome') }}</p>
          <p class="command">> status: 200 OK</p>
          <p class="command">> connection: SECURE_SSL_TLS</p>
          <p class="blink-text">>>> SCROLL DOWN TO INITIALIZE DIRECT INTERFACE <<<</p>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="terminal-section">
      <div class="terminal-card">
        <div class="card-header">> cat enzo_profile.json</div>
        <div class="card-body">
          <p><span class="key">"name":</span> <span class="val">"Enzo Real"</span>,</p>
          <p><span class="key">"role":</span> <span class="val">"Data Engineer & Software Developer"</span>,</p>
          <p><span class="key">"stack":</span> [<span class="val">"Python"</span>, <span class="val">"Airflow"</span>, <span class="val">"AWS"</span>, <span class="val">"Java"</span>, <span class="val">".NET"</span>],</p>
          <p><span class="key">"status":</span> <span class="val">"Active / Querying Data Pipelines"</span></p>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="terminal-section">
      <div class="terminal-card">
        <div class="card-header">> ls -la ./projects/</div>
        <div class="card-body">
          <p>drwxr-xr-x  enzo staff   4096 Jun 25 23:55 .</p>
          <p>-rwxr-xr-x  enzo staff  32014 Jun 25 23:55 <a href="#" class="terminal-link">realtime_etl_pipeline.py</a></p>
          <p>-rwxr-xr-x  enzo staff  18902 Jun 25 23:55 <a href="#" class="terminal-link">airflow_orchestration_dag.py</a></p>
          <p>-rwxr-xr-x  enzo staff  45091 Jun 25 23:55 <a href="#" class="terminal-link">distributed_spark_processor.java</a></p>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="terminal-section">
      <div class="terminal-card">
        <div class="card-header">> ./establish_comms.sh</div>
        <div class="card-body">
          <p class="loading-bar">[||||||||||||||||||||] 100% SUCCESS</p>
          <p>root@enzo:~# mailto:enzo.real@example.com</p>
          <p class="command">> [ ./send_transmission.sh ]</p>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.terminal-section {
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  box-sizing: border-box;
}

.terminal-card {
  width: 100%;
  background-color: var(--panel-bg);
  border: 1px solid var(--matrix-dim);
  border-radius: 0px; /* Sharp corners per GEMINI.md */
  box-shadow: 0 0 10px rgba(0, 143, 17, 0.1);
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.terminal-card:hover {
  border-color: var(--matrix-green);
  box-shadow: 0 0 15px rgba(0, 255, 65, 0.2);
}

.card-header {
  background-color: rgba(0, 143, 17, 0.1);
  border-bottom: 1px solid var(--matrix-dim);
  padding: 0.5rem 1rem;
  color: var(--matrix-green);
  font-weight: bold;
}

.card-body {
  padding: 1.5rem;
  overflow-x: auto;
}

.ascii-art {
  color: var(--matrix-green);
  text-shadow: 0 0 5px var(--matrix-glow);
  line-height: 1.2;
  margin-bottom: 2rem;
}

.status-text {
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.command {
  color: var(--matrix-dim);
  margin: 0.5rem 0;
}

.blink-text {
  color: var(--matrix-glow);
  text-shadow: 0 0 8px var(--matrix-glow);
  margin-top: 2rem;
  font-weight: bold;
  animation: blink 1.5s infinite;
}

.key {
  color: var(--matrix-green);
}

.val {
  color: var(--matrix-glow);
}

.terminal-link {
  color: var(--matrix-green);
  text-decoration: underline;
}

.terminal-link:hover {
  color: var(--matrix-glow);
  text-shadow: 0 0 5px var(--matrix-glow);
}

.loading-bar {
  color: var(--matrix-green);
  font-family: monospace;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

@media (max-width: 768px) {
  .ascii-art {
    font-size: 0.6rem;
  }
}
</style>
