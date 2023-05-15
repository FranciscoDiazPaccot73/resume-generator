/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'secondary-black': '#313131',
        main: '#00bbff',
        'main-dark': '#0085b6',
        'gray-disabled': '#6a6a6a',
      },
    },
  },
  plugins: [],
};
