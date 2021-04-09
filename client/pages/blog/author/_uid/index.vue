<template>
  <section class="author">
    <AuthorSection />
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import AuthorSection from '@/components/Blog/Main/AuthorSection'

export default {
  name: 'Author',
  components: {
    AuthorSection,
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

  created() {
    this.getAuthorPosts(this.blogAuthor.id)
  },

  methods: {
    ...mapActions(['getAuthorPosts']),
  },

  computed: {
    ...mapGetters(['blogAuthor', 'authorPosts']),
  },
}
</script>

<style lang="scss" scoped>
  .author {
    padding-top: 62px;
  }
</style>
