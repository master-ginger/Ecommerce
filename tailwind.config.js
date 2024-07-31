/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage:{
        'model':"url('./images/model.jpg')",
        'model2':"url('./images/modelbg2.jpg')"
      }
    },
  },
  plugins: [],
}

