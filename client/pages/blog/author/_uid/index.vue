<template>
  <section class="author">
    <AuthorBanner />
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import AuthorBanner from '@/components/Blog/Main/AuthorBanner'

export default {
  name: 'Author',
  components: {
    AuthorBanner,
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
    ...mapGetters(['blogAuthor', 'authorPosts']),
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
