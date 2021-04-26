import getColor from '../../../radiator/utils/getColor'

describe('getColor utility', () => {
  it('should correctly return neutral color if there are no argument', () => {
    expect(getColor()).toBe('#e0e0e0')
  })

  it('should correctly return bad color if isBetter=false', () => {
    expect(getColor(false)).toBe('#e53935')
  })

  it('should correctly return good color if isBetter=true', () => {
    expect(getColor(true)).toBe('#43a047')
  })
})
