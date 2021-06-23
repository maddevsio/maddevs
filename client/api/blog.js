export const getHomePageContent = async prismic => {
  try {
    const response = await prismic.api.getSingle('blog_home')
    return response.data
  } catch (error) {
    return error
  }
}

export const getBlogPosts = async prismic => {
  const prismicQuery = async (page = 1) => {
    let posts = []
    const response = await prismic.api.query(prismic.predicates.at('document.type', 'post'), {
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

export const getCustomerUniversityMaster = async prismic => {
  try {
    const response = await prismic.api.getSingle('cu_master')
    return response.data
  } catch (error) {
    return error
  }
}

export const getCustomerUniversityFeaturedPost = async (prismic, master) => {
  try {
    const response = await prismic.api.getByUID('customer_university', master.featured_cu.uid)
    return response.data
  } catch (error) {
    return error
  }
}
