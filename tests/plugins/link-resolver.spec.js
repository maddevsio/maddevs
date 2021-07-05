import linkResolver from '@/plugins/link-resolver'

describe('link resolver function', () => {
  it('should return not-found is broken', () => {
    const RESULT = '/not-found/'
    const DOC = {
      isBroken: true,
    }

    expect(linkResolver(DOC)).toBe(RESULT)
  })

  it('should return root path if type is blog home', () => {
    const RESULT = '/'
    const DOC = {
      isBroken: false,
      type: 'blog_home',
    }

    expect(linkResolver(DOC)).toBe(RESULT)
  })

  it('should return blog path if type post', () => {
    const RESULT = '/blog/'
    const DOC = {
      isBroken: false,
      type: 'post',
      uid: '1',
    }

    expect(linkResolver(DOC)).toBe(`${RESULT}${DOC.uid}/`)
  })

  it('should return author blog path if type author', () => {
    const RESULT = '/blog/author/'
    const DOC = {
      isBroken: false,
      type: 'author',
      uid: '1',
    }

    expect(linkResolver(DOC)).toBe(`${RESULT}${DOC.uid}/`)
  })

  it('should return blog tag if type tag', () => {
    const RESULT = '/blog/tag/'
    const DOC = {
      isBroken: false,
      type: 'tag',
      uid: '1',
    }

    expect(linkResolver(DOC)).toBe(`${RESULT}${DOC.uid}/`)
  })

  it('should return not-found if incorrect type', () => {
    const RESULT = '/not-found/'
    const DOC = {
      isBroken: false,
      type: 'error-type',
    }

    expect(linkResolver(DOC)).toBe(RESULT)
  })

  it('should return /not-found/ if doc not valid', () => {
    const RESULT = '/not-found/'
    expect(linkResolver(null)).toBe(RESULT)
    expect(linkResolver(undefined)).toBe(RESULT)
    expect(linkResolver({})).toBe(RESULT)
  })
})
