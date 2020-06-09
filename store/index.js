export const state = () => ({
  locales: ['en', 'ru'],
  locale: 'en',
  contactMeFormStatus: false
});

export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale;
    }
  },
  SET_CONTACT_ME_FORM_STATUS(state, status) {
    state.contactMeFormStatus = status;
  }
};

export const actions = {
  async sendContactMeForm({commit}, payload) {
    const data = payload;
    await this.$axios.post('send-email', data).then(res => {
      if (res.status === 200) {
        commit('SET_CONTACT_ME_FORM_STATUS', true);
      }
    });
  }
};
