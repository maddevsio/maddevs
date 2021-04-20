export const getBlogAuthors = async prismic => {
  try {
    const response = await prismic.api.query(
      this.$prismic.predicates.at('document.type', 'author'),
      { pageSize: 100 },
    )
    return response.results
  } catch (error) {
    return error
  }
}

export const getBlogAuthor = async (prismic, payload) => {
  try {
    const response = await prismic.api.getByUID('author', payload)
    return response
  } catch (error) {
    return error
  }
}

export const getAuthorPosts = async (prismic, payload) => {
  try {
    const response = await prismic.api.query([
      prismic.predicates.at('document.type', 'post'),
      prismic.predicates.at('my.post.post_author', payload),
    ], {
      orderings: '[my.post.date desc]',
      pageSize: 100,
    })
    return response.results
  } catch (error) {
    return error
  }
}
