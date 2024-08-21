/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    extend: {
      colors: {
        'primary-color': '#B68C5A',
      },
      fontFamily: {
        'poppins': ["Poppins", 'sans-serif']
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

