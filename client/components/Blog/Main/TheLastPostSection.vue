<template>
  <div class="container">
    <div class="last-post">
      <FeaturedPost
        v-if="postsLoaded && featuredPost"
        title-tag="h1"
        :post="featuredPost"
        :author="findAuthor(featuredPost.data.post_author.id, allAuthors)"
      />
      <SkeletonFeaturedPost
        v-else
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import FeaturedPost from '@/components/Blog/shared/FeaturedPost'
import SkeletonFeaturedPost from '@/components/Blog/skeletons/SkeletonFeaturedPost'

import findPostAuthorMixin from '@/mixins/findPostAuthorMixin'

export default {
  name: 'TheLastPostSection',
  components: {
    FeaturedPost,
    SkeletonFeaturedPost,
  },

  mixins: [findPostAuthorMixin],

  computed: {
    ...mapGetters(['featuredPost', 'postsLoaded', 'allAuthors']),
  },
}
</script>

<style scoped lang="scss">
  .last-post {
    padding: 95px 0 88px;
    @media only screen and (max-width: 991px) {
      padding: 36px 0;
    }
  }
</style>
