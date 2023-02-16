/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D1C1FF",
      },
      borderRadius: {
        extraLarge: '2rem'
      }
    },
  },
  plugins: [],
}


/* rounded-tr-extraLarge rounded-tl-extraLarge */