module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg': "url('/src/assets/uwfootballfield.jpeg')",
      }
    },
    colors: {
      'gradient1': '#6889FF',
      'gradient2': '#C668FF',
      'boneWhite': '#F9F6EE',
      'submitButton': '#4C0070',
      'black': '#000000',
      'white': '#FFFFFF',
      'email': '#00a2ed',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
