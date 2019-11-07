export const state = () => ({
  locales: ['en', 'ru'],
  locale: 'en',
  vacancies_type: 'Senior'
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
  }
}

// =================================================
// Actions
// =================================================
export const actions = {
  async SET_VACANCIES_TYPE(context, payload) {
    context.commit('SET_VACANCIES_TYPE', payload);
  }
}

// =================================================
// Getters
// =================================================
export const getters = {
  vacancies_type: state => state.vacancies_type
}
