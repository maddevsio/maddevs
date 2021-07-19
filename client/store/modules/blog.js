/* eslint-disable no-shadow */

import formatDate from '@/helpers/formatDate'

import {
  getHomePageContent,
  getBlogPosts,
  getCustomerUniversityMaster,
  getCustomerUniversityFeaturedPost,
  getCUPosts,
} from '@/api/blog'

export const state = () => ({
  homePageContent: {},
  customerContent: {},
  featuredCUPost: null,
  posts: [],
  CUPosts: [],
  featuredPost: null,
  postsCategory: null,
  postsLoaded: false,
  postsPage: 1,
})

export const mutations = {
  SET_BLOG_PAGE_CONTENT(state, data) {
    let categories = []
    if (data && data.categories && data.categories.length) {
      categories = data.categories.map(category => ({
        title: this.$prismic.asText(category.category_title),
        tags: category.tags.length ? this.$prismic.asText(category.tags).split(/, */g) : [],
      }))
    }
    state.homePageContent = {
      image: data.image.url,
      headline: data.headline[0].text,
      description: data.description[0].text,
      banner: data.recent_posts_banner,
      bannerLink: data.banner_link,
      categories,
    }
  },
  SET_CUSTOMER_CONTENT(state, data) {
    state.customerContent = data
  },
  SET_CU_POSTS(state, posts) {
    state.CUPosts = posts
  },
  SET_FEATURED_CUSTOMER_POST(state, post) {
    state.featuredCUPost = post
    state.featuredCUPost.date = formatDate(post.date)
  },
  SET_POSTS(state, data) {
    state.posts = data
    state.featuredPost = data && data.find(post => post.tags.includes('Featured post'))
  },
  SET_POSTS_CATEGORY(state, category) {
    state.postsCategory = category
  },
  SET_POSTS_LOADED(state, value) {
    state.postsLoaded = value
  },
  SET_POSTS_PAGE(state, page) {
    state.postsPage = page
  },
}

export const actions = {
  async getHomePageContent({ commit, state }) {
    const pageContent = await getHomePageContent(this.$prismic)
    commit('SET_BLOG_PAGE_CONTENT', pageContent)
    if (!state.postsCategory) {
      commit('SET_POSTS_CATEGORY', state.homePageContent.categories[0].title)
    }
  },
  async getBlogPosts({ commit }) {
    const posts = await getBlogPosts(this.$prismic)
    commit('SET_POSTS', posts)
    commit('SET_POSTS_LOADED', true)
  },
  async getCustomerUniversityContent({ commit }) {
    const master = await getCustomerUniversityMaster(this.$prismic)
    commit('SET_CUSTOMER_CONTENT', master)
    if (master.featured_cu.uid) {
      const featuredPost = await getCustomerUniversityFeaturedPost(this.$prismic, master)
      commit('SET_FEATURED_CUSTOMER_POST', featuredPost)
    }
  },
  async getCustomerUniversityPosts({ commit }) {
    const posts = await getCUPosts(this.$prismic)
    commit('SET_CU_POSTS', posts)
  },
  getMorePosts({ commit, state }) {
    commit('SET_POSTS_PAGE', state.postsPage + 1)
  },
  changePostsCategory({ commit }, filter) {
    commit('SET_POSTS_PAGE', 1)
    commit('SET_POSTS_CATEGORY', filter)
  },
}

export const getters = {
  homePageContent(state) {
    return state.homePageContent
  },
  customerContent(state) {
    return state.customerContent
  },
  featuredCUPost(state) {
    return state.featuredCUPost
  },
  allPosts(state) {
    return state.posts
  },
  CUPosts(state) {
    return state.CUPosts
  },
  filteredPosts(state) {
    if (state.postsCategory !== null && state.homePageContent.categories) {
      const currentCategory = state.homePageContent.categories.find(tag => tag.title === state.postsCategory)
      const currentTags = [...currentCategory.tags, currentCategory.title]
      return state.posts.filter(post => post.tags.some(tag => currentTags.includes(tag)))
    }
    return []
  },
  recentPosts(state) {
    const posts = state.posts.slice(0, 5)
    if (posts.length) {
      posts.splice(4, 0, {
        id: 'banner',
        banner: state.homePageContent.banner || { url: '#' },
        link: state.homePageContent.bannerLink || { link_type: 'Web', target: '_self', url: '#' },
      })
    }
    return posts
  },
  featuredPost(state) {
    return state.featuredPost
  },
  postsCategory(state) {
    return state.postsCategory
  },
  postsLoaded(state) {
    return state.postsLoaded
  },
  postsPage(state) {
    return state.postsPage
  },
}
