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

export default {
  name: 'Tag',
  components: {
    TagBanner,
    TagPostsSection,
  },

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
