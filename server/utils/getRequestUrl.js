function getRequestUrl({ url }) {
  if (url.slice(-1) === '/' && url.length > 1) return url.substr(0, url.length - 1)
  return url
}

module.exports = getRequestUrl
