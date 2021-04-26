import 'regenerator-runtime'
import getGoalsData from '../../../radiator/analytics/getGoalsData'
import getAnalytics from '../../../radiator/analytics/getAnalytics'

jest.mock('../../../radiator/analytics/getAnalytics', () => jest.fn(() => new Promise(res => res({
  reports: [
    {
      data: {
        totals: [
          {
            values: [0, 0, 0, 3, 2, 0, 1, 0, 2],
          },
          {
            values: [2, 0, 0, 4, 0, 1, 0, 0, 0],
          },
        ],
      },
    },
  ],
}))))

describe('Radiator > analytics > getGoalsData', () => {
  it('should correctly prettify raw data and returns it', async () => {
    const data = await getGoalsData()

    expect(getAnalytics).toHaveBeenCalledTimes(1)
    expect(data).toEqual({
      career: {
        isBetter: true,
        previous: 0,
        value: 2,
      },
      contact: {
        isBetter: false,
        previous: 7,
        value: 6,
      },
    })
  })
})
