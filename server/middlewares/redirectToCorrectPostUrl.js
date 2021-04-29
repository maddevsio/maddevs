/* eslint-disable no-unused-vars */
function redirectToCorrectPostUrl(req, res, next) {
  const blogPageTypes = ['author', 'tag']
  /**
   * Get blog page type and postUid from req.path
   * If page type is author or tag - redirect to /blog/${postUid}
   * else next
   * @example
   * // path = '/blog/author/denis/post-custom-slug'
   * // type = 'author', postUid = 'post-custom-slug'
   */
  const [_, type, __, postUid] = req.path.split('/').filter(path => Boolean(path))
  if (blogPageTypes.includes(type) && postUid) {
    res.redirect(301, `/blog/${postUid}`)
  } else {
    next()
  }
}

module.exports = redirectToCorrectPostUrl
