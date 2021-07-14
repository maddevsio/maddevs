import toISO from '../../../server/radiator/utils/countryISO/toISO'

describe('toISO utility', () => {
  it('should correctly return code', () => {
    const code = toISO('Russia')
    expect(code).toBe('RU')
  })

  it('should correctly return null if country is not in list', () => {
    const code = toISO('BadCountry')
    expect(code).toBeNull()
  })
})
