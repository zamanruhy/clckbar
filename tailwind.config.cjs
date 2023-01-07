const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

const screens = {
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  '2xl': '1400px'
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', 'src/**/*.{js,jsx,ts,tsx,html}'],
  darkMode: 'class',
  theme: {
    screens: {
      ...screens,
      ...Object.keys(screens)
        .reverse()
        .reduce(
          (acc, key) => ({
            ...acc,
            [`max-${key}`]: {
              raw: `not all and (min-width: ${screens[key]})`
            }
          }),
          {}
        )
    },
    colors: {
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      black: colors.black,
      white: colors.white,
      body: { DEFAULT: '#050509' },
      pink: { DEFAULT: '#ff76d9' },
      lime: {
        light: '#d4ff51',
        DEFAULT: '#b7fe02',
        dark: '#9fe500'
      },
      aquamarine: { DEFAULT: '#50fcf5' }
    },
    fontSize: {
      11: ['11px', { lineHeight: '16px' }],
      13: ['13px', { lineHeight: '18px' }],
      14: ['14px', { lineHeight: '20px' }],
      15: ['15px', { lineHeight: '22px' }],
      16: ['16px', { lineHeight: '24px' }],
      17: ['17px', { lineHeight: '24px' }],
      18: ['18px', { lineHeight: '26px' }],
      20: ['20px', { lineHeight: '24px' }],
      22: ['22px', { lineHeight: '30px' }],
      24: ['24px', { lineHeight: '32px' }],
      28: ['28px', { lineHeight: '36px' }],
      32: ['32px', { lineHeight: '40px' }],
      36: ['36px', { lineHeight: '48px' }],
      40: ['40px', { lineHeight: '48px' }],
      56: ['56px', { lineHeight: '64px' }]
    },
    fontFamily: {
      muller: ['Muller', ...defaultTheme.fontFamily.sans],
      golos: ['Golos', ...defaultTheme.fontFamily.sans]
    },
    extend: {
      minHeight: defaultTheme.height,
      minWidth: defaultTheme.width
    }
  },
  corePlugins: { container: false },
  plugins: []
}
