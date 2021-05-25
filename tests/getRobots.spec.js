import getRobots from '../utils/getRobots'

describe('getRobots util', () => {
  it('if env not "staging" will return { UserAgent: "*" }', () => {
    const result = { UserAgent: '*' }
    expect(getRobots()).toEqual(result)
    expect(getRobots('develop')).toEqual(result)
    expect(getRobots('production')).toEqual(result)
  })

  it('if env equal "staging" will return { UserAgent: "*", Disallow: "/" }', () => {
    const result = { UserAgent: '*', Disallow: '/' }
    expect(getRobots('staging')).toEqual(result)
  })
})
