import parseRange from '../../../server/radiator/utils/parseRange'

class MockedDate {
  constructor() {
    this.setDate = date => date
    this.getDate = () => 2
    this.toLocaleDateString = () => '4/25/2021'
  }
}

describe('parseRange utility', () => {
  beforeEach(() => {
    global.Date = MockedDate
  })

  it('should correctly return range for day with no arguments', () => {
    expect(parseRange()).toEqual({
      range: 'day',
      originalRange: {
        startDate: '1DaysAgo',
        endDate: '1DaysAgo',
      },
      previousRange: {
        startDate: '2DaysAgo',
        endDate: '2DaysAgo',
      },
      text: '25/4/2021',
    })
  })

  it('should correctly return range for day with day arg', () => {
    expect(parseRange('day')).toEqual({
      range: 'day',
      originalRange: {
        startDate: '1DaysAgo',
        endDate: '1DaysAgo',
      },
      previousRange: {
        startDate: '2DaysAgo',
        endDate: '2DaysAgo',
      },
      text: '25/4/2021',
    })
  })

  it('should correctly return range for week with week arg', () => {
    expect(parseRange('week')).toEqual({
      range: 'week',
      originalRange: {
        startDate: '7DaysAgo',
        endDate: '1DaysAgo',
      },
      previousRange: {
        startDate: '14DaysAgo',
        endDate: '7DaysAgo',
      },
      text: '25/4/2021 - 25/4/2021',
    })
  })

  it('should correctly return range for month with month arg', () => {
    expect(parseRange('month')).toEqual({
      range: 'month',
      originalRange: {
        startDate: '30DaysAgo',
        endDate: '1DaysAgo',
      },
      previousRange: {
        startDate: '60DaysAgo',
        endDate: '30DaysAgo',
      },
      text: '25/4/2021 - 25/4/2021',
    })
  })
})
