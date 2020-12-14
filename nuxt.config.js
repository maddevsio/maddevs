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
      { name: 'yandex-verification', content: '1cce4e9bf6ebcdff' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'sitemap', type: 'application/xml', href: 'https://maddevs.io/sitemap.xml' },
      { rel: 'canonical', href: 'https://maddevs.io'}
    ],
    __dangerouslyDisableSanitizers: ['script'],
    script: [
      {
        src: 'https://widget.clutch.co/static/js/widget.js',
        defer: true
      },
      {
        type: 'application/ld+json',
        innerHTML: '{"@context": "http://www.schema.org", "@type": "Organization", "name": "Mad Devs Group LTD - Custom Software Development Company", "url": "https://maddevs.io", "logo": "https://maddevs.io/Open-Graph.png", "foundingDate": "2016", "email": "team@maddevs.io", "description": "Mad Devs Group LTD is a software development company headquartered in Cambridge (UK), which specializes in developing highly scalable, enterprise-level software solutions. Since the year 2016, the Mad Devs Group LTD team has developed 50+ projects and online services for finance, transportation & logistics, security, edtech, and advertising industries. The company’s customers are based in the United States, Australia, United Kingdom, France, Germany, Switzerland, Austria, Poland, Vietnam, Singapore, Russia, and CIS countries.", "address": {"@type": "PostalAddress", "streetAddress": "Salisbury House, Station Road", "addressLocality": "Cambridge", "addressRegion": "UK", "postalCode": "CB12LA"}, "contactPoint": {"@type": "ContactPoint", "contactType": "customer service", "telephone": "+442039848555"}, "sameAs": ["https://www.facebook.com/maddevsllc", "http://www.linkedin.com/company/mad-devs", "https://blog.maddevs.io", "https://clutch.co/profile/mad-devs", "https://www.glassdoor.com/Overview/Working-at-Mad-Devs-EI_IE2507466.11,19.htm", "https://twitter.com/MadDevsIO", "https://www.instagram.com/maddevsio", "https://www.crunchbase.com/organization/mad-devs", "https://github.com/maddevsio", "https://www.behance.net/maddevs"]}'
      },
      {
        type: 'application/ld+json',
        innerHTML: '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How‌ ‌many‌ ‌people‌ ‌work‌ ‌at‌ ‌your‌ ‌company?","acceptedAnswer":{"@type":"Answer","text":"<a href=\'https://maddevs.io/faq/#how-many-people-work-at-your-company?\'>Mad Devs currently is a 120+ person strong team of rock stars who are on a mission to deliver value to long-term projects.</a>"}},{"@type":"Question","name":"What time zone does your team operate in?","acceptedAnswer":{"@type":"Answer","text":"<a href=\'https://maddevs.io/faq/#what-time-zone-does-your-team-operate-in?\'>We generally work in +6 and +3 UTC from 9 AM to 6 PM, but we have early birds and night owls allowing us to adjust to customers from the US, the UK, South East Asia, and Oceania. Our development workflows are devised around asynchronous communication, leveraging automatic reporting drilled down to every task instance or team member. Daily standups, work logs, and all-hands meetings or video calls keep everybody on the same page. </a>"}},{"@type":"Question","name":"What types of projects you do NOT work on?","acceptedAnswer":{"@type":"Answer","text":"<a href=\'https://maddevs.io/faq/#what-types-of-projects-you-do-not-work-on?\'>Mad Devs workflow is dedicated to the creation and maintenance of high-quality, scalable systems intended for heavy workloads. We can’t help with requests for landing pages and ultra-fast MVPs.</a>"}},{"@type":"Question","name":"Where can I find the project portfolio of your company? ","acceptedAnswer":{"@type":"Answer","text":"<a href=\'https://maddevs.io/faq/#where-can-i-find-the-project-portfolio-of-your-company?\'>Since 2016, our team has delivered to customers 50+ projects in FinTech, Transportation, HealthTech, AdTech, EdTech, and E-commerce industries. The Mad Devs team has worked with Clutch.co, Teacherly, Guardrails, GoDee, Sir John Monash Centre, Eatigo, Alfabank, Admitad, Triggermesh, and many other companies ensuring that hundreds of thousands of people enjoy apps and services they use on a daily basis. We cannot disclose details for ~40% of our customers as we need to comply with the terms of NDAs.</a>"}},{"@type":"Question","name":"What details do you need from me to discuss my project & start work? ","acceptedAnswer":{"@type":"Answer","text":"<a href=\'https://maddevs.io/faq/#what-details-do-you-need-from-me-to-discuss-my-project-&-start-work?\'>Simply submit your project idea to us via our contact form. We will contact you to clarify further requirements and prepare the project time & cost estimates. For more details, you can get in touch with our delivery manager Tamara Mun: tamaramun@maddevs.io, or schedule a meeting at calendly/mun_tamara.</a> "}},{"@type":"Question","name":"How much does software development cost? How do you charge? ","acceptedAnswer":{"@type":"Answer","text":"<a href=\'https://maddevs.io/faq/#how-much-does-software-development-cost?-how-do-you-charge?\'>Our pricing has always been transparent. We charge our customers on a ‘Time & Material’ basis which makes the costs predictable as there are known rates for each specialist, from developer to PM. This ensures great control over budget and provides the required level of flexibility as the projects’ scope can be easily corrected on the go. Thus, in the end, together we deliver a product that truly solves end-customers’ needs.</a> "}},{"@type":"Question","name":"How can I control my project budget? ","acceptedAnswer":{"@type":"Answer","text":"<a href=\'https://maddevs.io/faq/#how-can-i-control-my-project-budget?\'>You will have full control over your budget with our detailed monthly invoice. Weekly and daily reports cover the team’s contribution to your project in addition to individual performance reports that tell you what each of the specialists you hired has accomplished. Thus, with all information in your hands, the right adjustments in priorities of cost control factors can be implemented.</a>  "}},{"@type":"Question","name":"How do you ensure security for confidential information? Do you work under NDA?","acceptedAnswer":{"@type":"Answer","text":"<a href=\'https://maddevs.io/faq/#how-do-you-ensure-security-for-confidential-information?-do-you-work-under-nda?\'>Mad Devs always works under the NDA of our own, however, if you have a non-disclosure agreement on your side, we can consider your contract, too. Please read more about work under NDA in the corresponding section of our website: https://maddevs.io/nda/</a>"}},{"@type":"Question","name":"How do you mitigate the risks related to intellectual property ownership?","acceptedAnswer":{"@type":"Answer","text":"<a href=\'https://maddevs.io/faq/#how-do-you-mitigate-the-risks-related-to-intellectual-property-ownership?\'>Intellectual Property is wholly owned by you and your company.  After you sign a contract with us, you will become the owner of the repository, the project environment, Slack, hosting, and etc. The team only manages this and adjusts the processes in accordance with the regulations of the company. You have these accesses from the very beginning of the project, but it is important to remember that according to the contract you become a full owner only after paying for all the hours worked by the team.</a> "}},{"@type":"Question","name":"What if my question is not answered on this page? ","acceptedAnswer":{"@type":"Answer","text":"<a href=\'https://maddevs.io/faq/#what-if-my-question-is-not-answered-on-this-page?\'>Please don’t hesitate to contact us directly with any questions you may have. You have a number of options to use: Live chat Direct mail to our Delivery Manager Tamara Mun via tamaramun@maddevs.io Contact form Phone Call via +44 20 3984 8555 Text message via Facebook Messenger, Telegram, Whatsapp, or WeChat.</a>"}}]}'
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
    '~/plugins/vee-validate.js',
    '~/plugins/vue2-perfect-scrollbar.js',
    '~/plugins/vue-social-sharing.js',
    { src: '~/plugins/vue-awesome-swiper', mode: 'client' },
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
      const routes = ['/', '/services', '/projects', '/careers', '/gdpr', '/nda', '/privacy', '/faq', '/case-studies/namba-food', '/blog'];
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
    '@nuxtjs/prismic'
    // 'nuxt-lazy-load'
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
