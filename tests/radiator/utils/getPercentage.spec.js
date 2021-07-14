import getPercentage from '../../../server/radiator/utils/getPercentage'

describe('getPercentage utility', () => {
  it('should return 0 if no first or last argument', () => {
    expect(getPercentage()).toBe(0)
    expect(getPercentage(1)).toBe(0)
  })

  it('should correctly return percentage between two numbers with diff', () => {
    expect(getPercentage(500, 250)).toBe(100)
  })

  it('should correctly return percentage between two numbers without diff', () => {
    expect(getPercentage(500, 250, false)).toBe(200)
  })
})
