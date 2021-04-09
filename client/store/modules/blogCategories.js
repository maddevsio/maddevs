import convertStringToSlug from '@/helpers/convertStringToSlug'

export default {
  state: () => ({
    category: '',
  }),
  mutations: {
    SET_CATEGORY(state, category) {
      state.category = category
    },
  },
  actions: {
    getBlogCategory({ commit }, payload) {
      const category = this.$prismic.api.tags.find(tag => convertStringToSlug(tag) === payload)
      commit('SET_CATEGORY', category)
    },
  },
  getters: {
    blogCategory(state) {
      return state.category
    },
  },
}
