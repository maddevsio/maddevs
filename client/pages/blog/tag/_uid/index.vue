<template>
  <section class="tag">
    <TagBanner />
    <TagPostsSection />
  </section>
</template>

<script>
import TagBanner from '@/components/Blog/Main/TagBanner'
import TagPostsSection from '@/components/Blog/Main/TagPostsSection'

export default {
  name: 'Tag',
  components: {
    TagBanner,
    TagPostsSection,
  },

  async asyncData({ store, params, error }) {
    try {
      store.dispatch('getBlogTag', params.uid)
      await store.dispatch('getTagPosts', store.state.blogTags.tag)
      await store.dispatch('getBlogAuthors')

      return {
        openGraphUrl: `${process.env.domain}/blog/tag/${params.uid}/`,
      }
    } catch (e) {
      // Returns error page
      return error({ statusCode: 404, message: 'Page not found' })
    }
  },
}
</script>

<style lang="scss" scoped>
  .tag {
    padding-top: 62px;
  }
</style>
