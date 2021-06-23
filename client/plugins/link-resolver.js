/**
 * To learn more about Link Resolving check out the Prismic documentation
 */

export default (doc = {}) => {
  if (doc.isBroken) return '/not-found/'
  if (doc.type === 'blog_home') return '/'
  if (doc.type === 'post') return `/blog/${doc.uid}/`
  if (doc.type === 'author') return `/blog/author/${doc.uid}/`
  if (doc.type === 'tag') return `/blog/tag/${doc.uid}/`
  return '/not-found/'
}
