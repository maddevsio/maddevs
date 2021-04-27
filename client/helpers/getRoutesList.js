import axios from 'axios'
import convertStringToSlug from './convertStringToSlug'

const getRoutesList = async () => {
  const getPosts = async pageUrl => {
    let posts = []
    const response = await axios.get(pageUrl)
    posts = posts.concat(response.data.results)

    if (response.data.next_page) {
      posts = posts.concat(await getPosts(response.data.next_page))
    }
    return posts
  }

  // Getting data from prismic
  const prismicData = await axios.get(process.env.NODE_PRISMIC_API)
  const prismicTags = prismicData.data.tags

  // Getting posts of all types from prismic
  const { ref } = prismicData.data.refs[0]
  const prismicPosts = await getPosts(`${process.env.NODE_PRISMIC_API}/documents/search?ref=${ref}#format=json`)

  // Creating a list of routes
  const blogPageRoutes = prismicPosts
    .filter(post => post.type === 'post')
    .map(post => `/blog/${post.uid}`)

  const cuPageRoutes = prismicPosts
    .filter(post => post.type === 'customer_university')
    .map(post => `/customer-university/${post.uid}`)

  const authorPageRoutes = prismicPosts
    .filter(post => post.type === 'author')
    .map(author => `/blog/author/${author.uid}`)

  const authorPostPageRoutes = prismicPosts
    .filter(post => post.type === 'post')
    .map(post => `/blog/author/${post.data.post_author.uid}/${post.uid}`)

  const tagPageRoutes = prismicTags
    .map(tag => `/blog/tag/${convertStringToSlug(tag)}`)

  const tagPostPageRoutes = prismicTags
    .reduce((acc, tag) => {
      const tagPostsRoutes = prismicPosts
        .filter(post => (post.type === 'post' && post.tags.includes(tag)))
        .map(post => `/blog/tag/${convertStringToSlug(tag)}/${post.uid}`)
      return [...acc, ...tagPostsRoutes]
    }, [])

  const routes = [
    '/',
    '/services',
    '/projects',
    '/careers',
    '/gdpr',
    '/nda',
    '/privacy',
    '/faq',
    '/case-studies/namba-food',
    '/case-studies/sir-john-monash-centre',
    '/blog',
    ...blogPageRoutes,
    ...cuPageRoutes,
    ...authorPageRoutes,
    ...authorPostPageRoutes,
    ...tagPageRoutes,
    ...tagPostPageRoutes,
  ]

  return routes
}

export default getRoutesList
