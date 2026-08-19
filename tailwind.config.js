/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#1a56db',
          700: '#1e40af',
          800: '#1e3a8a',
          900: '#172554',
        },
        gold: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        }
      },
      fontFamily: {
        sans:          ['Poppins', 'sans-serif'],
        body:          ['Merriweather', 'serif'],
        poppins:       ['Poppins', 'sans-serif'],
        merriweather:  ['Merriweather', 'serif'],
        roboto:        ['Merriweather', 'serif'], // alias agar class lama tetap jalan
      },
      fontSize: {
        '2xs': '0.625rem',
      },
      screens: {
        xs: '375px',
      },
      animation: {
        marquee: 'marquee 35s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
