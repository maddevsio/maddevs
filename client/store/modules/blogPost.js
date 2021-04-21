import { getBlogPost, getClusterData } from '@/api/blogPost'

export const actions = {
  async getBlogPost(_, payload = { type: 'post' }) {
    const post = await getBlogPost(this.$prismic, payload)
    return post
  },

  async getClusterData(_, postId) {
    const clusterData = await getClusterData(this.$prismic)
    return clusterData.find(cluster => cluster.items.find(post => post.cu_post.id === postId) !== undefined) || null
  },
}
