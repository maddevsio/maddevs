<template>
  <div class="container">
    <div class="last-post">
      <FeaturedPost
        v-if="postsLoaded && featuredPost"
        :post="featuredPost"
        :author="findAuthor(featuredPost.data.post_author.id)"
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

export default {
  name: 'TheLastPostSection',
  components: {
    FeaturedPost,
    SkeletonFeaturedPost,
  },

  computed: {
    ...mapGetters(['featuredPost', 'postsLoaded', 'allAuthors']),
  },

  methods: {
    findAuthor(authorId) {
      if (!this.allAuthors && !this.allAuthors.length) return null
      return this.allAuthors.find(a => a.id === authorId)
    },
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
