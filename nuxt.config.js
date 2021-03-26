import axios from 'axios'

require('dotenv').config()

module.exports = {
  srcDir: 'client/',
  target: 'server',
  /*
   ** Server settings
   */
  server: {
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

            (function(m, e, t, r, i, k, a) {
                m[i] = m[i] || function() {
                (m[i].a = m[i].a || []).push(arguments)
                };
                m[i].l = 1 * new Date();
                k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, e.body.appendChild(k)
            })
            (window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js', 'ym');
            ym(67161793, 'init', {
                clickmap: true,
                trackLinks: true,
                accurateTrackBounce: true,
                webvisor: true
            });
          }
        `,
      },
    ],
  },
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: '#ec1c24',
    height: '3px',
  },
  plugins: ['~/plugins/vuelidate.js', '~/plugins/vue-social-sharing.js'],
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
      ]
      const prismicData = await axios.get(process.env.NODE_PRISMIC_API)
      const { ref } = prismicData.data.refs[0]
      const blogPosts = await getPosts(`${process.env.NODE_PRISMIC_API}/documents/search?ref=${ref}#format=json`)
      const postRoutes = blogPosts.map(blogPost => {
        const urlPrefix = blogPost.type === 'customer_university' ? 'customer-university' : 'blog'
        return `/${urlPrefix}/${blogPost.uid}`
      })

      return routes.concat(postRoutes)
    },
    fallback: '404.html',
  },
  router: { middleware: ['beforeRouteChange'] },
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
    awsUrl: process.env.NODE_AWS_URL,
    domain: process.env.NODE_DOMAIN,
    emailHR: process.env.NODE_EMAIL_HR,
    emailContact: process.env.NODE_EMAIL_CONTACT,
  },
}
