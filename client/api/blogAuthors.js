export const getBlogAuthors = async prismic => {
  const prismicQuery = async (page = 1) => {
    let authors = []
    const response = await prismic.api.query(prismic.predicates.at('document.type', 'author'), {
      pageSize: 100,
      page,
    })
    authors = authors.concat(response.results)
    if (response.next_page) authors = authors.concat(await prismicQuery(page + 1))
    return authors
  }

  try {
    const authors = await prismicQuery()
    return authors
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
  const prismicQuery = async (page = 1) => {
    let posts = []
    const response = await prismic.api.query([
      prismic.predicates.at('document.type', 'post'),
      prismic.predicates.at('my.post.post_author', payload),
    ], {
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
    return posts
  } catch (error) {
    return error
  }
}
