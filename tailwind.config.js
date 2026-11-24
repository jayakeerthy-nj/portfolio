/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        graphite: {
          deep: '#0d0d0e',
          bg: '#111113',
          card: '#161619',
          surface: '#1c1c20',
          raised: '#232328',
          border: 'rgba(255, 255, 255, 0.08)',
          line: 'rgba(255, 255, 255, 0.14)',
          text: {
            primary: '#ededed',
            secondary: '#a1a1a6',
            muted: '#71717a'
          }
        },
        accent: {
          blue: '#3b82f6',
          cobalt: '#2563eb',
          subtle: '#1d283a'
        }
      },
      fontFamily: {
        serif: ['"LTC Bodoni 175"', '"Bodoni Moda"', '"Libre Bodoni"', 'Didot', '"Bodoni MT"', 'serif'],
        display: ['"LTC Bodoni 175"', '"Bodoni Moda"', '"Libre Bodoni"', 'Didot', '"Bodoni MT"', 'serif'],
        bodoni: ['"LTC Bodoni 175"', '"Bodoni Moda"', '"Libre Bodoni"', 'Didot', '"Bodoni MT"', 'serif'],
        sans: ['Geist', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"Geist Mono"', '"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.03em',
        tightest: '-0.04em',
      }
    },
  },
  plugins: [],
}
