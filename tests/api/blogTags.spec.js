import 'regenerator-runtime'
import * as api from '@/api/blogTags'

const results = [{
  data: {
    post_author: {
      id: '1',
    },
  },
}, {
  data: {
    post_author: {
    },
  },
}]

describe('BlogTags api methods', () => {
  const error = new Error('error')
  const success = jest.fn(() => Promise.resolve({ data: 'data', results }))
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

    expect(data).toHaveLength(1)
    expect(data[0].data?.post_author?.id).toBe('1')
  })

  it('getPostsByTag failure', async () => {
    const payload = 'payload'
    const data = await api.getPostsByTag(prismicFailure, payload)
    expect(data).toBe(error)
  })
})
