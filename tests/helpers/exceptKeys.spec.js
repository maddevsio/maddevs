import extractFileExtension from '@/helpers/exceptKeys'

const TEST_OBJECT = {
  a: 'au',
  b: 'bu',
  c: 'co',
  e: 'es',
  f: 'fr',
}
const TEST_ARRAY = ['a', 'b', 'c', 'r']

describe('exceptKeys helper', () => {
  it('should return the correct string with the extension of the image from prismic', () => {
    const result = extractFileExtension(TEST_OBJECT, TEST_ARRAY)
    const keys = Object.keys(result)
    expect(keys).toHaveLength(2)
    keys.forEach(key => {
      expect(TEST_ARRAY).not.toContain(key)
    })
  })
})
