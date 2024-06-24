/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        naranja: '#ce7032',
        verde: '#6a9f6b'
      },
    },
  },
  plugins: [],
}