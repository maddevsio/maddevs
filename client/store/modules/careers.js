/* eslint-disable no-shadow */
import { getVacancyPost } from '@/api/careers'
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
})

export const mutations = {
  SET_VACANCY(state, post) {
    state.vacancy = extractVacancyData(post)
  },
}

export const actions = {
  async getVacancyPost({ commit }, payload) {
    const post = await getVacancyPost(this.$prismic, payload)
    commit('SET_VACANCY', post)
  },
}

export const getters = {
  vacancy(state) {
    return state.vacancy
  },
}
