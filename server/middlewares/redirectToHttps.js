function redirectToHttps(req, res, next) {
  if (process.env.NODE_ENV !== 'development') {
    if (req.secure) next()
    else res.redirect(301, `https://${req.headers.host}${req.url}`)
  } else {
    next()
  }
}

module.exports = redirectToHttps
