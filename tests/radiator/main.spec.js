/* eslint-disable no-console */
import 'regenerator-runtime'
import getAnalyticsData from '../../server/radiator/analytics'
import getLighthouseData from '../../server/radiator/lighthouse'
import sendMessageToSlack from '../../server/radiator/slack'
import sendMessageToTelegram from '../../server/radiator/telegram'
import parseRange from '../../server/radiator/utils/parseRange'
import main from '../../server/radiator/main'

jest.mock('../../radiator/analytics', () => jest.fn(() => new Promise(res => res('analytics'))))
jest.mock('../../radiator/lighthouse', () => jest.fn(() => new Promise(res => res('lighthouse'))))
jest.mock('../../radiator/slack', () => jest.fn(() => new Promise(res => res())))
jest.mock('../../radiator/telegram', () => jest.fn(() => new Promise(res => res())))
jest.mock('../../radiator/utils/parseRange', () => jest.fn(() => '25-04-2021'))

describe('Radiator > main', () => {
  it('should correctly called data functions and called sendMessageToSlack', async () => {
    const config = {
      slack: true,
      telegram: false,
      period: 'week',
    }

    await main(config)

    expect(getAnalyticsData).toHaveBeenCalledTimes(1)
    expect(getLighthouseData).toHaveBeenCalledTimes(1)
    expect(parseRange).toHaveBeenCalledTimes(1)
    expect(sendMessageToSlack).toHaveBeenCalledWith({
      analytics: 'analytics',
      range: '25-04-2021',
      lighthouse: 'lighthouse',
    })
  })

  it('should correctly called data functions and called telegram if', async () => {
    const config = {
      slack: false,
      telegram: true,
      period: 'day',
    }

    await main(config)

    expect(sendMessageToTelegram).toHaveBeenCalledWith({
      analytics: 'analytics',
      range: '25-04-2021',
      lighthouse: 'lighthouse',
    })
  })
})
