require('dotenv').config();

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Mad Devs - IT Outsourcing Company in UK',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'yandex-verification', content: '1cce4e9bf6ebcdff' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'sitemap', type: 'application/xml', href: 'https://maddevs.io/sitemap.xml' }
    ],
    script: [
      {
        src: 'https://widget.clutch.co/static/js/widget.js'
      }
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
    '~/plugins/google-analytics.js',
    '~/plugins/vee-validate.js',
    '~/plugins/vue2-perfect-scrollbar.js',
    {
      src: '~/plugins/vue-js-modal.js',
      ssr: false
    },
    {
      src: '~plugins/slick.js',
      ssr: false
    }
  ],
  generate: {
    routes: ['/', '/services', '/projects', '/careers']
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
    transpile: ['vee-validate/dist/rules'],
    vendor: ['vue-slick'],
    extend (config, { isDev, isClient, isServer }) {
      if (isServer) {
        config.externals += [
          require('webpack-node-externals')({
            whitelist: [/^vue-slick/]
          })
        ];
      }
    },
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    }
  },
  modules: [
    '@nuxtjs/axios',
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
    ]
  ],
  axios: {
    baseURL: process.env.NODE_API_URL
  }
};

