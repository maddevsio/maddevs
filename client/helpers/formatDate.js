const options = { year: 'numeric', month: 'short', day: '2-digit' }

function formatDate(raw) {
  const data = new Date(raw)
  return data.toLocaleString('en-US', options)
}

export default formatDate
