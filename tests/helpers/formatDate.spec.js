import formatDate from '@/helpers/formatDate'

const newDateFormat = 'Apr 28, 2021'

describe('formatDate helper', () => {
  it('Function should return new date format', () => {
    expect(formatDate('2021-04-28')).toEqual(newDateFormat)
  })
})
