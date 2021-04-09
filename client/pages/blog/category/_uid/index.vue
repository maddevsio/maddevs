<template>
  <section class="category">
    <CategorySection />
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import CategorySection from '@/components/Blog/Main/CategorySection'

export default {
  name: 'Category',
  components: {
    CategorySection,
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

  created() {
    this.getCategoryPosts(this.blogCategory)
  },

  methods: {
    ...mapActions(['getCategoryPosts']),
  },

  computed: {
    ...mapGetters(['blogCategory', 'categoryPosts']),
  },
}
</script>

<style lang="scss" scoped>
  .category {
    padding-top: 62px;
  }
</style>
