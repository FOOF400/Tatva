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
        'light-yellow' : "#E2D5C3",
        'light-green' : "rgb(90, 106, 77)",
        'dark-green' : "rgb(34, 139, 34)",
        'hover-green' : "#DFECD6",
        'light-beige' : "rgb(245, 245, 220)",
        'dark-beige' : "rgb(221, 211, 183)",
        'dark-brown'  : "rgb(101, 67, 33)",
      },
      fontFamily: {
        'bebas': ['Bebas Neue', 'sans-serif']
      }
    },
  },
  plugins: [],
}