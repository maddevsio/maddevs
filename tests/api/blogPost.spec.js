import 'regenerator-runtime'
import * as api from '@/api/blogPost'

describe('BlogPost api methods', () => {
  const error = new Error('error')
  const success = jest.fn(() => Promise.resolve({ data: 'data', results: 'results' }))
  const failure = jest.fn(() => Promise.reject(error))

  const prismic = {
    api: {
      getSingle: jest.fn(() => Promise.resolve({ data: { body: 123 } })),
      query: success,
      getByUID: jest.fn(() => Promise.resolve({ tags: [1, 2, 3] })),
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

  it('getBlogPost success with tags', async () => {
    const payload = {
      type: 'type',
      uid: 123,
    }

    const data = await api.getBlogPost(prismic, payload)
    expect(data).toEqual({ recommendedPosts: 'results', tags: [1, 2, 3] })
    expect(prismic.api.query).toHaveBeenCalledTimes(1)
    expect(prismic.api.getByUID).toHaveBeenCalledTimes(1)
  })

  it('getBlogPost success without tags', async () => {
    const payload = {
      type: 'type',
      uid: 123,
    }

    jest.spyOn(prismic.api, 'getByUID').mockImplementation(() => Promise.resolve({ tags: null }))

    const data = await api.getBlogPost(prismic, payload)
    expect(data).toEqual({ tags: null })
    expect(prismic.api.query).toHaveBeenCalledTimes(1)
    expect(prismic.api.getByUID).toHaveBeenCalledTimes(2)
  })

  it('getBlogPost failure', async () => {
    const payload = {
      type: 'type',
      uid: 123,
    }

    const data = await api.getBlogPost(prismicFailure, payload)
    expect(data).toEqual(error)
  })

  it('getClusterData success', async () => {
    const data = await api.getClusterData(prismic)
    expect(data).toBe(123)
  })

  it('getClusterData failure', async () => {
    const data = await api.getClusterData(prismicFailure)
    expect(data).toBe(error)
  })
})
