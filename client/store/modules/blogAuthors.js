/* eslint-disable no-shadow */
import { getBlogAuthors, getBlogAuthor, getBlogAuthorPosts } from '@/api/blogAuthors'
import extractAuthorData from '@/helpers/extractAuthorData'

export const state = () => ({
  authors: [],
  author: {},
  authorPosts: [],
  authorPostsLoaded: false,
  authorPostsPage: 1,
})

export const mutations = {
  SET_ALL_AUTHORS(state, authors) {
    state.authors = authors.map(author => extractAuthorData(author))
  },
  SET_AUTHOR(state, author) {
    state.author = extractAuthorData(author)
  },
  SET_AUTHOR_POSTS(state, posts) {
    state.authorPosts = posts
  },
  SET_AUTHOR_POSTS_LOADED(state, value) {
    state.authorPostsLoaded = value
  },
  SET_AUTHOR_POSTS_PAGE(state, page) {
    state.authorPostsPage = page
  },
}

export const actions = {
  async getBlogAuthors({ commit }) {
    const authors = await getBlogAuthors(this.$prismic)
    if (Array.isArray(authors)) commit('SET_ALL_AUTHORS', authors)
  },
  async getBlogAuthor({ commit }, payload) {
    const author = await getBlogAuthor(this.$prismic, payload)
    commit('SET_AUTHOR', author)
  },
  async getBlogAuthorPosts({ commit }, payload) {
    commit('SET_AUTHOR_POSTS_LOADED', false)
    commit('SET_AUTHOR_POSTS', [])
    const posts = await getBlogAuthorPosts(this.$prismic, payload)
    commit('SET_AUTHOR_POSTS', posts)
    commit('SET_AUTHOR_POSTS_LOADED', true)
  },
  getMoreBlogAuthorPosts({ commit, state }) {
    commit('SET_AUTHOR_POSTS_PAGE', state.authorPostsPage + 1)
  },
}

export const getters = {
  blogAuthors(state) {
    return state.authors
  },
  blogAuthor(state) {
    return state.author
  },
  blogAuthorPosts(state) {
    return state.authorPosts
  },
  authorPostsLoaded(state) {
    return state.authorPostsLoaded
  },
  authorPostsPage(state) {
    return state.authorPostsPage
  },
}
