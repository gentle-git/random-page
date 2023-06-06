/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bgcolor1' : '#E3C7C1'
      },
      fontFamily: {
        'jacques' : ['jacques'],
        'jaldi' : ['jaldi']
      },
      height: {
        '160': '40rem',
      } 
    },
  },
  plugins: [],
}

