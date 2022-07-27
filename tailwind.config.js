/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        logo: ['Titan One']
      },
      screens: {
        "3xl": "2000px"
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}