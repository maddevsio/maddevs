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
      title: 'Mad Devs: Blog search result',
      metaTitle: 'Blog',
      description: '',
      url: this.openGraphUrl,
      image: 'https://maddevs.io/blog.png',
    })
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

  watch: {
    allAuthors(newVal) {
      if (newVal && newVal.length) {
        this.$nextTick(() => {
          this.resetLazyLoad()
        })
      }
    },
  },

  created() {
    if (!this.getSearchQuery) {
      if (process.browser) {
        const query = this.$route.query.searchBy.replace(/\//g, '')
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
      const response = await this.$prismic.api.query(
        this.$prismic.predicates.fulltext('my.post.title', query),
      )
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
