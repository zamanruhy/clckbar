const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

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
    'container-padding': '15px',
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
      body: {
        DEFAULT: '#050509',
        light: '#2c2c4f',
        lighter: '#3a3a69'
      },
      pink: { DEFAULT: '#ff76d9' },
      lime: {
        // light: '#d4ff51',
        DEFAULT: '#b7fe02',
        dark: '#a8ea01',
        darker: '#92cb01'
      },
      aquamarine: { DEFAULT: '#50fcf5' },
      violet: { DEFAULT: '#582ef5' }
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
      // brand: ['Muller', 'Adjusted Verdana', ...defaultTheme.fontFamily.sans]
      brand: ['Muller', ...defaultTheme.fontFamily.sans]
    },
    extend: {
      minHeight: defaultTheme.height,
      minWidth: defaultTheme.width
    }
  },
  corePlugins: { container: false },
  plugins: [
    plugin(({ addUtilities, theme }) => {
      addUtilities({
        '.cap-aligner': {
          '&::before': {
            content: '""',
            height: 'calc(50% + 0.3em)',
            display: 'inline-block'
            // width: '2px',
            // background: 'red',
          }
        },
        '.x-aligner': {
          '&::before': {
            content: '""',
            height: 'calc(50% + 0.25em)',
            display: 'inline-block'
          }
        },
        '.circle-fix': {
          'box-shadow': `0 0 0.5px 1px ${theme('colors.body.DEFAULT')}`,
          // '-webkit-mask-image': '-webkit-radial-gradient(white, black)'
          '@media (hover: hover)': {
            '&:hover': {
              'box-shadow': `0 0 0.5px 1px ${theme('colors.body.lighter')}`
            }
          },
          '&:active': {
            'box-shadow': `0 0 0.5px 1px ${theme('colors.body.light')}`
          }
        }
      })
    })
  ]
}
