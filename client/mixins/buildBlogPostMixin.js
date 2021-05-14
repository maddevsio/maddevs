import formatDate from '@/helpers/formatDate'
import extractSchemaOrg from '@/helpers/extractSchemaOrg'
import { buildHead } from '@/data/seo'

const buildBlogPostMixin = (postType = 'post') => ({
  async asyncData({
    $prismic, store, params, error,
  }) {
    let schemaOrgSnippet = ''
    const openGraphUrl = `${process.env.domain}/${postType === 'customer_university' ? 'customer-university' : 'blog'}/${params.uid}/`

    try {
      const post = await store.dispatch('getBlogPost', { type: postType, uid: params.uid })
      if (post.data.post_author) await store.dispatch('getBlogAuthor', post.data.post_author.uid)

      // Schema org snippet
      schemaOrgSnippet = extractSchemaOrg(post.data.schema_org_snippets)

      // Recommended posts
      post.recommendedPosts = post.recommendedPosts && post.recommendedPosts
        .filter(recommendedPost => recommendedPost.uid !== post.uid && Boolean(recommendedPost.data?.post_author?.id))
        .slice(0, 3)

      return {
        post: {
          type: post.type,
          id: post.id,
          uid: post.uid,
          title: $prismic.asText(post.data.title),
          subtitle: $prismic.asText(post.data.subtitle),
          featuredImage: post.data.featured_image,
          recommendedPosts: post.recommendedPosts,
          postAuthor: post.data.post_author,
          tableOfContents: post.data.table_of_contents,
          slices: post.data.body,
          tags: post.tags,
          date: formatDate(post.data.date),
          metaTitle: $prismic.asText(post.data.meta_title) || post.data.title[0].text,
          metaDescription: $prismic.asText(post.data.meta_description),
        },
        openGraphUrl,
        schemaOrgSnippet,
      }
    } catch (e) {
      // Returns error page
      return error({ statusCode: 404, message: 'Page not found' })
    }
  },

  data() {
    return {
      openGraphUrl: '',
      schemaOrgSnippet: '',
    }
  },

  head() {
    return buildHead({
      title: this.post.metaTitle || '',
      metaTitle: this.post.metaTitle || '',
      description: this.post.metaDescription || '',
      url: this.openGraphUrl,
      jsonLd: this.schemaOrgSnippet,
      image: this.post.featuredImage.url ? this.post.featuredImage.url : '/favicon.ico',
    })
  },

  mounted() {
    this.$store.dispatch('getBlogAuthors')
  },
})

export default buildBlogPostMixin
