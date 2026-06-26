<template>
  <div class="crt-screen">
    <NuxtRouteAnnouncer />
    <UiTerminalHeader />
    <NuxtPage />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;700&display=swap');

:root {
  --void-bg: #050505;       /* General viewport background */
  --panel-bg: #0D110D;      /* Cards, terminal panels, inputs */
  --matrix-green: #00FF41;  /* Primary texts, active borders, titles */
  --matrix-dim: #008F11;    /* Secondary/muted text, inactive borders, code comments */
  --matrix-glow: #4AF626;   /* Hover states and text shadows */
}

html, body {
  margin: 0;
  padding: 0;
  background-color: var(--void-bg);
  color: var(--matrix-green);
  font-family: 'Fira Code', 'JetBrains Mono', monospace;
  overflow-x: hidden;
  scrollbar-color: var(--matrix-dim) var(--void-bg);
  scrollbar-width: thin;
}

/* CRT monitor aesthetic wrapper */
.crt-screen {
  position: relative;
  min-height: 100vh;
  width: 100%;
  background: var(--void-bg);
}

/* CRT scanlines overlay */
.crt-screen::before {
  content: " ";
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: linear-gradient(
    rgba(18, 16, 16, 0) 50%, 
    rgba(0, 0, 0, 0.15) 50%
  );
  background-size: 100% 4px;
  z-index: 9999;
  pointer-events: none;
  opacity: 0.8;
}

/* Page container wrapper */
.page-container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 80px 2rem 2rem 2rem;
  box-sizing: border-box;
}

@media (max-width: 768px) {
  .page-container {
    padding: 80px 1rem 1rem 1rem;
  }
}
</style>
