/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          slate: '#485550',
          slateDark: '#111614',
          slateMuted: '#52605B',
          lime: '#C0EB6A',
          limeSoft: '#E4F6BE',
          sage: '#F4F6F0',
          sageDeep: '#EAECE4',
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['"PP Neue Montreal"', '"Neue Montreal"', '"DM Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"PP Neue Montreal"', '"Neue Montreal"', '"DM Sans"', 'system-ui', 'sans-serif'],
        pixel: ['"PP NeueBit"', '"NeueBit"', '"Pixelify Sans"', 'monospace'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.03em',
        tightest: '-0.04em',
      }
    },
  },
  plugins: [],
}
