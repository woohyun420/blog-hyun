/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2ECC71',
        secondary: '#3498DB',
        background: '#EBF2F8',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
