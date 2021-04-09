import getFirstParagraph from '@/helpers/getFirstParagraph'
import postDataArray from '../__mocks__/postDataArray'

const LIMIT = 100

describe('getFirstParagraph helper', () => {
  it('should return the correct string with the extension of the image from prismic', () => {
    const paragraph = getFirstParagraph(postDataArray, LIMIT)

    expect(paragraph).toBe(`${postDataArray[0].primary.text[0].text.slice(0, LIMIT - 1)}...`)
  })
})
