/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}","./index.html",
  ],
  theme: {
    fontFamily: {
      'balo': ["'Baloo Bhai 2'"]
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#000',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'nav': '#666666',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'sblue': '#4EBFFF',
    },
    extend: {},
  },
  plugins: [],
}
