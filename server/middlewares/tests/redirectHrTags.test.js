import redirectHrTags from '../redirectHrTags'

describe('redirectHrTags', () => {
  let req = null
  let res = null
  let next = null

  beforeEach(() => {
    req = {
      headers: {
        host: 'maddevs.io',
      },
      url: '/',
    }

    res = {
      redirect: jest.fn(),
    }

    next = jest.fn()
  })

  afterEach(() => {
    req = null
    res = null
    next = null
  })

  it('if path "/blog/tag/copywriter" has in ignore list > will be redirect to careers page', () => {
    req.headers.host = 'maddevs.io'
    req.url = '/blog/tag/copywriter'
    redirectHrTags(req, res, next)
    expect(res.redirect).toHaveBeenCalledWith(301, 'https://maddevs.io/careers/#open-positions')
  })

  it('if path "/blog/tag/ui" does not exist in ignore list > redirect not call', () => {
    req.headers.host = 'maddevs.io'
    req.url = '/blog/tag/ui'
    redirectHrTags(req, res, next)
    expect(res.redirect).not.toHaveBeenCalled()
    expect(next).toHaveBeenCalledTimes(1)
  })
})
