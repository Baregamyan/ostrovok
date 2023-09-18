/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*[njk, js]'],
  theme: {
    container: {
      padding: '10px',
      center: true,
    },
    extend: {
      colors: {
        primary: '#6f4936',
        secondary: '#cd936d',
        background: '#fefbf4',
        yellow: '#fbf4de',
        text: '#4f4f4f',
      },
    },
    fontFamily: {
      rubik: ['Rubik', 'sans-serif'],
    },
    backgroundImage: {
      title: 'url("/images/icons/paws.png")',
    },
  },
  plugins: [],
};
