# PROJECT ARCHITECTURE & RULES

## 1. PROJECT IDENTITY & METADATA
- **Owner:** Enzo Real
- **Profession:** Data Engineer & Software Developer (Specialization: Python, Airflow, AWS, Java, .NET)
- **Visual Concept:** Cyberpunk / Terminal Unix / The Matrix. The application is styled as a POSIX command-line interface (CLI) running on a high-resolution, green phosphor CRT monitor.

---

## 2. TECHNICAL STACK (MANDATORY)
- **Framework Core:** Nuxt 3 (SSR/SSG Hybrid Mode).
  - Vue 3 composition style is mandatory using `<script setup lang="ts">`.
  - **Prohibited:** Vue Options API.
- **Language:** TypeScript.
  - Configuration: `strict: true`.
  - **Prohibited:** Any usage of `any` types. Ensure type safety for all variables, props, emits, and composables.
- **Routing:** Nuxt File-Based Routing (`~/pages`).
- **Auto-Imports:** Utilize Nuxt's native auto-import engine.
  - **Prohibited:** Manual imports of standard Vue APIs (`ref`, `computed`, `watch`, etc.) or custom utilities and composables under `~/utils` and `~/composables`.
- **Styling:** Tailwind CSS via `@nuxtjs/tailwindcss` (strictly mapped to project design tokens).
  - **Prohibited:** Pure/Vanilla CSS (except for global root definitions or complex CRT/canvas animations impossible via Tailwind), and third-party UI component libraries (Nuxt UI, Vuetify, PrimeVue, Radix, etc.). All UI elements must be built custom.
- **Animations:** HTML5 `<canvas>` (Digital Rain effect), Native CSS transitions/animations, and GSAP.
  - GSAP must be executed strictly client-side using `import.meta.client` to prevent SSR issues.
- **Internationalization (i18n):** Setup using `@nuxtjs/i18n` is mandatory. Every single user-facing text, label, log, menu item, or message **must** be localized in three languages: Brazilian Portuguese (`pt-BR`), English (`en`), and Spanish (`es`) utilizing `$t()` or the `useI18n()` composable. Hardcoded user-facing strings are strictly prohibited.

---

## 3. DESIGN SYSTEM & PALETTE
The following CSS variables define the visual constraints of the CRT interface. No colors or design rules outside this system may be introduced:

```css
:root {
  --void-bg: #050505;       /* General viewport background */
  --panel-bg: #0D110D;      /* Cards, terminal panels, inputs */
  --matrix-green: #00FF41;  /* Primary texts, active borders, titles */
  --matrix-dim: #008F11;    /* Secondary/muted text, inactive borders, code comments */
  --matrix-glow: #4AF626;   /* Hover states and text shadows */
}
```

### Constraints:
- **Typography:** Monospace (`'Fira Code'`, `'JetBrains Mono'`, `monospace`).
- **Geometry:** Strictly straight edges (`border-radius: 0px` or max `2px`).
- **Effects:** No modern diffuse shadows. Neon glow effects are mandatory for interactive/highlighted elements:
  ```css
  box-shadow: 0 0 8px var(--matrix-green);
  text-shadow: 0 0 5px var(--matrix-glow);
  ```

---

## 4. ARCHITECTURE & CODE CONSTRAINTS (Antigravity 2.0 / SDA)

### Section-Driven Architecture (SDA)
- **Pages Directory (`~/pages/`):** Files like `index.vue` must contain no layout-specific markup or heavy logic. They function solely as Section Orchestrators.
- **Orchestration Pattern Example:**
  ```vue
  <template>
    <main class="crt-screen">
      <SectionsHero />
      <SectionsExperience />
      <SectionsStack />
      <SectionsTerminalPrompt />
    </main>
  </template>
  ```
- **Component Directory Hierarchy:**
  - `~/components/sections/` - Main sections (e.g., `Hero.vue`, `Stack.vue`).
  - `~/components/sections/[SectionName]/` - Component-specific sub-components (e.g., `~/components/sections/stack/StackCard.vue`).
  - `~/components/ui/` - Pure, presentation-only, global components (e.g., `UiTerminalButton.vue`, `UiAsciiBorder.vue`).

### The Nuxt Way (Antigravity Protocol)
- **Data Fetching:** Must use `useAsyncData()` or `useFetch()`.
  - **Prohibited:** Launching network requests inside `onMounted`.
- **DOM & Hydration:** Direct usage of browser APIs (`window`, `document`, `<canvas>`, etc.) must be guarded with `if (import.meta.client)` or wrapped within `<ClientOnly>` templates to avoid Hydration Mismatch.
- **State Management:** Use `useState()` for section-to-section communication.
  - Pinia usage is prohibited unless detailed architecture justification is provided.

### Terminal Aesthetics & UX Rules
- **Interactions:** Button labels must mimic executable binaries or shell inputs. E.g., `[ ./download_cv.sh ]`, `> root@enzo:~#`.
- **Loading Indicators:** Use ASCII-based progress bars. E.g., `[||||||||||..........] 50%`.
- **Error Messages:** Mimic standard error outputs (STDERR). E.g., `[FATAL]: 404_PAGE_NOT_FOUND`.

### Viewport Responsiveness
- **Ultrawide (>2000px):** Constraint container width must lock at `max-width: 1440px` and center within the `#050505` viewport void.
- **Mobile (<768px):** All grids collapse to `grid-cols-1`. The header navigation must collapse, converting the menu into a persistent shell bar locked to the bottom of the viewport (nano/vim styling).

---

## 5. DEVELOPER COMPLIANCE RULE ZERO
- **NO PLACEHOLDERS:** Do not output partial implementations, comments indicating omissions (e.g., `// ... rest of the code here`), or stub structures.
- All code provided must be fully written, compilable, and ready to be written directly to disk.
