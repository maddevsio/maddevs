<template>
  <PostView
    :type="type"
    :open-graph-url="openGraphUrl"
    :cluster="cluster"
  />
</template>

<script>
import { mapGetters } from 'vuex'
import PostView from '@/components/Blog/Post/Post'

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

  async asyncData({ store, params, error }) {
    const openGraphUrl = `${process.env.domain}/customer-university/${params.uid}/`
    try {
      await store.dispatch('getBlogPost', { type: 'customer_university', uid: params.uid })
      await store.dispatch('getBlogAuthor', store.state.blogPost.post.postAuthor.uid)

      return {
        openGraphUrl,
      }
    } catch (e) {
      // Returns error page
      return error({ statusCode: 404, message: 'Page not found' })
    }
  },

  data() {
    return {
      type: 'cu_post',
      openGraphUrl: '',
      cluster: null,
    }
  },

  head() {
    return {
      title: this.blogPost.metaTitle,
      meta: [
        { name: 'description', content: this.blogPost.metaDescription },
        // Facebook / Open Graph
        { property: 'og:site_name', content: 'Mad Devs: Software & Mobile App Development Company' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: this.openGraphUrl },
        {
          property: 'og:title',
          content: this.blogPost.metaTitle,
        },
        { property: 'og:description', content: this.blogPost.metaDescription },
        {
          property: 'og:image',
          content: this.blogPost.featuredImage ? this.blogPost.featuredImage : '/favicon.ico',
        },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        // Twitter / Twitter Card
        { property: 'twitter:card', content: 'summary_large_image' },
        {
          property: 'twitter:text:title',
          content: this.blogPost.metaTitle,
        },
        { property: 'twitter:description', content: this.blogPost.metaDescription },
        {
          property: 'twitter:image:src',
          content: this.blogPost.featuredImage ? this.blogPost.featuredImage : '/favicon.ico',
        },
        { property: 'twitter:url', content: this.openGraphUrl },
      ],

      link: [{ rel: 'canonical', href: this.openGraphUrl }],
      __dangerouslyDisableSanitizers: ['script'],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: this.blogPost.jsonLd,
        },
        // Need for supported Safari9 and IE11 https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Intl
        { src: 'https://cdn.polyfill.io/v2/polyfill.min.js?features=Intl.~locale.en' },
      ],
    }
  },

  computed: {
    ...mapGetters(['blogPost']),
  },

  mounted() {
    this.getClusterData()
  },

  methods: {
    getClusterData() {
      this.$prismic.api.getSingle('cu_master').then(response => {
        this.cluster = response.data.body
          .find(cluster => cluster.items.find(post => post.cu_post.id === this.blogPost.id) !== undefined) || null
      })
    },
  },
}
</script>
