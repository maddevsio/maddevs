import redirectToHttps from '../redirectToHttps'

describe('redirectToHttps', () => {
  const req = {
    secure: true,
    headers: {
      host: 'maddevs.io',
    },
    url: '/123',
  }

  const res = {
    redirect: jest.fn(),
  }

  const next = jest.fn()

  it('secure', () => {
    redirectToHttps(req, res, next)
    expect(next).toHaveBeenCalledTimes(1)
  })

  it('not secure, redirect', () => {
    req.secure = false
    redirectToHttps(req, res, next)
    expect(res.redirect).toHaveBeenCalledWith(`https://${req.headers.host}${req.url}`)
  })
})
