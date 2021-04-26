<template>
  <div class="container">
    <div class="last-post">
      <FeaturedPost
        v-if="postsLoaded && featuredPost"
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
    margin: 95px 0;
    @media only screen and (max-width: 991px) {
      margin-top: 0;
      margin-bottom: 36px;
    }
  }
</style>
