export default {
  state: () => ({
    authors: [],
    author: {},
  }),
  mutations: {
    SET_ALL_AUTHORS(state, data) {
      state.authors = data.map(author => ({
        id: author.id,
        uid: author.uid,
        metaImage: author.data.meta_image,
        image: author.data.image,
        name: author.data.name,
        position: author.data.position,
      }))
    },
    SET_AUTHOR(state, author) {
      state.author = {
        id: author.id,
        uid: author.uid,
        name: author.data.name,
        position: author.data.position,
        metaImage: author.data.meta_image,
        image: author.data.image,
      }
    },
  },
  actions: {
    async getBlogAuthors({ commit }) {
      try {
        const authors = (await this.$prismic.api.query(this.$prismic.predicates.at('document.type', 'author'), {
          pageSize: 100,
        })).results

        commit('SET_ALL_AUTHORS', authors)
      } catch (err) {
        if (err) throw err
      }
    },
    async getBlogAuthor({ commit }, payload) {
      try {
        const author = await this.$prismic.api.getByUID('author', payload)
        commit('SET_AUTHOR', author)
      } catch (err) {
        if (err) throw err
      }
    },
  },
  getters: {
    allAuthors(state) {
      return state.authors
    },
    blogAuthor(state) {
      return state.author
    },
  },
}
