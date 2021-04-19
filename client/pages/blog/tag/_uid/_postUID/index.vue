<template>
  <PostView
    v-bind="post"
    :open-graph-url="openGraphUrl"
  />
</template>

<script>
import PostView from '@/components/Blog/Post/Post'
import buildPostPageMixin from '@/mixins/buildPostPageMixin'

export default {
  name: 'AuthorPost',
  components: {
    PostView,
  },

  mixins: [buildPostPageMixin('tag', 'post')],
}
</script>
