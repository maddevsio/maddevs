import extractSchemaOrg from '@/helpers/extractSchemaOrg'

const extractAuthorData = author => {
  const socialNetworks = author.data.social_networks
    .filter(item => item.network && item.link.url)
    .map(item => ({
      key: item.network.toLowerCase(),
      title: item.network,
      link: item.link,
    }))

  return {
    type: author.type,
    id: author.id,
    uid: author.uid,
    name: author.data.name,
    position: author.data.position,
    thumbnailImage: author.data.thumbnail_image,
    image: author.data.image,
    metaTitle: author.data.meta_title,
    metaDescription: author.data.meta_description,
    schemaOrgSnippet: extractSchemaOrg(author.data.schema_org_snippets),
    socialNetworks,
  }
}

export default {
  state: () => ({
    authors: [],
    author: {},
    authorPosts: [],
    authorPostsLoaded: false,
    authorPostsPage: 1,
  }),
  mutations: {
    SET_ALL_AUTHORS(state, authors) {
      state.authors = authors.map(author => extractAuthorData(author))
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
        const response = await this.$prismic.api.query(
          this.$prismic.predicates.at('document.type', 'author'),
          { pageSize: 100 },
        )
        commit('SET_ALL_AUTHORS', response.results)
      } catch (err) {
        if (err) throw err
      }
    },
    async getBlogAuthor({ commit }, payload) {
      try {
        const response = await this.$prismic.api.getByUID('author', payload)
        commit('SET_AUTHOR', response)
      } catch (err) {
        if (err) throw err
      }
    },
    async getAuthorPosts({ commit }, payload) {
      commit('SET_AUTHOR_POSTS_LOADED', false)
      commit('SET_AUTHOR_POSTS', [])
      try {
        const response = await this.$prismic.api.query([
          this.$prismic.predicates.at('document.type', 'post'),
          this.$prismic.predicates.at('my.post.post_author', payload),
        ], {
          orderings: '[my.post.date desc]',
          pageSize: 100,
        })
        commit('SET_AUTHOR_POSTS', response.results)
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
