<template>
  <section class="search-result">
    <SearchResultBanner />
    <PostsSection :posts="posts" />
  </section>
</template>

<script>
import { buildHead } from '@/data/seo'
import { mapGetters, mapActions } from 'vuex'
import SearchResultBanner from '@/components/Blog/Main/SearchResultBanner'
import PostsSection from '@/components/Blog/Main/PostsSection'

import initLazyLoadMixin from '@/mixins/initLazyLoadMixin'

export default {
  name: 'SearchResult',
  components: {
    SearchResultBanner,
    PostsSection,
  },

  mixins: [initLazyLoadMixin],

  head() {
    return buildHead({
      title: 'Mad Devs: Software & Mobile App Development Company | Blog Tag',
      metaTitle: `${this.blogTag} | Blog`,
      description: '',
      url: this.openGraphUrl,
      jsonLd: '{"@context": "http://www.schema.org", "@type": "Organization", "name": "Mad Devs Group LTD - Custom Software Development Company", "url": "https://maddevs.io", "logo": "https://maddevs.io/Open-Graph.png", "foundingDate": "2016", "email": "team@maddevs.io", "description": "Mad Devs Group LTD is a software development company headquartered in Cambridge (UK), which specializes in developing highly scalable, enterprise-level software solutions. Since the year 2016, the Mad Devs Group LTD team has developed 50+ projects and online services for finance, transportation & logistics, security, edtech, and advertising industries. The company’s customers are based in the United States, Australia, United Kingdom, France, Germany, Switzerland, Austria, Poland, Vietnam, Singapore, Russia, and CIS countries.", "address": {"@type": "PostalAddress", "streetAddress": "Salisbury House, Station Road", "addressLocality": "Cambridge", "addressRegion": "UK", "postalCode": "CB12LA"}, "contactPoint": {"@type": "ContactPoint", "contactType": "customer service", "telephone": "+442039848555"}, "sameAs": ["https://www.facebook.com/maddevsllc", "http://www.linkedin.com/company/mad-devs", "https://blog.maddevs.io", "https://clutch.co/profile/mad-devs", "https://www.glassdoor.com/Overview/Working-at-Mad-Devs-EI_IE2507466.11,19.htm", "https://twitter.com/MadDevsIO", "https://www.instagram.com/maddevsio", "https://www.crunchbase.com/organization/mad-devs", "https://github.com/maddevsio", "https://www.behance.net/maddevs"]}',
      image: 'https://maddevs.io/blog.png',
    })
  },

  watch: {
    allAuthors(newVal) {
      if (newVal && newVal.length) {
        this.$nextTick(() => {
          this.resetLazyLoad()
        })
      }
    },
  },

  computed: {
    ...mapGetters(['getSearchResponse', 'getSearchQuery', 'allAuthors']),

    posts() {
      if (!this.getSearchResponse || !this.getSearchResponse.results) return null
      if (!this.getSearchResponse || !this.getSearchResponse.results || !this.getSearchResponse.results.length) return []
      this.$nextTick(() => {
        this.resetLazyLoad()
      })
      return this.getSearchResponse.results
    },
  },

  created() {
    if (!this.getSearchQuery) {
      if (process.browser) {
        const query = localStorage.getItem('blog-search-query')
        if (query && query.length) {
          this.getPosts(query)
        } else {
          this.$router.push('/blog/')
        }
      }
    }
  },

  methods: {
    ...mapActions(['setSearchResponse']),

    async getPosts(query) {
      const response = await this.$prismic.api.query(this.$prismic.predicates.fulltext('my.post.title', query))
      this.setSearchResponse(response)
    },
  },
}
</script>

<style lang="scss" scoped>
  .search-result {
    padding-top: 62px;
  }
</style>
