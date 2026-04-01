//Built by Duggirala for Vishnu Vardhan
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: '#00685f',
        orange: '#e17726',
      },
      fontFamily: {
        sans: ['Poppins Light', 'sans-serif'],
        cera: ['Cera Pro Medium', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 8px 30px rgb(0,0,0,0.08)',
      }
    },
  },
  plugins: [],
}
