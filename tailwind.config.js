/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['"./src/**/*.{js,jsx,ts,tsx}"'],
  theme: {

    extend: {
      gradientColorStops: {
        'mygradient' : '#9B1D8B, #4B0082',
        'mygradient2': '#000000, #7d48b1',
      },
      screens:{
        edu:"1170px"
      },
    },
  },
  plugins: [],
}

