<template>
  <main class="main">
    <ProjectsBanner />
    <CaseStudies type="projects" />
    <Customers />
    <OpenSource />
  </main>
</template>

<script>
import ProjectsBanner from '@/components/Banner/ProjectsBanner'
import CaseStudies from '@/components/About/CaseStudies'
import Customers from '@/components/Projects/Customers'
import OpenSource from '@/components/Projects/OpenSource'
import initImgLazyHelper from '@/helpers/initImgLazy'

export default {
  name: 'MainProjects',
  components: {
    ProjectsBanner,
    CaseStudies,
    Customers,
    OpenSource,
  },

  data() {
    return {
      title: 'Mad Devs Portfolio: Key Clients, Case Studies and Open Source Projects',
      description:
        'Check out our software engineering and mobile app development projects for companies from transportation, logistic, edtech, cloudtech, security, advertising, finance, and other industries.',

      ogUrl: 'https://maddevs.io/projects/',
    }
  },

  head() {
    return {
      title: this.title,
      meta: [
        { name: 'description', content: this.description },
        { property: 'og:url', content: this.ogUrl },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: this.title },
        { property: 'og:description', content: this.description },
        { property: 'og:image', content: 'https://maddevs.io/Open-Graph.png' },
      ],

      link: [
        {
          rel: 'canonical',
          href: 'https://maddevs.io/projects/',
        },
      ],

      __dangerouslyDisableSanitizers: ['script'],
      script: [
        {
          type: 'application/ld+json',
          innerHTML:
            '{"@context": "http://www.schema.org", "@type": "Organization", "name": "Mad Devs Group LTD - Custom Software Development Company", "url": "https://maddevs.io", "logo": "https://maddevs.io/Open-Graph.png", "foundingDate": "2016", "email": "team@maddevs.io", "description": "Mad Devs Group LTD is a software development company headquartered in Cambridge (UK), which specializes in developing highly scalable, enterprise-level software solutions. Since the year 2016, the Mad Devs Group LTD team has developed 50+ projects and online services for finance, transportation & logistics, security, edtech, and advertising industries. The company’s customers are based in the United States, Australia, United Kingdom, France, Germany, Switzerland, Austria, Poland, Vietnam, Singapore, Russia, and CIS countries.", "address": {"@type": "PostalAddress", "streetAddress": "Salisbury House, Station Road", "addressLocality": "Cambridge", "addressRegion": "UK", "postalCode": "CB12LA"}, "contactPoint": {"@type": "ContactPoint", "contactType": "customer service", "telephone": "+442039848555"}, "sameAs": ["https://www.facebook.com/maddevsllc", "http://www.linkedin.com/company/mad-devs", "https://blog.maddevs.io", "https://clutch.co/profile/mad-devs", "https://www.glassdoor.com/Overview/Working-at-Mad-Devs-EI_IE2507466.11,19.htm", "https://twitter.com/MadDevsIO", "https://www.instagram.com/maddevsio", "https://www.crunchbase.com/organization/mad-devs", "https://github.com/maddevsio", "https://www.behance.net/maddevs"]}',
        },
      ],
    }
  },

  mounted() {
    initImgLazyHelper()
  },
}
</script>
