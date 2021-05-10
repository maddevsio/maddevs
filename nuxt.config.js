import getRoutes, { getSitemapRoutes } from './getRoutes'

require('dotenv').config()

module.exports = {
  srcDir: 'client/',
  target: 'server',
  /*
   ** Server settings
   */
  server: {
    host: process.env.HOST || '0', // https://debbie.codes/blog/nuxt-configure-server-to-see-site-on-mobile/
    port: process.env.PORT || 3000,
  },
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    title: 'Mad Devs: Software & Mobile App Development Company',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'yandex-verification', content: '1cce4e9bf6ebcdff' },
      { name: 'facebook-domain-verification', content: 'gjmbb6g9th5cxl6awr0dx598t7ruz3' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'sitemap', type: 'application/xml', href: 'https://maddevs.io/sitemap.xml' },
    ],
    script: [
      // Init google tag manager and yandex metrika
      {
        innerHTML: `
          window.onload = function () {
            (function(w, d, s, l, i) {
              w[l] = w[l] || [];
              w[l].push({
                "gtm.start": new Date().getTime(),
                event: "gtm.js"
              });
              var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != "dataLayer" ? "&l=" + l : "";
              j.async = true;
              j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
              d.body.appendChild(j);
            })(window, document, "script", "dataLayer", "GTM-NNKVRF3");
          }
        `,
      },
      { src: 'https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver' },
    ],
  },
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: '#ec1c24',
    height: '2px',
  },
  components: true,
  generate: {
    ...getRoutes(),
    fallback: '404.html',
  },
  css: [
    {
      src: '~/assets/styles/index.scss',
      lang: 'scss',
    },
    {
      src: 'simplebar/dist/simplebar.min.css',
    },
  ],
  /*
   ** Server middlewares
   */
  serverMiddleware: [{ path: '/', handler: '~/../server/index.js' }],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    vendor: ['axios'],
    transpile: ['swiper', 'dom7'],
    followSymlinks: true,
    cache: true,
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    },
  },
  /*
  ** Plugins
  */
  plugins: [
    '~/plugins/vuelidate.js',
    '~/plugins/vue-social-sharing.js',
    '~/plugins/get-media-from-s3.js',
    '~/plugins/feature-flags.js',
    { src: '~/plugins/sentry.js', mode: 'client' },
    { src: '~/plugins/lazy-load.js', mode: 'client' },
  ],
  /*
  ** Nuxt Modules
  */
  modules: ['@nuxtjs/axios', '@nuxtjs/robots', '@nuxtjs/prismic', '@nuxtjs/sitemap'],
  sitemap: {
    hostname: 'https://maddevs.io',
    gzip: false,
    path: '/sitemap.xml',
    exclude: ['/**'],
    routes: async () => {
      const routes = await getSitemapRoutes()
      return routes
    },
  },
  axios: {
    baseURL: '/',
  },
  robots: {
    UserAgent: '*',
    Sitemap: 'https://maddevs.io/sitemap.xml',
  },
  prismic: {
    endpoint: 'process.env.NODE_PRISMIC_API',
    linkResolver: '@/plugins/link-resolver',
    htmlSerializer: '@/plugins/html-serializer',
    preview: false,
  },
  env: {
    environment: process.env.NODE_ENV,
    s3PublicUrl: process.env.NODE_S3_PUBLIC_URL,
    domain: process.env.NODE_DOMAIN,
    emailHR: process.env.NODE_EMAIL_HR,
    emailContact: process.env.NODE_EMAIL_CONTACT,
    sentryDsnFront: process.env.NODE_SENTRY_DSN_FRONT,
    ffEnvironment: process.env.FF_ENVIRONMENT,
  },
}
