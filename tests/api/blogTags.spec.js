import 'regenerator-runtime'
import * as api from '@/api/blogTags'

describe('BlogTags api methods', () => {
  const error = new Error('error')
  const success = jest.fn(() => Promise.resolve({ data: 'data', results: 'results' }))
  const failure = jest.fn(() => Promise.reject(error))

  const prismic = {
    api: {
      query: success,
    },
    predicates: {
      at: jest.fn(),
    },
  }

  const prismicFailure = {
    api: {
      query: failure,
    },
    predicates: {
      at: jest.fn(),
    },
  }

  it('getPostsByTag success', async () => {
    const payload = 'payload'
    const data = await api.getPostsByTag(prismic, payload)

    expect(data).toBe('results')
  })

  it('getPostsByTag failure', async () => {
    const payload = 'payload'
    const data = await api.getPostsByTag(prismicFailure, payload)
    expect(data).toBe(error)
  })
})
