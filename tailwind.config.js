/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        blush: {
          200: '#f4d7dc',
          300: '#eabec7',
        },
        lavender: {
          100: '#f2edff',
          200: '#e5dbff',
          300: '#cfc0f5',
          500: '#9a84d6',
          700: '#69549c',
        },
        champagne: {
          100: '#f6e7db',
        },
        ivory: {
          50: '#fffdfb',
        },
        dustyrose: {
          300: '#dc9daa',
          500: '#c57c8c',
          600: '#b66b7c',
        },
        taupe: {
          500: '#8f716e',
          600: '#6e5956',
          700: '#6a4f4c',
          900: '#3b2d2b',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        display: ['Fraunces', 'serif'],
      },
    },
  },
  plugins: [],
}
