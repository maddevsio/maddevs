import convertStringToSlug from '@/helpers/convertStringToSlug'

export default {
  state: () => ({
    tag: '',
    tagPosts: [],
    tagPostsLoaded: false,
    tagPostsPage: 1,
  }),
  mutations: {
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
  },
  actions: {
    getBlogTag({ commit }, payload) {
      const currentTag = this.$prismic.api.tags.find(tag => convertStringToSlug(tag) === payload)
      commit('SET_TAG', currentTag)
    },
    async getTagPosts({ commit }, payload) {
      commit('SET_TAG_POSTS_LOADED', false)
      commit('SET_TAG_POSTS', [])

      const posts = (await this.$prismic.api.query(this.$prismic.predicates.at('document.tags', [payload]), {
        orderings: '[my.post.date desc]',
        pageSize: 100,
      })).results

      commit('SET_TAG_POSTS', posts)
      commit('SET_TAG_POSTS_LOADED', true)
    },
    getMoreTagPosts({ commit, state }) {
      commit('SET_TAG_POSTS_PAGE', state.tagPostsPage + 1)
    },
  },
  getters: {
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
  },
}
