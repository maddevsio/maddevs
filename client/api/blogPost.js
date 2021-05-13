export const getBlogPost = async (prismic, payload) => {
  try {
    const post = await prismic.api.getByUID(payload.type, payload.uid)
    if (post.tags && post.tags.length) {
      const response = await prismic.api.query(
        prismic.predicates.at('document.tags', [post.tags[0]]),
        { pageSize: 6 },
      )
      post.recommendedPosts = response.results
    }
    return post
  } catch (error) {
    return error
  }
}

export const getClusterData = async prismic => {
  try {
    const response = await prismic.api.getSingle('cu_master')
    const { data: { body } } = response
    return body
  } catch (error) {
    return error
  }
}
