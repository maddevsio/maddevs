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

  beforeRouteEnter(to, from, next) {
    next(vm => {
      const { post } = vm
      const { params } = to
      /**
       * Prismic saves all previous UID and they both still resolve
       * This condition checks the current uid and redirects to it
       * https://community.prismic.io/t/when-does-cache-expire-uid-history/874 - about this issue
       */
      if (params.postUID !== post.uid || post.uid === 'string') {
        next({ path: `/blog/tag/${params.uid}/${post.uid}/` })
      }
    })
  },
}
</script>
