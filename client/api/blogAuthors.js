import { getBlogPosts } from '@/api/blog'

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
    const blogPosts = await getBlogPosts(prismic)
    const authors = await prismicQuery()
    const blogAuthors = authors.filter(author => blogPosts.some(post => post.data.post_author.id === author.id))
    return blogAuthors
  } catch (error) {
    return error
  }
}

export const getBlogAuthor = async (prismic, payload) => {
  try {
    const blogAuthors = await getBlogAuthors(prismic)
    const blogAuthor = blogAuthors.find(author => author.uid === payload)
    return blogAuthor
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
