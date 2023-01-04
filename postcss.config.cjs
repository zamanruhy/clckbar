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
