import convertTagsToText from '@/helpers/convertTagsToText'

describe('convertTagsToText helper', () => {
  it('should convert tags', () => {
    const text = 'Test <strong>convert</strong>'
    const expectedText = 'Test &lt;strong&gt;convert&lt;/strong&gt;'
    expect(convertTagsToText(text)).toBe(expectedText)
  })

  it('should exclude tags', () => {
    const text = 'Should convert the <em>em</em> tag and exclude the <br /> tag'
    const expectedText = 'Should convert the &lt;em&gt;em&lt;/em&gt; tag and exclude the <br /> tag'
    expect(convertTagsToText(text, ['br'])).toBe(expectedText)
  })
})
