module.exports = {
  theme: {
    extend: {
      screens: {
        'dark': {'raw': '(prefers-color-scheme: dark)'},
      },
      fontFamily: {
        'sans': ['Poppins'],
      },
      colors: {
        tsaBlue: {
          100: '#5fa0d9',
          200: '#4b8cc5',
          300: '#3778b1',
          400: '#23649d',
          500: '#0f5089',
          600: '#003c75',
          700: '#002861',
          800: '#00144d',
          900: '#000039'
        },
        tsaRed: {
          100: '#ec5f7a',
          200: '#d84b66',
          300: '#c43752',
          400: '#b0233e',
          500: '#9c0f2a',
          600: '#880016',
          700: '#740002',
          800: '#600000',
          900: '#4c0000'
        }
      }
    },
  },
  variants: {},
  plugins: []
}