function formatDate(raw) {
  if (!Intl) return raw
  return Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(
    new Date(raw),
  )
}

export default formatDate
