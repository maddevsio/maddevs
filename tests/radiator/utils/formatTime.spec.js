import formatTime from '../../../radiator/utils/formatTime'

describe('formatTime utility', () => {
  it('should correctly return if argument is less than 60', () => {
    expect(formatTime(30)).toBe('30s')
  })

  it('should correctly return if argument is more than 60', () => {
    expect(formatTime(90)).toBe('1m 30s')
  })
})
