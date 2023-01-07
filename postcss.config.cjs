const useRem = false

module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-url')({ url: 'rebase' }),
    require('postcss-mixins'),
    require('postcss-simple-vars')({
      // variables: {
      //   'text-body': '#050509',
      //   'font-muller': 'Muller, system-ui, sans-serif',
      //   'font-golos': 'Golos, system-ui, sans-serif'
      //   // 'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      //   // 'ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
      //   // 'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
      //   // 'transition-property': `color, background-color, border-color,
      //   //   text-decoration-color, fill, stroke, opacity, box-shadow, transform,
      //   //   filter, backdrop-filter`,
      //   // transition: '150ms $ease-in-out'
      // }
    }),
    require('postcss-functions')({
      functions: {
        linear(v1, v2, w1, w2, unit) {
          if (!['vh', 'vmin', 'vmax'].includes(unit)) {
            unit = 'vw'
          }

          v1 = v1.split(' ').map((v) => parseFloat(v))
          v2 = v2.split(' ').map((v) => parseFloat(v))
          ;[w1, w2] = [w1, w2].map((v) => parseFloat(v))
          const list = []

          for (let i = 0; i < v1.length; i++) {
            const slope = (v2[i] - v1[i]) / (w2 - w1)
            const calc = `calc(${(v1[i] - w1 * slope).toFixed(3)}px + ${(
              100 * slope
            ).toFixed(3)}${unit})`
            list.push(`clamp(${v1[i]}px, ${calc}, ${v2[i]}px)`)
          }

          return list.join(' ')
        }
      }
    }),
    // require('postcss-nested'),
    require('tailwindcss/nesting'),
    require('tailwindcss'),
    useRem
      ? require('postcss-pxtorem')({
          propList: ['*'],
          selectorBlackList: [/^html$/]
        })
      : require('postcss-rem-to-pixel')({ propList: ['*'] }),
    require('autoprefixer')
  ]
}
