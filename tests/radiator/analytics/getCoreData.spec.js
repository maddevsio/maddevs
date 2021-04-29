import 'regenerator-runtime'
import getCoreData from '../../../radiator/analytics/getCoreData'
import getAnalytics from '../../../radiator/analytics/getAnalytics'

jest.mock('../../../radiator/analytics/getAnalytics', () => jest.fn())

describe('Radiator > analytics > getCoreData', () => {
  it('should correctly prettify raw data and returns it', async () => {
    getAnalytics.mockImplementation(() => new Promise(res => res({
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
    })))

    const data = await getCoreData()

    expect(getAnalytics).toHaveBeenCalledTimes(1)
    expect(data).toEqual({
      bounceRate: {
        difference: '+100',
        rate: 'bad',
        previous: 15,
        value: 30,
      },
      duration: {
        difference: '+100',
        rate: 'good',
        previous: '20s',
        value: '40s',
      },
      sessions: {
        difference: '+100',
        rate: 'good',
        previous: 10,
        value: 20,
      },
      users: {
        difference: '+100',
        rate: 'good',
        previous: 5,
        value: 10,
      },
    })
  })

  it('should correctly prettify raw data and returns it with another data', async () => {
    getAnalytics.mockImplementation(() => new Promise(res => res({
      reports: [
        {
          data: {
            totals: [
              {
                values: [5, 10, 15, 20],
              },
              {
                values: [10, 20, 30, 40],
              },
            ],
          },
        },
      ],
    })))

    const data = await getCoreData()

    expect(data).toEqual({
      bounceRate: {
        difference: -50,
        rate: 'good',
        previous: 30,
        value: 15,
      },
      duration: {
        difference: -50,
        rate: 'bad',
        previous: '40s',
        value: '20s',
      },
      sessions: {
        difference: -50,
        rate: 'bad',
        previous: 20,
        value: 10,
      },
      users: {
        difference: -50,
        rate: 'bad',
        previous: 10,
        value: 5,
      },
    })
  })
})
