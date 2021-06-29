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
    const blogTags = await getBlogTags(this.$prismic)
    commit('SET_TAGS', blogTags)
  },
  async getBlogTag({ commit }, payload) {
    const blogTag = await getBlogTag(this.$prismic, payload)
    commit('SET_TAG', blogTag)
  },
  async getBlogTagPosts({ commit }, payload) {
    commit('SET_TAG_POSTS_LOADED', false)
    commit('SET_TAG_POSTS', [])

    const posts = await getPostsByTag(this.$prismic, payload)

    commit('SET_TAG_POSTS', posts)
    commit('SET_TAG_POSTS_LOADED', true)
  },
  getMoreBlogTagPosts({ commit, state }) {
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
  blogTagPosts(state) {
    return state.tagPosts
  },
  blogTagPostsCount(state) {
    return state.tagPosts.length
  },
  blogTagPostsLoaded(state) {
    return state.tagPostsLoaded
  },
  blogTagPostsPage(state) {
    return state.tagPostsPage
  },
}
