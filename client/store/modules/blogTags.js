/* eslint-disable no-shadow */
import { getBlogTags, getBlogTag, getPostsByTag } from '@/api/blogTags'

export const state = () => ({
  tags: [],
  tag: '',
  tagPosts: [],
  tagPostsLoaded: false,
  tagPostsPage: 1,
})

export const mutations = {
  SET_TAGS(state, tags) {
    state.tags = tags
  },
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
  async getBlogTags({ commit }) {
    const tags = await getBlogTags(this.$prismic)
    commit('SET_TAGS', tags)
  },
  async getBlogTag({ commit }, payload) {
    const tag = await getBlogTag(this.$prismic, payload)
    commit('SET_TAG', tag)
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
  blogTags(state) {
    return state.tags
  },
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
