<template>
  <PostView
    v-bind="post"
    :open-grapht-url="openGraphUrl"
  />
</template>

<script>
import PostView from '@/components/Blog/Post/Post'

import buildPostPageMixin from '@/mixins/buildPostPageMixin'

export default {
  name: 'Post',
  components: {
    PostView,
  },

  mixins: [buildPostPageMixin()],
}
</script>
