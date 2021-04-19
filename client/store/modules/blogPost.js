export default {
  actions: {
    async getBlogPost(_, payload = { type: 'post' }) {
      try {
        const post = await this.$prismic.api.getByUID(payload.type, payload.uid)
        if (post.tags && post.tags.length) {
          const response = await this.$prismic.api.query(
            this.$prismic.predicates.at('document.tags', [post.tags[0]]),
            { pageSize: 4 },
          )
          post.recommendedPosts = response.results
        }
        return post
      } catch (err) {
        if (err) throw err
        return null
      }
    },

    async getClusterData(_, postId) {
      const response = await this.$prismic.api.getSingle('cu_master')
      const { data: { body } } = response

      return body.find(cluster => cluster.items.find(post => post.cu_post.id === postId) !== undefined) || null
    },
  },
}
