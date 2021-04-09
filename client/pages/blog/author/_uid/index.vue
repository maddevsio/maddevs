<template>
  <section class="author">
    <AuthorSection />
  </section>
</template>

<script>
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
}
</script>

<style lang="scss" scoped>
  .author {
    padding-top: 62px;
  }
</style>
