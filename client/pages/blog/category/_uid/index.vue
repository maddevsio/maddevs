<template>
  <section class="category">
    <CategoryBanner />
    <CategoryPostsSection />
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import CategoryBanner from '@/components/Blog/Main/CategoryBanner'
import CategoryPostsSection from '@/components/Blog/Main/CategoryPostsSection'

export default {
  name: 'Category',
  components: {
    CategoryBanner,
    CategoryPostsSection,
  },

  async asyncData({ store, params, error }) {
    try {
      store.dispatch('getBlogCategory', params.uid)
      return {
        openGraphUrl: `${process.env.domain}/blog/category/${params.uid}/`,
      }
    } catch (e) {
      // Returns error page
      return error({ statusCode: 404, message: 'Page not found' })
    }
  },

  computed: {
    ...mapGetters(['blogCategory']),
  },

  created() {
    this.getCategoryPosts(this.blogCategory)
    this.getBlogAuthors()
  },

  methods: {
    ...mapActions(['getCategoryPosts', 'getBlogAuthors']),
  },
}
</script>

<style lang="scss" scoped>
  .category {
    padding-top: 62px;
  }
</style>
