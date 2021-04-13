const extractAuthorData = author => ({
  type: author.type,
  id: author.id,
  uid: author.uid,
  name: author.data.name,
  position: author.data.position,
  metaImage: author.data.meta_image,
  image: author.data.image,
})

export default {
  state: () => ({
    authors: [],
    author: {},
    authorPosts: [],
    authorPostsLoaded: false,
    authorPostsPage: 1,
  }),
  mutations: {
    SET_ALL_AUTHORS(state, data) {
      state.authors = data.map(author => extractAuthorData(author))
    },
    SET_AUTHOR(state, author) {
      state.author = extractAuthorData(author)
    },
    SET_AUTHOR_POSTS(state, posts) {
      state.authorPosts = posts
    },
    SET_AUTHOR_POSTS_LOADED(state, value) {
      state.authorPostsLoaded = value
    },
    SET_AUTHOR_POSTS_PAGE(state, page) {
      state.authorPostsPage = page
    },
  },
  actions: {
    async getBlogAuthors({ commit }) {
      try {
        const authors = (await this.$prismic.api.query(
          this.$prismic.predicates.at('document.type', 'author'),
          { pageSize: 100 },
        )
        ).results

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
    async getAuthorPosts({ commit }, payload) {
      commit('SET_AUTHOR_POSTS_LOADED', false)
      commit('SET_AUTHOR_POSTS', [])
      try {
        const posts = (
          await this.$prismic.api.query([
            this.$prismic.predicates.at('document.type', 'post'),
            this.$prismic.predicates.at('my.post.post_author', payload),
          ], {
            orderings: '[my.post.date desc]',
            pageSize: 100,
          })
        ).results

        commit('SET_AUTHOR_POSTS', posts)
        commit('SET_AUTHOR_POSTS_LOADED', true)
      } catch (err) {
        if (err) throw err
      }
    },
    getMoreAuthorPosts({ commit, state }) {
      commit('SET_AUTHOR_POSTS_PAGE', state.authorPostsPage + 1)
    },
  },
  getters: {
    allAuthors(state) {
      return state.authors
    },
    blogAuthor(state) {
      return state.author
    },
    authorPosts(state) {
      return state.authorPosts
    },
    authorPostsLoaded(state) {
      return state.authorPostsLoaded
    },
    authorPostsPage(state) {
      return state.authorPostsPage
    },
  },
}
