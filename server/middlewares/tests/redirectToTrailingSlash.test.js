import redirectToTrailingSlash from '../redirectToTrailingSlash'

describe('redirectToTrailingSlash', () => {
  const req = {
    method: 'GET',
    url: '/123',
    headers: {
      host: 'maddevs.io',
    },
  }

  const res = {
    redirect: jest.fn(),
  }

  const next = jest.fn()

  it('without trailing slash', () => {
    redirectToTrailingSlash(req, res, next)
    expect(res.redirect).toHaveBeenCalledWith(`https://${req.headers.host}${req.url}/`)
  })

  it('wtih trailing slash', () => {
    req.url = `${req.url}/`
    redirectToTrailingSlash(req, res, next)
    expect(next).toHaveBeenCalledTimes(1)
  })
})
