import 'regenerator-runtime'
import getGoalsData from '../../../server/radiator/analytics/getGoalsData'
import getAnalytics from '../../../server/radiator/analytics/getAnalytics'

jest.mock('../../../radiator/analytics/getAnalytics', () => jest.fn())

describe('Radiator > analytics > getGoalsData', () => {
  it('should correctly prettify raw data and returns it', async () => {
    getAnalytics.mockImplementation(() => new Promise(res => res({
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
    })))
    const data = await getGoalsData()

    expect(getAnalytics).toHaveBeenCalledTimes(3)
    expect(data).toEqual({
      leads: {
        rate: 'good',
        previous: 7,
        value: 8,
      },
      career: {
        rate: 'good',
        previous: 7,
        value: 8,
      },
      contacts: {
        rate: 'good',
        previous: 7,
        value: 8,
      },
    })
  })

  it('should correctly prettify raw data and returns it with bad rate', async () => {
    getAnalytics.mockImplementation(() => new Promise(res => res({
      reports: [
        {
          data: {
            totals: [
              {
                values: [0, 0, 0, 3, 2, 0, 1, 0, 2],
              },
              {
                values: [2, 0, 0, 4, 0, 1, 0, 0, 3],
              },
            ],
          },
        },
      ],
    })))
    const data = await getGoalsData()

    expect(data).toEqual({
      leads: {
        rate: 'bad',
        previous: 10,
        value: 8,
      },
      career: {
        rate: 'bad',
        previous: 10,
        value: 8,
      },
      contacts: {
        rate: 'bad',
        previous: 10,
        value: 8,
      },
    })
  })
})
