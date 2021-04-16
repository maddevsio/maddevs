import formatDate from '@/helpers/formatDate'

export default {
  state: () => ({
    post: {},
  }),
  mutations: {
    SET_BLOG_POST(state, post) {
      let jsonLd = ''
      let recommendedPosts = []

      if (
        post.data.schema_org_snippets
        && post.data.schema_org_snippets.length
        && post.data.schema_org_snippets[0].single_snippet.length
        && post.data.schema_org_snippets[0].single_snippet[0].text
      ) {
        jsonLd = post.data.schema_org_snippets[0].single_snippet[0].text
        jsonLd = jsonLd.substring(jsonLd.indexOf('{'), jsonLd.lastIndexOf('}') + 1) // extracting only JSON object from a snippet without extra characters
      } else {
        // eslint-disable-next-line
        console.log('Schema.org is not defined');
      }

      if (post.recommendedPosts && post.recommendedPosts.length) {
        recommendedPosts = post.recommendedPosts.filter(recommendedPost => recommendedPost.uid !== post.uid)
        if (recommendedPosts.length > 3) recommendedPosts = recommendedPosts.slice(0, 3)
      }

      state.post = {
        type: post.type,
        id: post.id,
        uid: post.uid,
        title: this.$prismic.asText(post.data.title),
        subtitle: this.$prismic.asText(post.data.subtitle),
        featuredImage: post.data.featured_image,
        postAuthor: post.data.post_author,
        tableOfContents: post.data.table_of_contents,
        slices: post.data.body,
        metaTitle: this.$prismic.asText(post.data.meta_title) || post.data.title[0].text,
        metaDescription: this.$prismic.asText(post.data.meta_description),
        date: formatDate(post.data.date),
        tags: post.tags,
        recommendedPosts,
        jsonLd,
      }
    },
  },
  actions: {
    async getBlogPost({ commit }, payload = { type: 'post' }) {
      try {
        const post = await this.$prismic.api.getByUID(payload.type, payload.uid)

        if (post.tags && post.tags.length) {
          post.recommendedPosts = (
            await this.$prismic.api.query(this.$prismic.predicates.at('document.tags', [post.tags[0]]), {
              pageSize: 4,
            })
          ).results
        }

        commit('SET_BLOG_POST', post)
      } catch (err) {
        if (err) throw err
      }
    },
  },
  getters: {
    blogPost(state) {
      return state.post
    },
  },
}
