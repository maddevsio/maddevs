<template>
  <section class="tag">
    <TagBanner />
    <TagPostsSection />
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import TagBanner from '@/components/Blog/Main/TagBanner'
import TagPostsSection from '@/components/Blog/Main/TagPostsSection'
import { buildHead, getMetadata } from '@/data/seo'

import initLazyLoadMixin from '@/mixins/initLazyLoadMixin'

export default {
  name: 'Tag',
  components: {
    TagBanner,
    TagPostsSection,
  },

  mixins: [initLazyLoadMixin],

  async asyncData({ store, params, error }) {
    try {
      store.dispatch('getBlogTag', params.uid)
      return {
        openGraphUrl: `${process.env.domain}/blog/tag/${params.uid}/`,
      }
    } catch (e) {
      // Returns error page
      return error({ statusCode: 404, message: 'Page not found' })
    }
  },

  head() {
    const metaData = getMetadata(this.$route.params.uid)
    return buildHead({
      title: metaData.title || `Top articles about ${this.blogTag} | Mad Devs Blog`,
      metaTitle: metaData.title || `Top articles about ${this.blogTag} | Mad Devs Blog`,
      description: metaData.description || `Discover articles about ${this.blogTag}. Quality content curated by Mad Devs.`,
      url: this.openGraphUrl,
      jsonLd: '{"@context": "http://www.schema.org", "@type": "Organization", "name": "Mad Devs Group LTD - Custom Software Development Company", "url": "https://maddevs.io", "logo": "https://maddevs.io/Open-Graph.png", "foundingDate": "2016", "email": "team@maddevs.io", "description": "Mad Devs Group LTD is a software development company headquartered in London, which specializes in developing highly scalable, enterprise-level software solutions. Since the year 2016, the Mad Devs Group LTD team has developed 50+ projects and online services for finance, transportation & logistics, security, edtech, and advertising industries. The company’s customers are based in the United States, Australia, United Kingdom, France, Germany, Switzerland, Austria, Poland, Vietnam, Singapore, Russia, and CIS countries.", "address": {"@type": "PostalAddress", "streetAddress": "27 Old Gloucester Street", "addressLocality": "London", "addressRegion": "UK", "postalCode": "WC1N3AX"}, "contactPoint": {"@type": "ContactPoint", "contactType": "customer service", "telephone": "+442039848555"}, "sameAs": ["https://www.facebook.com/maddevsllc", "http://www.linkedin.com/company/mad-devs", "https://blog.maddevs.io", "https://clutch.co/profile/mad-devs", "https://www.glassdoor.com/Overview/Working-at-Mad-Devs-EI_IE2507466.11,19.htm", "https://twitter.com/MadDevsIO", "https://www.instagram.com/maddevsio", "https://www.crunchbase.com/organization/mad-devs", "https://github.com/maddevsio", "https://www.behance.net/maddevs"]}',
      image: 'https://maddevs.io/blog.png',
    })
  },

  computed: {
    ...mapGetters(['blogTag']),
  },

  created() {
    this.getTagPosts(this.blogTag)
    this.getBlogAuthors()
  },

  methods: {
    ...mapActions(['getTagPosts', 'getBlogAuthors']),
  },
}
</script>

<style lang="scss" scoped>
  .tag {
    padding-top: 62px;
  }
</style>
