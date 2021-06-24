import { getBlogPosts } from '@/api/blog'
import convertStringToSlug from '@/helpers/convertStringToSlug'

export const getBlogTags = async prismic => {
  try {
    const blogTags = []
    const blogPosts = await getBlogPosts(prismic)
    for (const post of blogPosts) {
      for (const tag of post.tags) {
        if (!blogTags.includes(tag)) blogTags.push(tag)
      }
    }

    return blogTags
  } catch (error) {
    return error
  }
}

export const getBlogTag = async (prismic, payload) => {
  try {
    const blogTags = await getBlogTags(prismic)
    return blogTags.find(tag => convertStringToSlug(tag) === payload)
  } catch (error) {
    return error
  }
}

export const getBlogPostsByTag = async (prismic, payload) => {
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
