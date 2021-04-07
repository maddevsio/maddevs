<template>
  <Main />
</template>

<script>
import { mapGetters } from 'vuex'
import Main from '@/components/Blog/Main/Main'

export default {
  name: 'Blog',
  components: {
    Main,
  },

  head() {
    return {
      title: 'Mad Devs: Software & Mobile App Development Company | Blog',
      meta: [
        { name: 'description', content: this.homePageContent.description || '' },
        // Facebook / Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://maddevs.io/blog/' },
        { property: 'og:title', content: 'Blog' },
        { property: 'og:description', content: this.homePageContent.description || '' },
        { property: 'og:image', content: 'https://maddevs.io/blog.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        // Twitter / Twitter Card
        { property: 'twitter:card', content: 'summary' },
        { property: 'twitter:text:title', content: 'Blog' },
        { property: 'twitter:description', content: this.homePageContent.description || '' },
        { property: 'twitter:image:src', content: 'https://maddevs.io/blog.png' },
        { property: 'twitter:url', content: 'https://maddevs.io/blog/' },
      ],

      link: [
        {
          rel: 'canonical',
          href: 'https://maddevs.io/blog/',
        },
      ],

      __dangerouslyDisableSanitizers: ['script'],
      script: [
        {
          type: 'application/ld+json',
          innerHTML:
            '{"@context": "http://www.schema.org", "@type": "Organization", "name": "Mad Devs Group LTD - Custom Software Development Company", "url": "https://maddevs.io", "logo": "https://maddevs.io/Open-Graph.png", "foundingDate": "2016", "email": "team@maddevs.io", "description": "Mad Devs Group LTD is a software development company headquartered in Cambridge (UK), which specializes in developing highly scalable, enterprise-level software solutions. Since the year 2016, the Mad Devs Group LTD team has developed 50+ projects and online services for finance, transportation & logistics, security, edtech, and advertising industries. The company’s customers are based in the United States, Australia, United Kingdom, France, Germany, Switzerland, Austria, Poland, Vietnam, Singapore, Russia, and CIS countries.", "address": {"@type": "PostalAddress", "streetAddress": "Salisbury House, Station Road", "addressLocality": "Cambridge", "addressRegion": "UK", "postalCode": "CB12LA"}, "contactPoint": {"@type": "ContactPoint", "contactType": "customer service", "telephone": "+442039848555"}, "sameAs": ["https://www.facebook.com/maddevsllc", "http://www.linkedin.com/company/mad-devs", "https://blog.maddevs.io", "https://clutch.co/profile/mad-devs", "https://www.glassdoor.com/Overview/Working-at-Mad-Devs-EI_IE2507466.11,19.htm", "https://twitter.com/MadDevsIO", "https://www.instagram.com/maddevsio", "https://www.crunchbase.com/organization/mad-devs", "https://github.com/maddevsio", "https://www.behance.net/maddevs"]}',
        },
        // Need for supported Safari9 and IE11 https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Intl
        { src: 'https://cdn.polyfill.io/v2/polyfill.min.js?features=Intl.~locale.en' },
      ],
    }
  },

  computed: {
    ...mapGetters(['homePageContent']),
  },
}
</script>
