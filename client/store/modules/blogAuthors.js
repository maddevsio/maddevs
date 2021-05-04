/* eslint-disable no-shadow */
import { getBlogAuthors, getBlogAuthor, getAuthorPosts } from '@/api/blogAuthors'
import extractSchemaOrg from '@/helpers/extractSchemaOrg'

const extractAuthorData = author => {
  const socialNetworks = author.data.social_networks
    .filter(item => item.network && item.link.url)
    .map(item => ({
      key: item.network.toLowerCase(),
      title: item.network,
      link: item.link,
    }))

  return {
    type: author.type,
    id: author.id,
    uid: author.uid,
    name: author.data.name,
    position: author.data.position,
    thumbnailImage: author.data.thumbnail_image,
    image: author.data.image,
    metaTitle: author.data.meta_title,
    metaDescription: author.data.meta_description,
    schemaOrgSnippet: extractSchemaOrg(author.data.schema_org_snippets),
    socialNetworks,
  }
}

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
  async getAuthorPosts({ commit }, payload) {
    commit('SET_AUTHOR_POSTS_LOADED', false)
    commit('SET_AUTHOR_POSTS', [])
    const posts = await getAuthorPosts(this.$prismic, payload)
    commit('SET_AUTHOR_POSTS', posts)
    commit('SET_AUTHOR_POSTS_LOADED', true)
  },
  getMoreAuthorPosts({ commit, state }) {
    commit('SET_AUTHOR_POSTS_PAGE', state.authorPostsPage + 1)
  },
}

export const getters = {
  allAuthors(state) {
    return state.authors
  },
  blogAuthor(state) {
    return state.author
  },
  authorPosts(state) {
    return state.authorPosts
  },
  authorPostsLoaded(state) {
    return state.authorPostsLoaded
  },
  authorPostsPage(state) {
    return state.authorPostsPage
  },
}
