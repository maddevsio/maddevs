<template>
  <section class="author">
    <AuthorBanner />
    <AuthorPostsSection />
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import AuthorBanner from '@/components/Blog/Main/AuthorBanner'
import AuthorPostsSection from '@/components/Blog/Main/AuthorPostsSection'

export default {
  name: 'Author',
  components: {
    AuthorBanner,
    AuthorPostsSection,
  },

  async asyncData({ store, params, error }) {
    try {
      await store.dispatch('getBlogAuthor', params.uid)

      return {
        openGraphUrl: `${process.env.domain}/blog/author/${params.uid}/`,
      }
    } catch (e) {
      // Returns error page
      return error({ statusCode: 404, message: 'Page not found' })
    }
  },

  computed: {
    ...mapGetters(['blogAuthor']),
  },

  created() {
    this.getAuthorPosts(this.blogAuthor.id)
  },

  methods: {
    ...mapActions(['getAuthorPosts']),
  },
}
</script>

<style lang="scss" scoped>
  .author {
    padding-top: 62px;
  }
</style>
