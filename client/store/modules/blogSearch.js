/* eslint-disable no-shadow */
export const state = () => ({
  searchQuery: null,
  searchResponse: null,
})

export const mutations = {
  SET_SEARCH_QUERY(state, query) {
    state.searchQuery = query
  },
  SET_SEARCH_RESPONSE(state, response) {
    state.searchResponse = response
  },
}

export const actions = {
  setSearchQuery({ commit }, payload) {
    commit('SET_SEARCH_QUERY', payload)
  },
  setSearchResponse({ commit }, payload) {
    commit('SET_SEARCH_RESPONSE', payload)
  },
}

export const getters = {
  getSearchQuery(state) {
    return state.searchQuery
  },
  getSearchResponse(state) {
    return state.searchResponse
  },
}
