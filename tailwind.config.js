/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme-yellow' : "rgb(193, 145, 81)",
        'hover-yellow' : "rgb(193, 145, 81)",
        'theme-white' : "rgb(255, 255, 251)",
        'light-yellow' : "#E2D5C3"
      },
      fontFamily: {
        'bebas': ['Bebas Neue', 'sans-serif']
      }
    },
  },
  plugins: [],
}