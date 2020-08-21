require('dotenv').config();
import shrinkRay from 'shrink-ray-current';

module.exports = {
  srcDir: 'client/',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Mad Devs: Software & Mobile App Development Company',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'yandex-verification', content: '1cce4e9bf6ebcdff' },
      { ref: 'canonical', href: 'https://maddevsgroup.co.uk' },
      { ref: 'canonical', href: 'https://maddevsgroup.uk' },
      { ref: 'canonical', href: 'https://maddevs.uk' },
      { ref: 'canonical', href: 'https://www.maddevs.io' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'sitemap', type: 'application/xml', href: 'https://maddevs.io/sitemap.xml' }
    ],
    script: [
      {
        src: 'https://widget.clutch.co/static/js/widget.js', defer: true, async: true
      }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: {
    color: '#ec1c24',
    height: '3px'
  },
  router: {
    middleware: 'i18n'
  },
  plugins: [
    '~/plugins/i18n.js',
    '~/plugins/vue-scrollto.js',
    '~/plugins/vee-validate.js',
    '~/plugins/vue2-perfect-scrollbar.js',
    {
      src: '~/plugins/vue-js-modal.js',
      ssr: false
    }
  ],
  generate: {
    routes: [
      '/',
      '/services',
      '/projects',
      '/careers',
      '/gdpr',
      '/nda',
      '/privacy',
      '/go-dee-case-study',
      '/blog'
    ]
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
    vendor: ['axios'],
    followSymlinks: true,
    cache: true,
    transpile: ['vee-validate/dist/rules'],
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
    '@/modules/static',
    '@/modules/crawler',
    '@nuxtjs/axios',
    '@nuxtjs/gtm',
    '@nuxtjs/prismic',
    [
      'nuxt-modernizr',
      {
        'feature-detects': ['css/scrollbars', 'css/overflow-scrolling', 'test/img/webp'],
        options: ['setClasses']
      }
    ]
  ],
  render: {
    compressor: shrinkRay()
  },
  prismic: {
    endpoint: 'https://SuperPuperTest.cdn.prismic.io/api/v2',
    linkResolver: '@/plugins/link-resolver',
    htmlSerializer: '@/plugins/html-serializer'
  },
  gtm: {
    id: 'GTM-NNKVRF3',
    scriptDefer: true,
    enabled: true,
    async: true
  },
  axios: {
    baseURL: process.env.NODE_API_URL
  }
};

