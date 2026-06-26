import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        void: 'var(--void-bg, #050505)',
        panel: 'var(--panel-bg, #0D110D)',
        'matrix-green': 'var(--matrix-green, #00FF41)',
        'matrix-dim': 'var(--matrix-dim, #008F11)',
        'matrix-glow': 'var(--matrix-glow, #4AF626)',
      },
      fontFamily: {
        mono: ['"Fira Code"', '"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'matrix-green': '0 0 8px var(--matrix-green, #00FF41)',
        'matrix-card': '0 0 10px rgba(0, 143, 17, 0.1)',
        'matrix-card-hover': '0 0 15px rgba(0, 255, 65, 0.2)',
        'header-opaque': '0 0 8px rgba(0, 255, 65, 0.25)',
      },
    },
  },
  plugins: [],
} satisfies Config
