<template>
  <div class="body-content">
    <FeaturedPost
      v-if="postsLoaded && featuredPost"
      :post="featuredPost"
      class="container"
    />
    <SkeletonFeaturedPost
      v-else
      class="container"
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

<style lang="scss" scoped>
.container {
  max-width: 1240px;
  margin: 0 auto;
}
</style>
