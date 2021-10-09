const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      blue: "#79B4B7",
      yellow: "#FEE440",
      white: 'white',
      red: '#950101',
      trash: '#9D9D9D',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
