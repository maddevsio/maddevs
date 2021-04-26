import 'regenerator-runtime'
import getDevicesData from '../../../radiator/analytics/getDevicesData'
import getAnalytics from '../../../radiator/analytics/getAnalytics'

jest.mock('../../../radiator/analytics/getAnalytics', () => jest.fn())

describe('Radiator > analytics > getDevicesData', () => {
  it('should correctly prettify raw data and returns it', async () => {
    getAnalytics.mockImplementation(() => new Promise(res => res({
      reports: [
        {
          data: {
            totals: [
              {
                values: [50],
              },
              {
                values: [40],
              },
            ],
            rows: [
              {
                dimensions: ['desktop'],
                metrics: [
                  {
                    values: [65],
                  },
                  {
                    values: [50],
                  },
                ],
              },
              {
                dimensions: ['mobile'],
                metrics: [
                  {
                    values: [30],
                  },
                  {
                    values: [40],
                  },
                ],
              },
              {
                dimensions: ['tablet'],
                metrics: [
                  {
                    values: [5],
                  },
                  {
                    values: [10],
                  },
                ],
              },
            ],
          },
        },
      ],
    })))

    const data = await getDevicesData()

    expect(getAnalytics).toHaveBeenCalledTimes(1)
    expect(data).toEqual({
      desktop: {
        isBetter: true,
        previous: 125,
        title: 'desktop',
        value: 130,
      },
      mobile: {
        isBetter: false,
        previous: 100,
        title: 'mobile',
        value: 60,
      },
      tablet: {
        isBetter: false,
        previous: 25,
        title: 'tablet',
        value: 10,
      },
    })
  })

  it('should correctly prettify raw data without tablet info', async () => {
    getAnalytics.mockImplementation(() => new Promise(res => res({
      reports: [
        {
          data: {
            totals: [
              {
                values: [50],
              },
              {
                values: [40],
              },
            ],
            rows: [
              {
                dimensions: ['desktop'],
                metrics: [
                  {
                    values: [65],
                  },
                  {
                    values: [50],
                  },
                ],
              },
              {
                dimensions: ['mobile'],
                metrics: [
                  {
                    values: [30],
                  },
                  {
                    values: [40],
                  },
                ],
              },
            ],
          },
        },
      ],
    })))

    const data = await getDevicesData()

    expect(data).toEqual({
      desktop: {
        isBetter: true,
        previous: 125,
        title: 'desktop',
        value: 130,
      },
      mobile: {
        isBetter: false,
        previous: 100,
        title: 'mobile',
        value: 60,
      },
      tablet: {
        previous: 0,
        title: 'tablet',
        value: 0,
      },
    })
  })
})
