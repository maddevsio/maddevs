import 'regenerator-runtime'
import * as api from '@/api/blog'

describe('Blog api methods', () => {
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

  it('getBlogPageContent success', async () => {
    const data = await api.getBlogPageContent(prismic)
    expect(data).toBe('data')
    expect(prismic.api.getSingle).toHaveBeenCalledWith('blog_home')
  })

  it('getBlogPageContent failure', async () => {
    const data = await api.getBlogPageContent(prismicFailure)
    expect(data).toBe(error)
  })

  it('getBlogPosts success', async () => {
    const data = await api.getBlogPosts(prismic)
    expect(data).toEqual(['results'])
  })

  it('getBlogPosts failure', async () => {
    const data = await api.getBlogPosts(prismicFailure)
    expect(data).toBe(error)
  })

  it('getCustomerUniversityMaster success', async () => {
    const data = await api.getCustomerUniversityMaster(prismic)
    expect(data).toBe('data')
    expect(prismic.api.getSingle).toHaveBeenCalledWith('cu_master')
  })

  it('getCustomerUniversityMaster failure', async () => {
    const data = await api.getCustomerUniversityMaster(prismicFailure)
    expect(data).toBe(error)
  })

  it('getCustomerUniversityFeaturedPost success', async () => {
    const master = {
      featured_cu: {
        uid: 123,
      },
    }
    const data = await api.getCustomerUniversityFeaturedPost(prismic, master)
    expect(data).toBe('data')
    expect(prismic.api.getByUID).toHaveBeenCalledWith('customer_university', master.featured_cu.uid)
  })

  it('getCustomerUniversityFeaturedPost failure', async () => {
    const master = {
      featured_cu: {
        uid: 123,
      },
    }
    const data = await api.getCustomerUniversityFeaturedPost(prismicFailure, master)
    expect(data).toBe(error)
  })
})
