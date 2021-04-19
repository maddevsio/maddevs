<template>
  <PostView
    v-bind="post"
    :open-grapht-url="openGraphUrl"
    :cluster="cluster"
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

  mixins: [buildPostPageMixin('customer-university', 'customer_university')],
}
</script>
