export default {
  state: {
    blogPageContent: {},
    currentFilter: null
  },
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
    SET_CURRENT_FILTER(state, filter) {
      state.currentFilter = filter;
    }
  },
  actions: {
    async getBlogPageContent({commit, state}) {
      try {
        const pageContent = (await this.$prismic.api.getSingle('blog_home')).data;
        commit('SET_BLOG_PAGE_CONTENT', pageContent);
        commit('SET_CURRENT_FILTER', state.blogPageContent.categories[0].title);
      } catch {}
    }
  },
  getters: {
    blogPageContent(state) {
      return state.blogPageContent;
    },
    currentFilter(state) {
      return state.currentFilter;
    }
  }
};
