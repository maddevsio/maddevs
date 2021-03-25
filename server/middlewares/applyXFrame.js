function applyXFrame(_, res, next) {
  res.set('X-Frame-Options', 'DENY')
  next()
}

module.exports = applyXFrame
