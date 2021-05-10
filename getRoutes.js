import axios from 'axios'

const EXCLUDE_ROUTES = {
  '/': 1,
  '/gdpr': 0.7,
  '/nda': 0.7,
  '/privacy': 0.7,
  '/faq': 0.7,
}

const getRoutes = async () => {
  const getPosts = async pageUrl => {
    let posts = []
    const response = await axios.get(pageUrl)
    posts = posts.concat(response.data.results)

    if (response.data.next_page) {
      posts = posts.concat(await getPosts(response.data.next_page))
    }
    return posts
  }
  const convertToSlug = text => text.toLowerCase()
    .trim()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-')

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

  const tagPageRoutes = prismicTags
    .map(tag => `/blog/tag/${convertToSlug(tag)}`)

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
    ...tagPageRoutes,
  ]

  return routes
}

export default getRoutes

const generateRoute = name => {
  const priority = EXCLUDE_ROUTES[name.trim()] ? EXCLUDE_ROUTES[name.trim()] : 1 - (((name.trim().split('/').length) - 1) * 0.1)

  return (
    {
      priority,
      url: `${name}/`,
      changefreq: 'daily',
      lastmod: new Date().toISOString().split('T')[0],
    }
  )
}

export const getSitemapRoutes = async () => {
  const routes = await getRoutes()

  return routes.map(route => generateRoute(route))
}
