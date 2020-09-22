require('dotenv').config();
import axios from 'axios';

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
    script: [{
      vmid: 'ldjson-schema',
      innerHTML: '{ "@context": "http://schema.org" }',
      type: 'application/ld+json'
    }],
    __dangerouslyDisableSanitizersByTagID: {
      'ldjson-schema': ['innerHTML']
    }
  },
  /*
  ** Customize the progress bar color
  */
  loading: {
    color: '#ec1c24',
    height: '3px'
  },
  plugins: [
    '~/plugins/vee-validate.js',
    '~/plugins/vue2-perfect-scrollbar.js',
    '~/plugins/vue-social-sharing.js',
    {
      src: '~/plugins/drift-chat.js',
      ssr: false
    },
    {
      src: '~/plugins/vue-js-modal.js',
      ssr: false
    }
  ],
  generate: {
    async routes() {
      const routes = ['/', '/services', '/projects', '/careers', '/gdpr', '/nda', '/privacy', '/blog'];
      const prismicData = await axios.get(process.env.NODE_PRISMIC_API);
      const ref = prismicData.data.refs[0].ref;
      const blogPosts = await axios.get(`${process.env.NODE_PRISMIC_API}/documents/search?ref=${ref}#format=json`);
      const dynamicRoutes = blogPosts.data.results.map(blogPost => '/blog/' + blogPost.uid);
      const allRoutes = routes.concat(dynamicRoutes);
      return allRoutes;
    }
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
    '@nuxtjs/axios',
    '@nuxtjs/gtm',
    '@nuxtjs/robots',
    '@/modules/static',
    '@/modules/crawler',
    '@nuxtjs/prismic',
    'nuxt-lazy-load'
  ],
  gtm: {
    id: 'GTM-NNKVRF3',
    enabled: true,
    scriptDefer: true
  },
  axios: {
    baseURL: process.env.NODE_API_URL
  },
  robots: {
    UserAgent: '*',
    Disallow: ['/gdpr', '/privacy', '/nda'],
    Sitemap: 'https://maddevs.io/sitemap.xml'
  },
  prismic: {
    endpoint: process.env.NODE_PRISMIC_API,
    linkResolver: '@/plugins/link-resolver',
    htmlSerializer: '@/plugins/html-serializer',
    preview: false
  }
};
