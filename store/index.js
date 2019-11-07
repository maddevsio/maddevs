export const state = () => ({
  locales: ['en', 'ru'],
  locale: 'en',
  vacancies_type: 'Senior',
  vacancies: []
})

// =================================================
// Mutations
// =================================================
export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  },
  SET_VACANCIES_TYPE(state, payload) {
    state.vacancies_type = payload;
  },
  SET_VACANCIES(state, payload) {
    state.vacancies = payload;
  }
}

// =================================================
// Actions
// =================================================
export const actions = {
  async SET_VACANCIES_TYPE(context, payload) {
    context.commit('SET_VACANCIES_TYPE', payload);
  },
  async FETCH_VACANCIES({ state, commit }) {
    this.$axios.setHeader("Authorization", "Bearer " + process.env.API_TOKEN);
    this.$axios.setHeader("User-Agent", "App/1.0 (incaseoffire@example.com)");
    await this.$axios.$get(`/api/account/${process.env.API_ACCOUNT_ID}/vacancies`).then(res => {
      commit("SET_VACANCIES", res);
    });
  }
}

// =================================================
// Getters
// =================================================
export const getters = {
  vacancies_type: state => state.vacancies_type,
  vacancies: state => state.vacancies
}
