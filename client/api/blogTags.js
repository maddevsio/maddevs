export const getPostsByTag = async (prismic, payload) => {
  try {
    const response = await prismic.api.query(prismic.predicates.at('document.tags', [payload]), {
      orderings: '[my.post.date desc]',
      pageSize: 100,
    })
    return response.results.filter(recommendedPost => Boolean(recommendedPost.data?.post_author?.id))
  } catch (error) {
    return error
  }
}
