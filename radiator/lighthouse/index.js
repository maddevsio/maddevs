const axios = require('axios')

function buildSearchParams() {
  const searchParams = new URLSearchParams()
  searchParams.append('url', 'https://maddevs.io')
  searchParams.append('key', process.env.NODE_GOOGLEAPIS_KEY)
  searchParams.append('category', 'seo')
  searchParams.append('category', 'accessibility')
  searchParams.append('category', 'best-practices')
  searchParams.append('category', 'performance')
  searchParams.append('category', 'pwa')
  return searchParams.toString()
}

function prettify(rawData) {
  return Object.values(rawData.lighthouseResult.categories).reduce((acc, curr) => {
    let rate = 'neutral'
    if (curr.score * 100 >= 90) rate = 'good'
    if (curr.score * 100 < 50) rate = 'bad'

    return {
      ...acc,
      [curr.id]: {
        title: curr.title,
        value: Math.round(curr.score * 100),
        rate,
      },
    }
  }, {})
}

async function main() {
  const url = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed'
  const searchParams = buildSearchParams()
  const { data: rawData } = await axios.get(`${url}?${searchParams}`)

  return prettify(rawData)
}

module.exports = main
