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
      'blogPageContent',
      'customerContent',
      'blogPosts',
      'blogAuthors',
      'blogTags',
    ]),
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
      if (!Object.keys(this.blogPageContent).length) this.getBlogPageContent()
      if (!Object.keys(this.customerContent).length) this.getCustomerUniversityContent()

      // Query to get posts content to preview
      if (!this.blogPosts.length) this.getBlogPosts()
      if (!this.blogAuthors.length) this.getBlogAuthors()
      if (!this.blogTags.length) this.getBlogTags()
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
