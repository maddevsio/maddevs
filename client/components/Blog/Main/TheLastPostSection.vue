<template>
  <div class="container">
    <FeaturedPost
      v-if="postsLoaded && featuredPost"
      :post="featuredPost"
    />
    <SkeletonFeaturedPost
      v-else
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import FeaturedPost from '@/components/Blog/shared/FeaturedPost'
import SkeletonFeaturedPost from '@/components/Blog/skeletons/SkeletonFeaturedPost'

export default {
  name: 'TheLastPostSection',
  components: {
    FeaturedPost,
    SkeletonFeaturedPost,
  },

  computed: {
    ...mapGetters(['featuredPost', 'postsLoaded']),
  },
}
</script>
