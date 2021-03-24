import extractFileExtension from '@/helpers/extractFileExtension'

describe('extractFileExtension helper', () => {
  it('should return the correct string with the extension of the image from prismic', () => {
    const url =
      'https://images.prismic.io/superpupertest/614c9f98-ac56-4aa4-8f78-afbeb5d8bbac_Frame+1938.jpg?auto=compress,format'
    const extension = extractFileExtension(url)
    expect(extension).toBe('jpg')
  })

  it('should return the correct string with the extension from string with the filename', () => {
    const fileName = 'test_filename.vue'
    const extension = extractFileExtension(fileName)
    expect(extension).toBe('vue')
  })

  it('should return null for param, that is not a string', () => {
    const notString = 23
    const extension = extractFileExtension(notString)
    expect(extension).toBeNull()
  })
})
