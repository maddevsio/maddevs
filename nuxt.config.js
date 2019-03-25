module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'mnd',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  router: {
    middleware: 'i18n'
  },
  plugins: [
    '~/plugins/i18n.js',
    '~/plugins/vue-scrollto.js',
    {
      src: '~plugins/slick.js',
      ssr: false
    }
  ],
  generate: {
    routes: ['/', '/en', '/en/about', '/ru', '/ru/about']
  },
  css: [
    {
      src: '~/assets/styles/index.scss',
      lang: 'scss'
    }
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    vendor: ['vue-slick'],
    extend (config, { isDev, isClient, isServer }) {
      if (isServer) {
        config.externals += [
          require('webpack-node-externals')({
            whitelist: [/^vue-slick/]
          })
        ]
      }
    },
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

