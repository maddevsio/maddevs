export const state = () => ({
  locales: ['en', 'ru'],
  locale: 'en',
  contactMeFormStatus: false,
  modalWindowIsOpen: false
});

export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale;
    }
  },
  SET_STATUS_FOR_SEND_EMAIL(state, status) {
    state.contactMeFormStatus = status;
  },
  SET_DISPLAY_STATE_FOR_MODAL_WINDOW(state, payload) {
    state.modalWindowIsOpen = payload;
  } 
};

export const actions = {
  sendEmail({commit}, payload) {
    const data = payload;
    return new Promise((resolve, reject) => {
      this.$axios.post('send-email', data).then(res => {
        if (res.status === 200) {
          commit('SET_STATUS_FOR_SEND_EMAIL', true);
          resolve(res);
        }
      }).catch(err => {
        commit(SET_STATUS_FOR_SEND_EMAIL, false);
        reject(err);
      });
    });
  }
};
