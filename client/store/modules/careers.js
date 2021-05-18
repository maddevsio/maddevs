/* eslint-disable no-shadow */
import {
  getCareersHome, getVacancyPosts, getVacancyPost, sendVacancy,
} from '@/api/careers'
import formatDate from '@/helpers/formatDate'
import extractSchemaOrg from '@/helpers/extractSchemaOrg'

const extractVacancyData = post => ({
  type: post.type,
  id: post.id,
  uid: post.uid,
  position: post.data.position,
  title: post.data.title,
  subtitle: post.data.subtitle,
  labels: {
    remote: post.data.remote_label,
    relocation: post.data.relocation_label,
  },
  tags: post.tags,
  slices: post.data.body,
  metaTitle: post.data.meta_title,
  metaDescription: post.data.meta_description,
  date: formatDate(post.data.date),
  schemaOrgSnippet: extractSchemaOrg(post.data.schema_org_snippets),
})

export const state = () => ({
  vacancy: {},
  vacancyCategories: [],
  vacanciesCategory: null,
  vacancies: [],
  vacanciesLoaded: false,
  vacanciesPage: 1,
})

export const mutations = {
  SET_VACANCY(state, post = {}) {
    state.vacancy = extractVacancyData(post)
  },

  SET_VACANCIES(state, posts = []) {
    state.vacancies = posts.map(post => extractVacancyData(post))
  },

  SET_VACANCY_CATEGORIES(state, categories = []) {
    const vacancyCategories = categories.map(category => ({
      title: category.category_title,
      tags: category.tags.length ? category.tags.split(/, */g) : [],
    }))
    state.vacancyCategories = vacancyCategories
  },

  SET_VACANCIES_CATEGORY(state, category = null) {
    state.vacanciesCategory = category
  },

  SET_VACANCIES_LOADED(state, value = false) {
    state.vacanciesLoaded = value
  },

  SET_VACANCIES_PAGE(state, page = 1) {
    state.vacanciesPage = page
  },
}

export const actions = {
  async getCareersHome({ commit, dispatch }) {
    const careersContent = await getCareersHome(this.$prismic)
    commit('SET_VACANCY_CATEGORIES', careersContent.vacancy_categories)
    await dispatch('getVacancies')
  },

  async getVacancy({ commit }, payload) {
    const post = await getVacancyPost(this.$prismic, payload)
    commit('SET_VACANCY', post)
  },

  async getVacancies({ commit }) {
    const posts = await getVacancyPosts(this.$prismic)
    commit('SET_VACANCIES', posts)
    commit('SET_VACANCIES_LOADED', true)
  },

  async sendVacancy(_, payload) {
    await sendVacancy(this.$axios, payload)
  },

  changeVacanciesCategory({ commit }, category) {
    commit('SET_VACANCIES_PAGE', 1)
    commit('SET_VACANCIES_CATEGORY', category)
  },

  getMoreVacancies({ commit, state }) {
    commit('SET_VACANCIES_PAGE', state.vacanciesPage + 1)
  },
}

export const getters = {
  vacancy(state) {
    return state.vacancy
  },

  vacancyCategories(state) {
    return state.vacancyCategories.filter(category => category.tags.some(tag => state.vacancies.some(vacancy => vacancy.tags.includes(tag))))
  },

  vacanciesCategory(state) {
    return state.vacanciesCategory
  },

  vacancies(state) {
    return state.vacancies
  },

  filteredVacancies(state) {
    if (state.vacanciesCategory) {
      const currentCategory = state.vacancyCategories.find(category => category.title === state.vacanciesCategory)
      const currentTags = [...currentCategory.tags, currentCategory.title]
      return state.vacancies.filter(vacancy => vacancy.tags.some(tag => currentTags.includes(tag)))
    }
    return []
  },

  vacanciesLoaded(state) {
    return state.vacanciesLoaded
  },

  vacanciesPage(state) {
    return state.vacanciesPage
  },
}
