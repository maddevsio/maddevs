import { mapActions } from 'vuex'
import formatDate from '@/helpers/formatDate'

const buildPostPageMixin = (pageName = 'blog', postType = 'post') => ({
  async asyncData({
    $prismic, store, params, error,
  }) {
    let schemaOrgSnippet = ''
    let openGraphUrl = `${process.env.domain}/blog/${params.uid}`

    // Open graph url
    if (pageName === 'author' || pageName === 'tag') openGraphUrl = `${process.env.domain}/blog/${pageName}/${params.uid}/${params.postUID}`
    if (pageName === 'customer-university') openGraphUrl = `${process.env.domain}/${pageName}/${params.uid}`

    try {
      const post = await store.dispatch('getBlogPost', { type: postType, uid: (params.postUID || params.uid) })

      // Schema org snippet
      if (
        post.data.schema_org_snippets
        && post.data.schema_org_snippets.length
        && post.data.schema_org_snippets[0].single_snippet.length
        && post.data.schema_org_snippets[0].single_snippet[0].text
      ) {
        schemaOrgSnippet = post.data.schema_org_snippets[0].single_snippet[0].text
        schemaOrgSnippet = schemaOrgSnippet.substring(schemaOrgSnippet.indexOf('{'), schemaOrgSnippet.lastIndexOf('}') + 1) // extracting only JSON object from a snippet without extra characters
      } else {
        // eslint-disable-next-line
        console.log('Schema.org is not defined');
      }

      // Recommended posts
      if (post.recommendedPosts && post.recommendedPosts.length) {
        post.recommendedPosts = post.recommendedPosts.filter(recommendedPost => recommendedPost.uid !== post.uid)
        if (post.recommendedPosts.length > 3) post.recommendedPosts = post.recommendedPosts.slice(0, 3)
      }

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
      cluster: null,
    }
  },

  head() {
    return {
      title: this.post.metaTitle || '',
      meta: [
        { name: 'description', content: this.post.metaDescription || '' },
        // Facebook / Open Graph
        { property: 'og:site_name', content: 'Mad Devs: Software & Mobile App Development Company' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: this.openGraphUrl },
        {
          property: 'og:title',
          content: this.post.metaTitle || '',
        },
        { property: 'og:description', content: this.post.metaDescription || '' },
        {
          property: 'og:image',
          content: this.post.featuredImage.url ? this.post.featuredImage.url : '/favicon.ico',
        },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        // Twitter / Twitter Card
        { property: 'twitter:card', content: 'summary_large_image' },
        {
          property: 'twitter:text:title',
          content: this.post.metaTitle || '',
        },
        { property: 'twitter:description', content: this.post.metaDescription || '' },
        {
          property: 'twitter:image:src',
          content: this.post.featuredImage.url ? this.post.featuredImage.url : '/favicon.ico',
        },
        { property: 'twitter:url', content: this.openGraphUrl },
      ],

      link: [{ rel: 'canonical', href: this.openGraphUrl }],
      __dangerouslyDisableSanitizers: ['script'],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: this.schemaOrgSnippet,
        },
        // Need for supported Safari9 and IE11 https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Intl
        { src: 'https://cdn.polyfill.io/v2/polyfill.min.js?features=Intl.~locale.en' },
      ],
    }
  },

  async mounted() {
    if (pageName === 'customer-university') {
      this.cluster = await this.getClusterData(this.post.id)
    }
  },

  methods: {
    ...mapActions(['getClusterData']),
  },
})

export default buildPostPageMixin
