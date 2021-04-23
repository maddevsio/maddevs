const getYesterday = () => {
  const date = new Date()
  date.setDate(date.getDate() - 1)
  const [month, day, year] = date.toLocaleDateString().split('/')
  return `${day}/${month}/${year}`
}

module.exports = getYesterday
