import 'regenerator-runtime'
import * as api from '@/api/careers'

describe('Careers api methods', () => {
  const error = new Error('error')
  const success = jest.fn(() => Promise.resolve({ data: 'data', results: 'results' }))
  const failure = jest.fn(() => Promise.reject(error))

  const prismic = {
    api: {
      getSingle: success,
      query: success,
      getByUID: success,
    },
    predicates: {
      at: jest.fn(),
    },
  }

  const prismicFailure = {
    api: {
      getSingle: failure,
      query: failure,
      getByUID: failure,
    },
    predicates: {
      at: jest.fn(),
    },
  }

  it('getVacancyPost success', async () => {
    const data = await api.getVacancyPost(prismic, 1)
    expect(data).toEqual({ data: 'data', results: 'results' })
  })

  it('getVacancyPost failure', async () => {
    const data = await api.getVacancyPost(prismicFailure)
    expect(data).toBe(error)
  })
})
