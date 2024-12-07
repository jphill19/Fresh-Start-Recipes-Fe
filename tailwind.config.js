const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      keyframes: {
        rotateOnce: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        fadeIn: {
          from: { opacity: 0, transform: 'scale(0.95)' },
          to: { opacity: 1, transform: 'scale(1)' },
        }
      },
      animation: {
        rotateOnce: 'rotateOnce 0.6s ease',
        fadeIn: 'fadeIn 0.3s ease-in-out'
      },
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
        rounded: ['"M PLUS Rounded 1c"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        main: 'var(--main-color)',
        secondary: 'var(--secondary-color)',
      },
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
}
