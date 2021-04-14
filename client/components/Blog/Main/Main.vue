<template>
  <section class="home">
    <TheLastPostSection />
    <LatestPostsSection />
    <CustomerUniversitySection />
    <AllPostsSection />
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
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

  computed: {
    ...mapGetters([
      'allPosts',
    ]),
  },

  watch: {
    allPosts() {
      // Add lazy loading for async posts
      this.$nextTick(() => initializeLazyLoad())
    },
  },

  created() {
    this.getContent()
  },

  methods: {
    ...mapActions(['getHomePageContent', 'getBlogPosts', 'getBlogAuthors']),

    getContent() {
      // Query to get blog home content
      this.getHomePageContent()

      // Query to get posts content to preview
      this.getBlogPosts()
      this.getBlogAuthors()
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/_vars';

.home {
  padding-top: 100px;
}
</style>
