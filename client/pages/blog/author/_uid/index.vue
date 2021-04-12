<template>
  <section class="author">
    <AuthorBanner />
    <AuthorPostsSection />
  </section>
</template>

<script>
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
      await store.dispatch('getAuthorPosts', store.state.blogAuthors.author.id)

      return {
        openGraphUrl: `${process.env.domain}/blog/author/${params.uid}/`,
      }
    } catch (e) {
      // Returns error page
      return error({ statusCode: 404, message: 'Page not found' })
    }
  },
}
</script>

<style lang="scss" scoped>
  .author {
    padding-top: 62px;
  }
</style>
