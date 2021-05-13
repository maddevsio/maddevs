<template>
  <PostView
    v-bind="post"
    :open-grapht-url="openGraphUrl"
    :cluster="cluster"
  />
</template>

<script>
import { mapActions } from 'vuex'
import PostView from '@/components/Blog/Post/Post'

import buildBlogPostMixin from '@/mixins/buildBlogPostMixin'

export default {
  name: 'Post',
  components: {
    PostView,
  },

  mixins: [buildBlogPostMixin('customer_university')],

  beforeRouteEnter(to, from, next) {
    next(vm => {
      const { params } = to
      const { post } = vm
      /**
       * Prismic saves all previous UID and they both still resolve
       * This condition checks the current uid and redirects to it
       * https://community.prismic.io/t/when-does-cache-expire-uid-history/874 - about this issue
       */
      if (params.uid !== post.uid && typeof post.uid === 'string') {
        next({ path: `/blog/${post.uid}/` })
      }
    })
  },

  data() {
    return {
      cluster: null,
    }
  },

  async fetch() {
    this.cluster = await this.getClusterData(this.post.id)
  },

  methods: {
    ...mapActions(['getClusterData']),
  },
}
</script>
