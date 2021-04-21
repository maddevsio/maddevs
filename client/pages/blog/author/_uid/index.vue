<template>
  <section class="author">
    <AuthorBanner />
    <AuthorPostsSection />
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import AuthorBanner from '@/components/Blog/Main/AuthorBanner'
import AuthorPostsSection from '@/components/Blog/Main/AuthorPostsSection'

import initLazyLoadMixin from '@/mixins/initLazyLoadMixin'

export default {
  name: 'Author',
  components: {
    AuthorBanner,
    AuthorPostsSection,
  },

  mixins: [initLazyLoadMixin],

  beforeRouteEnter(to, from, next) {
    next(vm => {
      const { params } = to
      const {
        state: {
          blogAuthors: {
            author = {},
          },
        },
      } = vm.$store
      /**
       * Prismic saves all previous UID and they both still resolve
       * This condition checks the current uid and redirects to it
       * https://community.prismic.io/t/when-does-cache-expire-uid-history/874 - about this issue
       */
      if (params.uid !== author.uid && typeof author.uid === 'string') {
        next({ path: `/blog/author/${author.uid}/` })
      }
    })
  },

  async asyncData({ store, params, error }) {
    try {
      await store.dispatch('getBlogAuthor', params.uid)
      return {
        openGraphUrl: `${process.env.domain}/blog/author/${params.uid}/`,
      }
    } catch (e) {
      // Returns error page
      return error({ statusCode: 404, message: 'Page not found' })
    }
  },

  head() {
    return {
      title: this.blogAuthor.metaTitle || 'Mad Devs: Software & Mobile App Development Company | Blog',
      meta: [
        { name: 'description', content: this.blogAuthor.metaDescription || '' },
        // Facebook / Open Graph
        { property: 'og:site_name', content: 'Mad Devs: Software & Mobile App Development Company' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: this.openGraphUrl },
        {
          property: 'og:title',
          content: this.blogAuthor.metaTitle || 'Blog',
        },
        { property: 'og:description', content: this.blogAuthor.metaDescription || '' },
        {
          property: 'og:image',
          content: this.blogAuthor.image.url ? this.blogAuthor.image.url : 'https://maddevs.io/blog.png',
        },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        // Twitter / Twitter Card
        { property: 'twitter:card', content: 'summary_large_image' },
        {
          property: 'twitter:text:title',
          content: this.blogAuthor.metaTitle || 'Blog',
        },
        { property: 'twitter:description', content: this.blogAuthor.metaDescription || '' },
        {
          property: 'twitter:image:src',
          content: this.blogAuthor.image.url ? this.blogAuthor.image.url : 'https://maddevs.io/blog.png',
        },
        { property: 'twitter:url', content: this.openGraphUrl },
      ],

      link: [{ rel: 'canonical', href: this.openGraphUrl }],
      __dangerouslyDisableSanitizers: ['script'],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: this.blogAuthor.schemaOrgSnippet,
        },
        // Need for supported Safari9 and IE11 https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Intl
        { src: 'https://cdn.polyfill.io/v2/polyfill.min.js?features=Intl.~locale.en' },
      ],
    }
  },

  computed: {
    ...mapGetters(['blogAuthor']),
  },

  created() {
    this.getAuthorPosts(this.blogAuthor.id)
  },

  methods: {
    ...mapActions(['getAuthorPosts']),
  },
}
</script>

<style lang="scss" scoped>
  .author {
    padding-top: 62px;
  }
</style>
