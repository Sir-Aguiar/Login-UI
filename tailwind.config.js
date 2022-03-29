/* eslint-disable */
module.exports = {
  darkMode:"class",
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "l": {
          "bg": "#D7C7E3",
          "test-color": "#A63EC5",
          "formulary-color": "#7D39C6",
          "formulary-color2": "#7D34CB",
          "formulary-button": "#7D42BD",
          "formulary-color3": "#9768CA",
        },
        "d": {
          "bg": "#1B2350",
          "secundary-text": "#F2EFFB",
        }
      }
    },
  },
  plugins: [],
}