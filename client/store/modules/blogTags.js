/* eslint-disable no-shadow */
import { getPostsByTag } from '@/api/blogTags'
import convertStringToSlug from '@/helpers/convertStringToSlug'

export const state = () => ({
  tag: '',
  tagPosts: [],
  tagPostsLoaded: false,
  tagPostsPage: 1,
})

export const mutations = {
  SET_TAG(state, tag) {
    state.tag = tag
  },
  SET_TAG_POSTS(state, posts) {
    state.tagPosts = posts
  },
  SET_TAG_POSTS_LOADED(state, value) {
    state.tagPostsLoaded = value
  },
  SET_TAG_POSTS_PAGE(state, page) {
    state.tagPostsPage = page
  },
}

export const actions = {
  getBlogTag({ commit }, payload) {
    const response = this.$prismic.api.tags.find(tag => convertStringToSlug(tag) === payload)
    commit('SET_TAG', response)
  },
  async getTagPosts({ commit }, payload) {
    commit('SET_TAG_POSTS_LOADED', false)
    commit('SET_TAG_POSTS', [])

    const posts = await getPostsByTag(this.$prismic, payload)

    commit('SET_TAG_POSTS', posts)
    commit('SET_TAG_POSTS_LOADED', true)
  },
  getMoreTagPosts({ commit, state }) {
    commit('SET_TAG_POSTS_PAGE', state.tagPostsPage + 1)
  },
}

export const getters = {
  blogTag(state) {
    return state.tag
  },
  tagPosts(state) {
    return state.tagPosts
  },
  tagPostsCount(state) {
    return state.tagPosts.length
  },
  tagPostsLoaded(state) {
    return state.tagPostsLoaded
  },
  tagPostsPage(state) {
    return state.tagPostsPage
  },
}
