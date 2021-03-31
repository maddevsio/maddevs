export default {
  state: () => ({
    contactMeFormStatus: false,
  }),
  mutations: {
    SET_STATUS_FOR_SEND_EMAIL(state, status) {
      state.contactMeFormStatus = status
    },
  },
  actions: {
    async sendEmail({ commit }, payload) {
      try {
        const response = await this.$axios.post('api/send-email', payload)
        commit('SET_STATUS_FOR_SEND_EMAIL', true)
        return response
      } catch (error) {
        commit('SET_STATUS_FOR_SEND_EMAIL', false)
        return error
      }
    },
  },
}
