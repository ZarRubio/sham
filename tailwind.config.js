/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'sahm-yellow': '#F5C000',
        'sahm-purple': '#3D2785',
      },
      fontFamily: {
        sans: ['"Barlow Condensed"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
