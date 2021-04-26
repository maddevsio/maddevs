import 'regenerator-runtime'
import getCoreData from '../../../radiator/analytics/getCoreData'
import getAnalytics from '../../../radiator/analytics/getAnalytics'

jest.mock('../../../radiator/analytics/getAnalytics', () => jest.fn(() => new Promise(res => res({
  reports: [
    {
      data: {
        totals: [
          {
            values: [10, 20, 30, 40],
          },
          {
            values: [5, 10, 15, 20],
          },
        ],
      },
    },
  ],
}))))

describe('Radiator > analytics > getCoreData', () => {
  it('should correctly prettify raw data and returns it', async () => {
    const data = await getCoreData()

    expect(getAnalytics).toHaveBeenCalledTimes(1)
    expect(data).toEqual({
      bounceRate: {
        difference: 100,
        isBetter: false,
        previous: 15,
        value: 30,
      },
      duration: {
        difference: 100,
        isBetter: true,
        previous: '20s',
        value: '40s',
      },
      sessions: {
        difference: 100,
        isBetter: true,
        previous: 10,
        value: 20,
      },
      users: {
        difference: 100,
        isBetter: true,
        previous: 5,
        value: 10,
      },
    })
  })
})
