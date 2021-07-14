import 'regenerator-runtime'
import axios from 'axios'
import main from '../../../server/radiator/lighthouse'

jest.spyOn(axios, 'get')

describe('Radiator > lighthouse > index', () => {
  it('should correctly get raw data and return prettified data', async () => {
    axios.get.mockImplementation(() => new Promise(res => res({
      data: {
        lighthouseResult: {
          categories: {
            category: {
              id: 'category',
              title: 'Category',
              score: 0.55,
            },
          },
        },
      },
    })))

    const data = await main()

    expect(axios.get).toHaveBeenCalledTimes(1)
    expect(data).toEqual({
      category: {
        title: 'Category',
        value: 55,
        rate: 'neutral',
      },
    })
  })

  it('should correctly get raw data and return prettified data with good rate', async () => {
    axios.get.mockImplementation(() => new Promise(res => res({
      data: {
        lighthouseResult: {
          categories: {
            category: {
              id: 'category',
              title: 'Category',
              score: 0.99,
            },
          },
        },
      },
    })))

    const data = await main()

    expect(data).toEqual({
      category: {
        title: 'Category',
        value: 99,
        rate: 'good',
      },
    })
  })

  it('should correctly get raw data and return prettified data with bad rate', async () => {
    axios.get.mockImplementation(() => new Promise(res => res({
      data: {
        lighthouseResult: {
          categories: {
            category: {
              id: 'category',
              title: 'Category',
              score: 0.30,
            },
          },
        },
      },
    })))

    const data = await main()

    expect(data).toEqual({
      category: {
        title: 'Category',
        value: 30,
        rate: 'bad',
      },
    })
  })
})
