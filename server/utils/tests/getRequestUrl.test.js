import getRequestUrl from '../getRequestUrl'

describe('getRequestUrl', () => {
  it('should return url without trailing slash', () => {
    const url = 'https://someurl.com/'
    const req = { url }
    expect(getRequestUrl(req)).toBe(url.slice(0, url.length - 1))
  })

  it('should return url with no changes', () => {
    const url = 'https://someurl.com'
    const req = { url }
    expect(getRequestUrl(req)).toBe(url)
  })
})
