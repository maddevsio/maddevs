import redirectToCorrectPostUrl from '../redirectToCorrectPostUrl'

describe('redirectToCorrectPostUrl middleware', () => {
  let req = null
  let res = null
  let next = null

  beforeEach(() => {
    req = {
      path: '',
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

  it('should correctly called redirect to correct post url if req.path contains author and postUid', () => {
    req.path = '/blog/author/denis/post-custom-slug'

    redirectToCorrectPostUrl(req, res, next)

    expect(res.redirect).toHaveBeenCalledWith(301, '/blog/post-custom-slug')
    expect(next).not.toHaveBeenCalled()
  })

  it('should correctly called redirect to correct post url if req.path contains tag and postUid', () => {
    req.path = '/blog/tag/frontend/post-custom-slug'

    redirectToCorrectPostUrl(req, res, next)

    expect(res.redirect).toHaveBeenCalledWith(301, '/blog/post-custom-slug')
    expect(next).not.toHaveBeenCalled()
  })

  it('should correctly called next if req.path doesn`t contains author or tag or postUid', () => {
    req.path = '/blog/author/denis'

    redirectToCorrectPostUrl(req, res, next)

    expect(res.redirect).not.toHaveBeenCalled()
    expect(next).toHaveBeenCalledTimes(1)
  })
})
