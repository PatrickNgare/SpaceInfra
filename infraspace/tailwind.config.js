/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary:   { 50: '#EEF2FA', DEFAULT: '#1B3A6B', light: '#2A5298', dark: '#0D1F3C' },
        secondary: { DEFAULT: '#E87722', light: '#F59340', dark: '#B85E10' },
        neutral:   { 50: '#F9F9F9', 100: '#F0F0F0', 200: '#E5E5E5', 300: '#D4D4D4', 400: '#A3A3A3', 500: '#737373', 600: '#525252', 700: '#404040', 800: '#2A2A2A', 900: '#111111' },
      },
      fontFamily: {
        sans:    ['Inter', 'Arial', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      animation: {
        'fade-up':  'fadeUp 0.6s ease forwards',
        'fade-in':  'fadeIn 0.4s ease forwards',
        'marquee':  'marquee 50s linear infinite',
        'marquee2': 'marquee2 50s linear infinite',
        'ken-burns': 'kenBurns 8s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeUp:    { '0%': { opacity: 0, transform: 'translateY(30px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } },
        fadeIn:    { '0%': { opacity: 0 }, '100%': { opacity: 1 } },
        marquee:   { '0%': { transform: 'translateX(0%)' }, '100%': { transform: 'translateX(-50%)' } },
        marquee2:  { '0%': { transform: 'translateX(50%)' }, '100%': { transform: 'translateX(0%)' } },
        kenBurns:  { '0%': { transform: 'scale(1) translate(0,0)' }, '100%': { transform: 'scale(1.08) translate(-1%,-1%)' } },
      },
    },
  },
  plugins: [],
}
