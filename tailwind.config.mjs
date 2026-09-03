/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f4f9',
          100: '#d9e2ee',
          200: '#b7cade',
          300: '#8baac9',
          400: '#6289b2',
          500: '#476f9d',
          600: '#365680',
          700: '#2c4568',
          800: '#1e3049',
          900: '#142033',
          950: '#0c1421',
        },
        gold: {
          50: '#fbf8f0',
          100: '#f6efdc',
          200: '#eddeb9',
          300: '#e1c88d',
          400: '#d4b162',
          500: '#c59b43',
          600: '#ad7e34',
          700: '#8b5f2c',
          800: '#724d29',
          900: '#5f4026',
        },
      },
      fontFamily: {
        serif: ['"Merriweather"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
