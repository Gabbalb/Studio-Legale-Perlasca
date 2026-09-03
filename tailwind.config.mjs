/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f4f7fb',
          100: '#e5edf6',
          200: '#cfdded',
          300: '#acc6e0',
          400: '#82a9cf',
          500: '#638ebf',
          600: '#4c74a8',
          700: '#3d5c87',
          800: '#2b3f5d',
          900: '#1e2d42',
          950: '#111927',
        },
        gold: {
          50: '#fbf9f2',
          100: '#f5f0df',
          200: '#ebdcb9',
          300: '#dec28d',
          400: '#cfa661',
          500: '#b88b3e',
          600: '#9e7131',
          700: '#7e5628',
          800: '#674625',
          900: '#553a22',
        },
        slate: {
          850: '#172033',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Merriweather"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
