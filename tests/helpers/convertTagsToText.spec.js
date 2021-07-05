import convertTagsToText from '@/helpers/convertTagsToText'

describe('convertTagsToText helper', () => {
  it('should convert tags', () => {
    const text = 'Test <strong>convert</strong>'
    const expectedText = 'Test &lt;strong&gt;convert&lt;/strong&gt;'
    expect(convertTagsToText(text)).toBe(expectedText)
  })

  it('invalid param should return empty string', () => {
    expect(convertTagsToText(123)).toBe('')
  })

  it('should exclude tags', () => {
    const text = 'Should convert the <em>em</em> tag and exclude the <br /> tag'
    const expectedText = 'Should convert the &lt;em&gt;em&lt;/em&gt; tag and exclude the <br /> tag'
    expect(convertTagsToText(text, ['br'])).toBe(expectedText)
  })

  it('invalid exclude param should not working', () => {
    const text = 'Test <strong>convert</strong>'
    const expectedText = 'Test &lt;strong&gt;convert&lt;/strong&gt;'
    expect(convertTagsToText(text, {})).toBe(expectedText)
  })
})
