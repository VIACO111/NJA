/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        via: {
          black: '#000000',
          dark: '#111111',
          gray: '#333333',
          light: '#f8f8f8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        montserrat: ['Montserrat', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
