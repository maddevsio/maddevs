<template>
  <post-view v-bind="postData" />
</template>

<script>
import PostView from '@/components/Blog/PostView'

export default {
  name: 'Post',
  components: {
    PostView,
  },

  beforeRouteEnter(to, from, next) {
    next(vm => {
      /**
       * Prismic saves all previous UID and they both still resolve
       * This condition checks the current uid and redirects to it
       * https://community.prismic.io/t/when-does-cache-expire-uid-history/874 - about this issue
       */
      if (to.params.uid !== vm.uid && typeof vm.uid === 'string') {
        next({ path: `/customer-university/${vm.uid}/` })
      }
    })
  },

  async asyncData({ $prismic, params, error }) {
    let recommendedPosts = []
    const openGraphUrl = `${process.env.domain}/customer-university/${params.uid}/`
    let jsonLd
    try {
      // Query to get post content
      const post = await $prismic.api.getByUID('customer_university', params.uid)

      // Query to get recommended posts
      if (post.tags && post.tags.length) {
        recommendedPosts = await $prismic.api.query($prismic.predicates.at('document.tags', [post.tags[0]]), {
          pageSize: 4,
        })
        recommendedPosts = recommendedPosts.results.filter(recommendedPost => recommendedPost.uid !== post.uid)

        if (recommendedPosts.length > 3) {
          recommendedPosts = recommendedPosts.slice(0, 3)
        }
      }

      // Query to get Schema.org markup
      if (
        post.data.schema_org_snippets &&
        post.data.schema_org_snippets.length &&
        post.data.schema_org_snippets[0].single_snippet.length &&
        post.data.schema_org_snippets[0].single_snippet[0].text
      ) {
        jsonLd = post.data.schema_org_snippets[0].single_snippet[0].text
        jsonLd = jsonLd.substring(jsonLd.indexOf('{'), jsonLd.lastIndexOf('}') + 1) // extracting only JSON object from a snippet without extra characters
      } else {
        // eslint-disable-next-line
        console.log('Schema.org is not defined');
      }

      // Returns data to be used in template
      return {
        id: post.id,
        uid: post.uid,
        document: post.data,
        slices: post.data.body,
        title: $prismic.asText(post.data.meta_title) || post.data.title[0].text,
        description: $prismic.asText(post.data.meta_description),
        formattedDate: Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(
          new Date(post.data.date),
        ),

        recommendedPosts,
        tags: post.tags,
        openGraphUrl,
        jsonLd,
      }
    } catch (e) {
      // Returns error page
      return error({ statusCode: 404, message: 'Page not found' })
    }
  },

  data() {
    return {
      type: 'cu_post',
      title: '',
      description: '',
      jsonLd: '',
      cluster: null,
    }
  },

  head() {
    return {
      title: this.title,
      meta: [
        { name: 'description', content: this.description },
        // Facebook / Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: this.openGraphUrl },
        {
          property: 'og:title',
          content: this.title,
        },
        { property: 'og:description', content: this.description },
        {
          property: 'og:image',
          content: this.document.featured_image.url ? this.document.featured_image.url : '/favicon.ico',
        },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        // Twitter / Twitter Card
        { property: 'twitter:card', content: 'summary' },
        {
          property: 'twitter:text:title',
          content: this.title,
        },
        { property: 'twitter:description', content: this.description },
        {
          property: 'twitter:image:src',
          content: this.document.featured_image.url ? this.document.featured_image.url : '/favicon.ico',
        },
        { property: 'twitter:url', content: this.openGraphUrl },
      ],

      link: [{ rel: 'canonical', href: this.openGraphUrl }],
      __dangerouslyDisableSanitizers: ['script'],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: this.jsonLd,
        },
        // Need for supported Safari9 and IE11 https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Intl
        { src: 'https://cdn.polyfill.io/v2/polyfill.min.js?features=Intl.~locale.en' },
      ],
    }
  },

  computed: {
    postData() {
      return { ...this.$data }
    },
  },

  mounted() {
    this.getClusterData()
  },

  methods: {
    getClusterData() {
      this.$prismic.api.getSingle('cu_master').then(response => {
        this.cluster =
          response.data.body.find(cluster => cluster.items.find(post => post.cu_post.id === this.id) !== undefined) ||
          null
      })
    },
  },
}
</script>
