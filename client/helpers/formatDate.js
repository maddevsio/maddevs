const options = { year: 'numeric', month: 'short', day: '2-digit' }

function formatDate(raw) {
  if (typeof raw !== 'string') return 'Invalid Date'

  const date = new Date(raw)

  if (date === 'Invalid Date') return 'Invalid Date'

  return date.toLocaleString('en-US', options)
}

export default formatDate
