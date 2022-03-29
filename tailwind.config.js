/* eslint-disable */
module.exports = {
  darkMode: "class",
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
      },
      boxShadow: {
        "l-form": "2.5px 3.5px 3.5px rgb(15, 15,15,.15), -2.5px -2.5px 3.5px rgb(15, 15,15,.15)",
        "d-form": "2.5px 2.5px 3.5px rgb(235, 235,235,.15), -2.5px -2.5px 3.5px rgb(235, 235,235,.15)"
      },
      screens: {
        "md": { "min": "425px", "max": "759px" },
        "lg": { "min": "760px", "max": "1199px" },
        "xlg": { "min": "1200px" }
      }
    },
  },
  plugins: [],
}