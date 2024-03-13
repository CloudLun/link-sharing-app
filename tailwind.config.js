/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: '#633CFF',
        hover_purple: '#BEADFF',
        light_purple: '#EFEBFF',
        dark_grey: '#333333',
        grey: "#737373",
        borders:'#D9D9D9',
        light_grey: "#FAFAFA",
        white: '#FFFFFF',
        red: '#FF3939',
      }
    },
  },
  plugins: [],
}

