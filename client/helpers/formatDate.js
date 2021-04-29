const options = { year: 'numeric', month: 'short', day: '2-digit' }

function formatDate(raw) {
  const date = new Date(raw)
  return date.toLocaleString('en-US', options)
}

export default formatDate
