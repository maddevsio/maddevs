import 'regenerator-runtime'
import getCountriesData from '../../../server/radiator/analytics/getCountriesData'
import getAnalytics from '../../../server/radiator/analytics/getAnalytics'

jest.mock('../../../radiator/analytics/getAnalytics', () => jest.fn(() => new Promise(res => res({
  reports: [
    {
      data: {
        totals: [
          {
            values: [200],
          },
        ],
        rows: [
          {
            dimensions: ['United States'],
            metrics: [
              {
                values: [50],
              },
            ],
          },
          {
            dimensions: ['(not set)'],
            metrics: [
              {
                values: [3],
              },
            ],
          },
          {
            dimensions: ['Russia'],
            metrics: [
              {
                values: [30],
              },
            ],
          },
          {
            dimensions: ['France'],
            metrics: [
              {
                values: [10],
              },
            ],
          },
          {
            dimensions: ['India'],
            metrics: [
              {
                values: [5],
              },
            ],
          },
          {
            dimensions: ['Kyrgyzstan'],
            metrics: [
              {
                values: [5],
              },
            ],
          },
        ],
      },
    },
  ],
}))))

describe('Radiator > analytics > getCountriesData', () => {
  it('should correctly prettify raw data and returns it', async () => {
    const data = await getCountriesData()

    expect(getAnalytics).toHaveBeenCalledTimes(1)
    expect(data).toEqual([
      {
        percentage: 25,
        title: 'United States',
        value: 50,
        rate: 'neutral',
      },
      {
        percentage: 15,
        title: 'Russia',
        value: 30,
        rate: 'neutral',
      },
      {
        percentage: 5,
        title: 'France',
        value: 10,
        rate: 'neutral',
      },
    ])
  })
})
