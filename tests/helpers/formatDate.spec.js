import formatDate from '@/helpers/formatDate'

const newDateFormat = 'Apr 28, 2021'

describe('formatDate helper', () => {
  it('function should return new date format', () => {
    expect(formatDate('2021-04-28')).toEqual(newDateFormat)
  })

  it('function should return invalid date if called without params', () => {
    expect(formatDate()).toEqual('Invalid Date')
  })
})
