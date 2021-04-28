import 'regenerator-runtime'
import getAnalyticsData from '../../radiator/analytics'
import getLighthouseData from '../../radiator/lighthouse'
import sendMessageToSlack from '../../radiator/slack'
import getYesterday from '../../radiator/utils/getYesterday'
import main from '../../radiator/main'

jest.mock('../../radiator/analytics', () => jest.fn(() => new Promise(res => res('analytics'))))
jest.mock('../../radiator/lighthouse', () => jest.fn(() => new Promise(res => res('lighthouse'))))
jest.mock('../../radiator/slack', () => jest.fn(() => new Promise(res => res())))
jest.mock('../../radiator/utils/getYesterday', () => jest.fn(() => '25-04-2021'))

describe('Radiator > main', () => {
  it('should correctly called data functions, build message and send it', async () => {
    await main()

    expect(getAnalyticsData).toHaveBeenCalledTimes(1)
    expect(getLighthouseData).toHaveBeenCalledTimes(1)
    expect(getYesterday).toHaveBeenCalledTimes(1)
    expect(sendMessageToSlack).toHaveBeenCalledWith({
      analytics: 'analytics',
      range: '25-04-2021',
      lighthouse: 'lighthouse',
    })
  })
})
