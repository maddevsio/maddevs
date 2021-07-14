import fromISO from '../../../server/radiator/utils/countryISO/fromISO'

describe('fromISO utility', () => {
  it('should correctly return country', () => {
    const code = fromISO('ru')
    expect(code).toBe('Russia')
  })

  it('should correctly return null if country is not in list', () => {
    const code = fromISO('bad')
    expect(code).toBeNull()
  })

  it('should correctly return null if no country argument', () => {
    const code = fromISO()
    expect(code).toBeNull()
  })
})
