const textEllipsis = (text, { limit, ellipsis = true, trimToSpace = true }) => {
  if (!text || !limit || text.length <= limit) return text

  const trimmedText = text.substr(0, limit)

  if (trimToSpace) return `${text.substr(0, trimmedText.lastIndexOf(' '))}${ellipsis ? '...' : ''}`
  return `${text.substr(0, ellipsis ? limit - 3 : limit)}${ellipsis ? '...' : ''}`
}

export default textEllipsis
