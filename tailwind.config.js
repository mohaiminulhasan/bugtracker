module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      backgroundColor: ['even', 'disabled'],
      textColor: ['disabled'],
      padding: ['hover'],
      margin: ['hover'],
      borderColor: ['hover'],
    },
  },
  plugins: [],
}
