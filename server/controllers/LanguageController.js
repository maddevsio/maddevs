function switchLanguage(_, res) {
  res.redirect(301, 'https://maddevs.io/')
}

module.exports = {
  switchLanguage,
}
