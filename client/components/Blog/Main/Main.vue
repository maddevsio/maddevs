<template>
  <section class="home">
    <TheLastPostSection />
    <LatestPostsSection />
    <CustomerUniversitySection />
    <AllPostsSection />
  </section>
</template>

<script>
import { mapActions } from 'vuex'
import TheLastPostSection from '@/components/Blog/Main/TheLastPostSection'
import LatestPostsSection from '@/components/Blog/Main/LatestPostsSection'
import CustomerUniversitySection from '@/components/Blog/Main/CustomerUniversitySection'
import AllPostsSection from '@/components/Blog/Main/AllPostsSection'
import initializeLazyLoad from '@/helpers/lazyLoad'
import initLazyLoadMixin from '@/mixins/initLazyLoadMixin'

export default {
  name: 'Main',
  components: {
    TheLastPostSection,
    LatestPostsSection,
    CustomerUniversitySection,
    AllPostsSection,
  },

  mixins: [initLazyLoadMixin],

  data() {
    return {
      pageSize: 12,
    }
  },

  created() {
    this.getContent()
  },

  updated() {
    this.$nextTick(() => initializeLazyLoad())
  },

  methods: {
    ...mapActions(['getBlogPageContent', 'getBlogPosts', 'getBlogAuthors', 'getBlogTags', 'getCustomerUniversityContent']),

    getContent() {
      // Query to get blog home content
      this.getBlogPageContent()
      this.getCustomerUniversityContent()

      // Query to get posts content to preview
      this.getBlogPosts()
      this.getBlogAuthors()
      this.getBlogTags()
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_vars';

.home {
  padding-top: 100px;
}
</style>
