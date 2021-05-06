import axios from 'axios'

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
  /*
   ** Component will be ignored in building
   */
  ignore: 'pages/case-studies/veeqo.vue',
  generate: {
    async routes() {
      const getPosts = async pageUrl => {
        let posts = []
        const response = await axios.get(pageUrl)
        posts = posts.concat(response.data.results)

        if (response.data.next_page) {
          posts = posts.concat(await getPosts(response.data.next_page))
        }
        return posts
      }
      const convertToSlug = text => text.toLowerCase()
        .trim()
        .replace(/[^\w ]+/g, '')
        .replace(/ +/g, '-')

      // Getting data from prismic
      const prismicData = await axios.get(process.env.NODE_PRISMIC_API)
      const prismicTags = prismicData.data.tags

      // Getting posts of all types from prismic
      const { ref } = prismicData.data.refs[0]
      const prismicPosts = await getPosts(`${process.env.NODE_PRISMIC_API}/documents/search?ref=${ref}#format=json`)

      // Creating a list of routes
      const blogPageRoutes = prismicPosts
        .filter(post => post.type === 'post')
        .map(post => `/blog/${post.uid}`)

      const cuPageRoutes = prismicPosts
        .filter(post => post.type === 'customer_university')
        .map(post => `/customer-university/${post.uid}`)

      const authorPageRoutes = prismicPosts
        .filter(post => post.type === 'author')
        .map(author => `/blog/author/${author.uid}`)

      const tagPageRoutes = prismicTags
        .map(tag => `/blog/tag/${convertToSlug(tag)}`)

      const routes = [
        '/',
        '/services',
        '/projects',
        '/careers',
        '/gdpr',
        '/nda',
        '/privacy',
        '/faq',
        '/case-studies/namba-food',
        '/case-studies/sir-john-monash-centre',
        '/blog',
        ...blogPageRoutes,
        ...cuPageRoutes,
        ...authorPageRoutes,
        ...tagPageRoutes,
      ]

      return routes
    },
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
  modules: ['@nuxtjs/axios', '@nuxtjs/robots', '@nuxtjs/prismic'],
  axios: {
    baseURL: '/',
  },
  robots: {
    UserAgent: '*',
    Sitemap: 'https://maddevs.io/sitemap.xml',
  },
  prismic: {
    endpoint: process.env.NODE_PRISMIC_API,
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
