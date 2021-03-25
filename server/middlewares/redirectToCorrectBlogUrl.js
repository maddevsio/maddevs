const getRequestUrl = require('../utils/getRequestUrl')
const config = require('../config')

function redirectToCorrectBlogUrl(req, res, next) {
  const allowedHosts = ['blog.maddevs.co', 'blog.maddevs.io']

  if (allowedHosts.includes(req.headers.host)) {
    const match = config.blogRedirects.find(url => url.from === getRequestUrl(req))

    if (match && Boolean(match.to)) res.redirect(301, match.to)
    else res.redirect(301, 'https://maddevs.io/blog')
  } else {
    next()
  }
}

module.exports = redirectToCorrectBlogUrl
