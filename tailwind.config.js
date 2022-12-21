/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nav': '#0E0E0E',
        'body': '#171717',
        'stext': '#A3A3FF',
        'theme': '#3F3FFF',
        'secondary': '#9191A4',
        'badge': '#3F3F51',
        'input-border': '#565666',
        'input': '#2A2A35'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'vibes': ['Great Vibes', 'cursive']
      }
    },
  },
  plugins: [],
}
