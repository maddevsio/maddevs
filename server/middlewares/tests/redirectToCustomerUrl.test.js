import redirectToCustomerUrl from '../redirectToCustomerUrl'

describe('redirectToCorrectBlogUrl', () => {
  const req = {
    headers: {
      host: '123',
    },
    url: 'https://blog.maddevs.io',
  }

  const res = {
    redirect: jest.fn(),
  }

  const next = jest.fn()

  it('not customer url', () => {
    redirectToCustomerUrl(req, res, next)
    expect(next).toHaveBeenCalledTimes(1)
  })

  it('customer url', () => {
    req.url = '/blog/why-it-projects-are-late-and-exceed-budgets'
    redirectToCustomerUrl(req, res, next)
    expect(res.redirect).toHaveBeenCalledWith(
      301,
      'https://maddevs.io/customer-university/why-it-projects-are-late-and-exceed-budgets/',
    )
  })
})
