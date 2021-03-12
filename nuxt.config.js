require('dotenv').config();
import axios from 'axios';
import initAnalyticsScript from './client/helpers/initAnalyticsScript.js';

module.exports = {
  srcDir: 'client/',
  target: 'server',
  /*
  ** Server settings
  */
  server: {
    port: process.env.PORT || 3000
  },
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: 'Mad Devs: Software & Mobile App Development Company',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'yandex-verification', content: '1cce4e9bf6ebcdff' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'sitemap', type: 'application/xml', href: 'https://maddevs.io/sitemap.xml' }
    ],
    script: [ // Init google tag manager and yandex metrika
      {
        innerHTML: initAnalyticsScript
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
  plugins: [
    '~/plugins/vuelidate.js',
    '~/plugins/vue-social-sharing.js'
  ],
  generate: {
    async routes() {
      const getPosts = async pageUrl => {
        let posts = [];
        const response = await axios.get(pageUrl);
        posts = posts.concat(response.data.results);

        if (response.data.next_page) {
          posts = posts.concat(await getPosts(response.data.next_page));
        }
        return posts;
      };

      const routes = ['/', '/services', '/projects', '/careers', '/gdpr', '/nda', '/privacy', '/faq', '/case-studies/namba-food', '/case-studies/sir-john-monash-centre', '/blog'];
      const prismicData = await axios.get(process.env.NODE_PRISMIC_API);
      const ref = prismicData.data.refs[0].ref;
      const blogPosts = await getPosts(`${process.env.NODE_PRISMIC_API}/documents/search?ref=${ref}#format=json`);
      const postRoutes = blogPosts.map(blogPost => '/blog/' + blogPost.uid);

      return routes.concat(postRoutes);
    },
    fallback: '404.html'
  },
  css: [
    {
      src: '~/assets/styles/index.scss',
      lang: 'scss'
    },
    {
      src: 'simplebar/dist/simplebar.min.css'
    }
  ],
  /*
  ** Server middlewares
  */
  serverMiddleware: [
    { path: '/', handler: '~/../server/middleware/rest.js' }
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
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    }
  },
  buildModules: ['nuxt-lazysizes'],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/robots',
    '@nuxtjs/prismic'
  ],
  axios: {
    baseURL: process.env.NODE_API_URL
  },
  robots: {
    UserAgent: '*',
    Sitemap: 'https://maddevs.io/sitemap.xml'
  },
  prismic: {
    endpoint: process.env.NODE_PRISMIC_API,
    linkResolver: '@/plugins/link-resolver',
    htmlSerializer: '@/plugins/html-serializer',
    preview: false
  },
  env: {
    awsUrl: process.env.NODE_AWS_URL,
    domain: process.env.NODE_DOMAIN
  }
};
