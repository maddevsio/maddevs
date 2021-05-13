import 'regenerator-runtime'
import {
  state as defaultState, mutations, actions, getters,
} from '@/store/modules/careers'

import { getVacancyPost } from '@/api/careers'

jest.mock('@/api/careers', () => (
  {
    getVacancyPost: jest.fn(() => 'test'),
  }
))

actions.$prismic = {
  api: jest.fn(),
}

describe('Careers module state', () => {
  it('should correct returns default state', () => {
    const state = defaultState()
    expect(state.vacancy).toEqual({})
  })
})

describe('Careers module mutations', () => {
  const mockedVacancy = {
    type: 'type',
    id: 'id',
    uid: 'uid',
    tags: [],
    data: {
      body: [],
      date: 'May 12, 2021',
      remote_label: false,
      relocation_label: true,
      position: 'position',
      title: 'title',
      subtitle: 'subtitle',
      meta_title: 'Meta title',
      meta_description: 'Meta description',
      schema_org_snippets: [],
    },
  }

  const extractedVacancy = {
    type: mockedVacancy.type,
    id: mockedVacancy.id,
    uid: mockedVacancy.uid,
    labels: {
      remote: mockedVacancy.data.remote_label,
      relocation: mockedVacancy.data.relocation_label,
    },
    slices: [],
    tags: [],
    date: 'May 12, 2021',
    position: mockedVacancy.data.position,
    title: mockedVacancy.data.title,
    subtitle: mockedVacancy.data.subtitle,
    metaTitle: mockedVacancy.data.meta_title,
    metaDescription: mockedVacancy.data.meta_description,
    schemaOrgSnippet: '',
  }

  it('should correct mutate state after calling SET_VACANCY mutation', () => {
    const state = defaultState()

    mutations.SET_VACANCY(state, mockedVacancy)

    expect(state).toEqual({
      ...defaultState(),
      vacancy: extractedVacancy,
    })
  })
})

describe('Careers module actions', () => {
  it('should correctly called getVacancyPost', async () => {
    const store = {
      commit: jest.fn(),
    }

    await actions.getVacancyPost(store)

    expect(getVacancyPost).toHaveBeenCalledTimes(1)
    expect(store.commit).toHaveBeenCalledWith('SET_VACANCY', 'test')
  })
})

describe('Careers module getters', () => {
  const state = defaultState()

  it('vacancy', () => {
    expect(getters.vacancy(state)).toBe(state.vacancy)
  })
})
