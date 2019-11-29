require("dotenv").config();

module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'Mad Devs',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }],
    script: [{
        src: 'https://code.tidio.co/kuhpv1cxwof3di7of0qiwbfmvggsdeav.js'
      },
      {
        src: 'https://widget.clutch.co/static/js/widget.js'
      }
    ]
  },
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: '#3B8070'
  },

  router: {
    middleware: 'i18n'
  },
  plugins: [
    '~/plugins/i18n.js',
    '~/plugins/vue-scrollto.js',
    '~/plugins/google-analytics.js',
    '~plugins/vue-js-modal',
    {
      src: '~plugins/slick.js',
      ssr: false
    }
  ],
  generate: {
    routes: ['/', '/en', '/en/jobs', '/en/vacancies', '/ru', '/ru/jobs', '/ru/vacancies']
  },
  css: [{
    src: '~/assets/styles/index.scss',
    lang: 'scss'
  }],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    vendor: ['vue-slick'],
    extend(config, {
      isDev,
      isClient,
      isServer
    }) {
      if (isServer) {
        config.externals += [
          require('webpack-node-externals')({
            whitelist: [/^vue-slick/]
          })
        ]
      }
    },
    extend(config, {
      isDev,
      isClient
    }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  modules: [
    [
      '@nuxtjs/yandex-metrika',
      {
        id: '52976554',
        webvisor: true,
        clickmap: true,
        useCDN: false,
        trackLinks: true,
        accurateTrackBounce: true
      }
    ],
    "@nuxtjs/axios",
    "@nuxtjs/proxy",
    "@nuxtjs/dotenv"
  ],
  axios: {
    proxy: true
  },
  proxy: {
    "/api/": {
      target: process.env.API_URL,
      pathRewrite: {
        "^/api/": ""
      },
      changeOrigin: true
    }
  }
};
