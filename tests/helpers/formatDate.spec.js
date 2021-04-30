import formatDate from '@/helpers/formatDate'

const newDateFormat = 'Apr 28, 2021'

describe('formatDate helper', () => {
  it('function should return new date format', () => {
    expect(formatDate('2021-4-28')).toEqual(newDateFormat)
  })

  it('function should return invalid date if called without params', () => {
    expect(formatDate()).toEqual('Invalid Date')
  })

  it('function should return invalid date if pass null in params', () => {
    expect(formatDate(null)).toEqual('Invalid Date')
  })

  it('function should return invalid date if pass undefined in params', () => {
    expect(formatDate(undefined)).toEqual('Invalid Date')
  })

  it('function should return invalid date if pass empty string in params', () => {
    expect(formatDate('')).toEqual('Invalid Date')
  })

  it('function should return invalid date if pass number in params', () => {
    expect(formatDate(1)).toEqual('Invalid Date')
  })

  it('function should return invalid date if pass object in params', () => {
    expect(formatDate({})).toEqual('Invalid Date')
  })

  it('function should return invalid date if pass array in params', () => {
    expect(formatDate([])).toEqual('Invalid Date')
  })
})
