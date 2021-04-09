<template>
  <section class="category">
    <CategoryBanner />
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import CategoryBanner from '@/components/Blog/Main/CategoryBanner'

export default {
  name: 'Category',
  components: {
    CategoryBanner,
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
    ...mapGetters(['blogCategory', 'categoryPosts']),
  },

  created() {
    this.getCategoryPosts(this.blogCategory)
  },

  methods: {
    ...mapActions(['getCategoryPosts']),
  },
}
</script>

<style lang="scss" scoped>
  .category {
    padding-top: 62px;
  }
</style>
