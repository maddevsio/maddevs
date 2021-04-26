import 'regenerator-runtime'
import { google } from 'googleapis'
import getAnalytics from '../../../radiator/analytics/getAnalytics'

jest.mock('googleapis', () => ({
  google: {
    analyticsreporting: jest.fn(() => ({
      reports: {
        batchGet: jest.fn(() => new Promise(res => res({ data: 'data' }))),
      },
    })),
  },
}))

describe('Radiator > analytics > getAnalytics', () => {
  it('shoult correctly called googleAnalytics method and returns data', async () => {
    const data = await getAnalytics()
    expect(data).toBe('data')
    expect(google.analyticsreporting).toHaveBeenCalledTimes(1)
  })
})
