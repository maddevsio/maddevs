import 'regenerator-runtime'
import * as api from '@/api/blogAuthors'

describe('BlogAuthors api methods', () => {
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

  it('getBlogAuthors success', async () => {
    const data = await api.getBlogAuthors(prismic)
    expect(data).toBe('results')
    expect(prismic.api.query).toHaveBeenCalledTimes(1)
  })

  it('getBlogAuthors failure', async () => {
    const data = await api.getBlogAuthors(prismicFailure)
    expect(data).toBe(error)
  })

  it('getBlogAuthor success', async () => {
    const data = await api.getBlogAuthor(prismic, 1)
    expect(data).toEqual({ data: 'data', results: 'results' })
  })

  it('getBlogAuthor failure', async () => {
    const data = await api.getBlogAuthor(prismicFailure)
    expect(data).toBe(error)
  })

  it('getBlogAuthorPosts success', async () => {
    const data = await api.getBlogAuthorPosts(prismic)
    expect(data).toEqual(['results'])
    expect(prismic.api.query).toHaveBeenCalledTimes(3)
  })

  it('getBlogAuthorPosts failure', async () => {
    const data = await api.getBlogAuthorPosts(prismicFailure)
    expect(data).toBe(error)
  })
})
