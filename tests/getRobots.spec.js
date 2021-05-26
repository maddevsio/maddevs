import getRobots from '../utils/getRobots'

describe('getRobots util', () => {
  it('if env not "staging" will return { UserAgent: "*", Sitemap: "https://maddevs.io/sitemap.xml" }', () => {
    const result = { UserAgent: '*', Sitemap: 'https://maddevs.io/sitemap.xml' }
    expect(getRobots()).toEqual(result)
    expect(getRobots('')).toEqual(result)
    expect(getRobots('development')).toEqual(result)
    expect(getRobots('production')).toEqual(result)
  })

  it('if env equal "staging" will return { UserAgent: "*", Disallow: "/" }', () => {
    const result = { UserAgent: '*', Disallow: '/' }
    expect(getRobots('staging')).toEqual(result)
  })
})
