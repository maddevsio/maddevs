export default {
  state: () => ({
    contactMeFormStatus: false
  }),
  mutations: {
    SET_STATUS_FOR_SEND_EMAIL(state, status) {
      state.contactMeFormStatus = status;
    }
  },
  actions: {
    sendEmail({ commit }, payload) {
      return new Promise(async (resolve, reject) => {
        try {
          const response = await this.$axios.post('api/send-email', payload);
          commit('SET_STATUS_FOR_SEND_EMAIL', true);
          resolve(response);
        } catch(error) {
          commit('SET_STATUS_FOR_SEND_EMAIL', false);
          reject(err);
        }
      });
    }
  }
};
