export default {
  state: () => ({
    homePageContent: {},
    posts: [],
    featuredPost: null,
    postsCategory: null,
    postsLoaded: false,
    postsPage: 1,
  }),
  mutations: {
    SET_BLOG_PAGE_CONTENT(state, data) {
      const categories = data.categories.map(category => ({
        title: this.$prismic.asText(category.category_title),
        tags: category.tags.length ? this.$prismic.asText(category.tags).split(/, */g) : [],
      }))
      state.homePageContent = {
        image: data.image.url,
        headline: data.headline[0].text,
        description: data.description[0].text,
        banner: data.recent_posts_banner,
        bannerLink: data.banner_link,
        categories,
      }
    },
    SET_POSTS(state, data) {
      state.posts = data
      state.featuredPost = data.find(post => post.tags.includes('Featured post'))
    },
    SET_POSTS_CATEGORY(state, category) {
      state.postsCategory = category
    },
    SET_POSTS_LOADED(state, value) {
      state.postsLoaded = value
    },
    SET_POSTS_PAGE(state, page) {
      state.postsPage = page
    },
  },
  actions: {
    async getHomePageContent({ commit, state }) {
      try {
        const pageContent = (await this.$prismic.api.getSingle('blog_home')).data
        commit('SET_BLOG_PAGE_CONTENT', pageContent)
        if (!state.postsCategory) {
          commit('SET_POSTS_CATEGORY', state.homePageContent.categories[0].title)
        }
      } catch (err) {
        if (err) throw err
      }
    },
    async getBlogPosts({ commit }) {
      try {
        const posts = (
          await this.$prismic.api.query(this.$prismic.predicates.at('document.type', 'post'), {
            orderings: '[my.post.date desc]',
            pageSize: 100,
          })
        ).results

        commit('SET_POSTS', posts)
        commit('SET_POSTS_LOADED', true)
      } catch (err) {
        if (err) throw err
      }
    },
    getMorePosts({ commit, state }) {
      commit('SET_POSTS_PAGE', state.postsPage + 1)
    },
    changePostsCategory({ commit }, filter) {
      commit('SET_POSTS_PAGE', 1)
      commit('SET_POSTS_CATEGORY', filter)
    },
  },
  getters: {
    homePageContent(state) {
      return state.homePageContent
    },
    allPosts(state) {
      return state.posts
    },
    filteredPosts(state) {
      if (state.postsCategory !== null && state.homePageContent.categories) {
        const currentCategory = state.homePageContent.categories.find(tag => tag.title === state.postsCategory)
        const currentTags = [...currentCategory.tags, currentCategory.title]
        return state.posts.filter(post => post.tags.some(tag => currentTags.includes(tag)))
      }
      return []
    },
    recentPosts(state) {
      const posts = state.posts.slice(0, 5)
      if (posts.length) {
        posts.splice(4, 0, {
          id: 'banner',
          banner: state.homePageContent.banner || { url: '#' },
          link: state.homePageContent.bannerLink || { link_type: 'Web', target: '_self', url: '#' },
        })
      }
      return posts
    },
    featuredPost(state) {
      return state.featuredPost
    },
    postsCategory(state) {
      return state.postsCategory
    },
    postsLoaded(state) {
      return state.postsLoaded
    },
    postsPage(state) {
      return state.postsPage
    },
  },
}
