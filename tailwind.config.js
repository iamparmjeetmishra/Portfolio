/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter']
      },
      colors: {
        'twOg': {
          100: '#fa5252',
          200: '#dd2476',
        }
      }
    },
  },
  plugins: [],
}