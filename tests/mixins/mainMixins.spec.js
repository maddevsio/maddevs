import mainMixins from '@/mixins/mainMixins'

describe('Main Mixin', () => {
  it('if not pass params will return null', () => {
    expect(mainMixins.methods.createAnchorID()).toBeNull()
  })

  it('if pass param as number will return null', () => {
    expect(mainMixins.methods.createAnchorID(123)).toBeNull()
  })

  it('if pass param as undefined will return null', () => {
    expect(mainMixins.methods.createAnchorID(undefined)).toBeNull()
  })

  it('if pass param as [] will return null', () => {
    expect(mainMixins.methods.createAnchorID([])).toBeNull()
  })

  it('if pass param as object will return null', () => {
    expect(mainMixins.methods.createAnchorID({})).toBeNull()
  })

  it('if pass param as string "How to use nuxt" will return how-to-use-nuxt', () => {
    expect(mainMixins.methods.createAnchorID('How to use nuxt')).toBe('how-to-use-nuxt')
  })

  it('if pass param as string with symbols will return how-to-use-nuxt', () => {
    expect(mainMixins.methods.createAnchorID('@^_How. to"" ]{} $ {use, & nuxt!! #-=//')).toBe('how-to-use-nuxt')
  })

  it('if pass only symbols will return empty string', () => {
    expect(mainMixins.methods.createAnchorID('@^_.;:// |?(`~"" ]{} $ {, &!! #-=//')).toBe('')
  })
})
