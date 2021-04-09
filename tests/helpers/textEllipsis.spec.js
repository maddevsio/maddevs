import textEllipsis from '@/helpers/textEllipsis'

const TEXT = 'Some long testing test. Some long testing test.'
const LIMIT = 10

describe('textEllipsis helper', () => {
  it('should return the correct string with the extension of the image from prismic', () => {
    expect(textEllipsis(TEXT, { limit: LIMIT })).toBe('Some long...')
  })
})
