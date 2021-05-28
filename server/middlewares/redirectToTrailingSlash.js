function redirectToTrailingSlash(req, res, next) {
  if (req.url[req.url.length - 1] !== '/'
    && req.method === 'GET'
    && req.url !== '/sitemap.xml'
  ) res.redirect(301, `https://${req.headers.host}${req.url}/`)
  else next()
}

module.exports = redirectToTrailingSlash
