export default {
  state: () => ({
    blogPageContent: {},
    posts: [],
    featuredPost: null,
    postsCategory: null,
    postsLoaded: false,
    postsPage: 1
  }),
  mutations: {
    SET_BLOG_PAGE_CONTENT(state, data) {
      const categories = data.categories.map(category => ({
        title: this.$prismic.asText(category.category_title),
        tags: category.tags.length ? this.$prismic.asText(category.tags).split(/, */g) : []
      }));

      state.blogPageContent = {
        image: data.image.url,
        headline: data.headline[0].text,
        description: data.description[0].text,
        banner: data.recent_posts_banner,
        bannerLink: data.banner_link,
        categories
      };
    },
    SET_POSTS(state, data) {
      state.posts = data;
      state.featuredPost = data.find(post => post.tags.includes('Featured post'));
    },
    SET_POSTS_FILTER(state, filter) {
      state.postsCategory = filter;
    },
    SET_POSTS_LOADED(state, value) {
      state.postsLoaded = value;
    },
    SET_POSTS_PAGE(state, page) {
      state.postsPage = page;
    }
  },
  actions: {
    async getBlogPageContent({commit, state}) {
      try {
        const pageContent = (await this.$prismic.api.getSingle('blog_home')).data;
        commit('SET_BLOG_PAGE_CONTENT', pageContent);
        if (!Boolean(state.postsCategory)) {
          commit('SET_POSTS_FILTER', state.blogPageContent.categories[0].title);
        }
      } catch(err) {}
    },
    async getBlogPosts({commit}) {
      try {
        const posts = await this.$prismic.api.query(
          this.$prismic.predicates.at('document.type', 'post'),
          {orderings : '[my.post.date desc]', pageSize: 100}
        );

        commit('SET_POSTS', posts.results);
        commit('SET_POSTS_LOADED', true);
      } catch(err) {}
    },
    getMorePosts({commit, state}) {
      commit('SET_POSTS_PAGE', state.postsPage + 1);
    },
    changePostsCategory({commit}, filter) {
      commit('SET_POSTS_PAGE', 1);
      commit('SET_POSTS_FILTER', filter);
    }
  },
  getters: {
    blogPageContent(state) {
      return state.blogPageContent;
    },
    allPosts(state) {
      return state.posts;
    },
    filteredPosts(state) {
      if (state.postsCategory !== null) {
        const currentCategory = state.blogPageContent.categories.find(tag => tag.title === state.postsCategory);
        const currentTags = [...currentCategory.tags, currentCategory.title];

        return state.posts.filter(post => post.tags.some(tag => currentTags.includes(tag)));
      } else {
        return [];
      }
    },
    recentPosts(state) {
      const posts = state.posts.slice(0, 5);
      if(posts.length) {
        posts.splice(4, 0, {
          id: 'banner',
          banner: state.blogPageContent.banner || {url: '#'},
          link: state.blogPageContent.bannerLink || {link_type: 'Web', target: '_self', url: '#'}
        });
      }

      return posts;
    },
    featuredPost(state) {
      return state.featuredPost;
    },
    postsCategory(state) {
      return state.postsCategory;
    },
    postsLoaded(state) {
      return state.postsLoaded;
    },
    postsPage(state) {
      return state.postsPage;
    }
  }
};
