import 'regenerator-runtime'
import axios from 'axios'
import getAnalyticsData from '../../radiator/analytics'
import main from '../../radiator'

jest.mock('../../radiator/analytics', () => jest.fn(() => new Promise(res => res({
  core: {
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
  },
  countries: [
    {
      isBetter: true,
      percentage: 25,
      title: 'United States',
      value: 50,
    },
    {
      isBetter: false,
      percentage: 15,
      title: 'Russia',
      value: 30,
    },
    {
      isBetter: true,
      percentage: 5,
      title: 'France',
      value: 10,
    },
  ],
  devices: {
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
  },
  goals: {
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
  },
}))))

jest.spyOn(axios, 'post').mockImplementation(() => new Promise(res => res()))

describe('Radiator > main', () => {
  it('should correctly called data functions, build message and send it', async () => {
    await main()
    expect(axios.post).toHaveBeenCalledTimes(1)
    expect(getAnalyticsData).toHaveBeenCalledTimes(1)
  })
})
