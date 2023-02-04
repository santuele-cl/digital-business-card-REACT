/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          200: '#918E9B',
          600: '#1A1B21',
          700: '#161619'
        },
        blue: {
          500: '#5093E2'
        }
      }
    },
  },
  plugins: [],
}
// #161619 footer bg
// #1A1B21 main bg