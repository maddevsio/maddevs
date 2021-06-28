export const getPostsByTag = async (prismic, payload) => {
  const prismicQuery = async (page = 1) => {
    let posts = []
    const response = await prismic.api.query(prismic.predicates.at('document.tags', [payload]), {
      orderings: '[my.post.date desc]',
      pageSize: 100,
      page,
    })
    posts = posts.concat(response.results)
    if (response.next_page) posts = posts.concat(await prismicQuery(page + 1))
    return posts
  }

  try {
    const posts = await prismicQuery()
    return posts.filter(recommendedPost => Boolean(recommendedPost.data?.post_author?.id))
  } catch (error) {
    return error
  }
}
