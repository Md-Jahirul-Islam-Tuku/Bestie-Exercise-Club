/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#1ecaed",

          "secondary": "#57c623",

          "accent": "#e0c56b",

          "neutral": "#2B2B36",

          "base-100": "#31343F",

          "info": "#429BD7",

          "success": "#166962",

          "warning": "#F39420",

          "error": "#FB4946",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
