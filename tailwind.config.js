/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      transitionDuration: {
        600: '600ms',
      },
      colors: {
        'sahm-yellow': '#F5C000',
        'sahm-purple': '#3D2785',
      },
      fontFamily: {
        sans: ['Kanit', 'sans-serif'],
        body: ['Kanit', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
        'fade-up': 'fade-up 0.55s ease-out both',
        'fade-in': 'fade-in 0.45s ease-out both',
        'scale-in': 'scale-in 0.5s ease-out both',
        'glow-cta': 'glow-cta 2.8s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'pulse-ring': 'pulse-ring 2s ease-out infinite',
        'scroll-bounce': 'scroll-bounce 1.5s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(22px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'scale-in': {
          from: { opacity: '0', transform: 'scale(0.96)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        'glow-cta': {
          '0%, 100%': { boxShadow: '0 6px 20px rgba(61,39,133,0.28)' },
          '50%': { boxShadow: '0 6px 36px rgba(61,39,133,0.55), 0 0 0 4px rgba(61,39,133,0.08)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(1)', opacity: '0.7' },
          '100%': { transform: 'scale(2)', opacity: '0' },
        },
        'scroll-bounce': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(5px)' },
        },
      },
    },
  },
  plugins: [],
}
