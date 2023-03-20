/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "PRIMARY_COLOR": "rgb(0, 51, 102)",
      "SECONDARY_COLOR": "rgb(0, 51, 102)",
      "BACKGROUND_COLOR_MAIN": "rgb(255, 255, 255)",
      "BACKGROUND_COLOR_SECONDARY": "rgb(245, 247, 249)",
      "TEXT_COLOR_MAIN": "rgb(0, 51, 102)",
      "SECONDARY_COLOR": "rgb(45, 45, 45)",
      "ERROR_COLOR": "rgb(197, 0, 0)",
      "SUCCESS_COLOR": "rgb(0, 102, 0)",
      "WARNING_COLOR": "rgb(209, 209, 1)",
      "INFO_COLOR": "rgb(0, 0, 221)",
    },
    fontFamily: {
      PRIMARY: ['Inter', 'sans-serif'],
      SECONDARY: ['Plus Jakarta Sans', 'serif'],
    },
  },
  plugins: [],
}