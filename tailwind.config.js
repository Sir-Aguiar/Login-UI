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
          'form-bg': "rgb(238,238,238,.97)",
          "formulary-color": "#4c1b9b",
        },
        "d": {
          "bg": "#1B2350",
          'form-bg': "#3b3643",
          "formulary-color": "#7D39C6",
          "secundary-text": "#F2EFFB",
        }
      },
      boxShadow: {
        "l-form": "2.5px 3.5px 3.5px rgb(15, 15,15,.15), -2.5px -2.5px 3.5px rgb(15, 15,15,.15)",
        "d-form": "1.5px 2.5px 4.5px rgb(235, 235,235,.25), -1.5px -1.5px 4.5px rgb(235, 235,235,.25)"
      },
      screens: {
        "md": { "min": "440px", "max": "799px" },
        "lg-mb": { "raw": "(min-height:600px)" },
        "lg": { "min": "800px", "max": "950px" },
        "2lg": { "min": "951px", "max": "1199px" },
        "xlg": { "min": "1200px" }
      },
      backgroundImage: {
        'professor': "url('/4093887.jpg')",
        "student": "url('/8600.jpg')",
        'header-bg': "url('/6347770.png')"
      }
    },
  },
  plugins: [],
}