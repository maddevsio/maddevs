import textEllipsis from '@/helpers/textEllipsis'

const TEXT = 'Some long testing test. Some long testing test.'
const LIMIT = 10

describe('textEllipsis helper', () => {
  it('should correct adding ellipsis', () => {
    expect(textEllipsis(TEXT, { limit: LIMIT })).toBe('Some long...')
  })
})
