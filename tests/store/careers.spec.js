import 'regenerator-runtime'
import {
  state as defaultState, mutations, actions, getters,
} from '@/store/modules/careers'

import { getVacancyPost } from '@/api/careers'

jest.mock('@/api/careers', () => (
  {
    getCareersHome: jest.fn(() => ({
      vacancy_categories: 'test',
    })),
    getVacancyPost: jest.fn(() => 'test'),
    getVacancyPosts: jest.fn(() => 'test'),
  }
))

actions.$prismic = {
  api: jest.fn(),
}

describe('Careers module state', () => {
  it('should correct returns default state', () => {
    const state = defaultState()
    expect(state.vacancy).toEqual({})
    expect(state.vacancyCategories).toEqual([])
    expect(state.vacanciesCategory).toBeNull()
    expect(state.vacancies).toEqual([])
    expect(state.vacanciesLoaded).toBe(false)
    expect(state.vacanciesPage).toBe(1)
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

  it('should correct mutate state after calling SET_VACANCIES mutation', () => {
    const state = defaultState()

    const data = [mockedVacancy, mockedVacancy]

    mutations.SET_VACANCIES(state, data)

    expect(state).toEqual({
      ...defaultState(),
      vacancies: [extractedVacancy, extractedVacancy],
    })
  })

  it('should correct mutate state after calling SET_VACANCY_CATEGORIES mutation', () => {
    const state = defaultState()

    const categories = [
      {
        category_title: 'Mobile',
        tags: 'Android, iOS',
      },
    ]

    mutations.SET_VACANCY_CATEGORIES(state, categories)

    expect(state).toEqual({
      ...defaultState(),
      vacancyCategories: [
        {
          title: 'Mobile',
          tags: ['Android', 'iOS'],
        },
      ],
    })
  })

  it('should correct mutate state after calling SET_VACANCIES_CATEGORY mutation', () => {
    const state = defaultState()

    const category = 'category'

    mutations.SET_VACANCIES_CATEGORY(state, category)

    expect(state).toEqual({
      ...defaultState(),
      vacanciesCategory: category,
    })
  })

  it('should correct mutate state after calling SET_VACANCIES_LOADED mutation', () => {
    const state = defaultState()

    const value = false

    mutations.SET_VACANCIES_LOADED(state, value)

    expect(state).toEqual({
      ...defaultState(),
      vacanciesLoaded: value,
    })
  })

  it('should correct mutate state after calling SET_VACANCIES_PAGE mutation', () => {
    const state = defaultState()

    const page = 3

    mutations.SET_VACANCIES_PAGE(state, page)

    expect(state).toEqual({
      ...defaultState(),
      vacanciesPage: page,
    })
  })
})

describe('Careers module actions', () => {
  it('should correctly called getCareersHome', async () => {
    const store = {
      state: {
        ...defaultState(),
      },
      commit: jest.fn(),
      dispatch: jest.fn(),
    }

    await actions.getCareersHome(store)

    expect(store.commit).toHaveBeenCalledWith('SET_VACANCY_CATEGORIES', 'test')
    expect(store.dispatch).toHaveBeenCalledWith('getVacancies')
  })

  it('should correctly called getVacancy', async () => {
    const store = {
      commit: jest.fn(),
    }

    await actions.getVacancy(store)

    expect(getVacancyPost).toHaveBeenCalledTimes(1)
    expect(store.commit).toHaveBeenCalledWith('SET_VACANCY', 'test')
  })

  it('should correctly called getVacancies', async () => {
    const store = {
      commit: jest.fn(),
    }

    await actions.getVacancies(store)
    expect(store.commit).toHaveBeenCalledWith('SET_VACANCIES', 'test')
    expect(store.commit).toHaveBeenCalledWith('SET_VACANCIES_LOADED', true)
  })

  it('should correctly called changeVacanciesCategory', () => {
    const store = {
      commit: jest.fn(),
      state: defaultState(),
    }

    const category = 'category'

    actions.changeVacanciesCategory(store, category)
    expect(store.commit).toHaveBeenCalledWith('SET_VACANCIES_PAGE', 1)
    expect(store.commit).toHaveBeenCalledWith('SET_VACANCIES_CATEGORY', category)
  })

  it('should correctly called getMorePosts', () => {
    const store = {
      commit: jest.fn(),
      state: defaultState(),
    }

    actions.getMoreVacancies(store)
    expect(store.commit).toHaveBeenCalledWith('SET_VACANCIES_PAGE', 2)
  })
})

describe('Careers module getters', () => {
  const state = defaultState()

  it('vacancy', () => {
    expect(getters.vacancy(state)).toBe(state.vacancy)
  })

  it('vacancyCategories', () => {
    expect(getters.vacancyCategories(state)).toBe(state.vacancyCategories)
  })

  it('vacanciesCategory', () => {
    expect(getters.vacanciesCategory(state)).toBe(state.vacanciesCategory)
  })

  it('vacancies', () => {
    expect(getters.vacancies(state)).toBe(state.vacancies)
  })

  it('filteredVacancies empty', () => {
    state.vacanciesCategory = null
    expect(getters.filteredVacancies(state)).toEqual([])
  })

  it('filteredVacancies correct', () => {
    state.vacanciesCategory = 'category'
    state.vacancyCategories = [{
      title: 'category',
      tags: ['tag'],
    }]
    state.vacancies = [
      {
        tags: ['tag'],
      },
    ]
    expect(getters.filteredVacancies(state)).toEqual(state.vacancies)
  })

  it('vacanciesLoaded', () => {
    expect(getters.vacanciesLoaded(state)).toBe(state.vacanciesLoaded)
  })

  it('vacanciesPage', () => {
    expect(getters.vacanciesPage(state)).toBe(state.vacanciesPage)
  })
})
