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

  const axios = {
    post: success,
  }

  const axiosFailure = {
    post: failure,
  }

  it('getCareersHome success', async () => {
    const data = await api.getCareersHome(prismic)
    expect(data).toBe('data')
    expect(prismic.api.getSingle).toHaveBeenCalledWith('careers_home')
  })

  it('getCareersHome failure', async () => {
    const data = await api.getCareersHome(prismicFailure)
    expect(data).toBe(error)
  })

  it('getVacancyPosts success', async () => {
    const data = await api.getVacancyPosts(prismic)
    expect(data).toBe('results')
  })

  it('getVacancyPosts failure', async () => {
    const data = await api.getVacancyPosts(prismicFailure)
    expect(data).toBe(error)
  })

  it('getVacancyPost success', async () => {
    const data = await api.getVacancyPost(prismic, 1)
    expect(data).toEqual({ data: 'data', results: 'results' })
  })

  it('getVacancyPost failure', async () => {
    const data = await api.getVacancyPost(prismicFailure)
    expect(data).toBe(error)
  })

  it('sendVacancy success', async () => {
    const payload = 'payload'
    const data = await api.sendVacancy(axios, payload)
    expect(data).toEqual({ data: 'data', results: 'results' })
  })

  it('sendVacancy failure', async () => {
    const payload = 'payload'
    const data = await api.sendVacancy(axiosFailure, payload)
    expect(data).toBe(error)
  })
})
