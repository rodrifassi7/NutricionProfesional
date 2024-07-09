/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        naranja: '#E77841',
        verde: '#4CA770'
      },
    },
  },
  plugins: [],
}