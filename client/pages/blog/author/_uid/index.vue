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
import { buildHead } from '@/data/seo'

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
    return buildHead({
      title: 'Mad Devs: Software & Mobile App Development Company | Blog Author',
      metaTitle: this.blogAuthor.metaTitle || `${this.blogAuthor.name} | Blog`,
      description: this.blogAuthor.metaDescription || '',
      url: this.openGraphUrl,
      jsonLd: this.blogAuthor.schemaOrgSnippet,
      image: 'https://maddevs.io/blog.png',
      scripts: [
        // Need for supported Safari9 and IE11 https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Intl
        { src: 'https://cdn.polyfill.io/v2/polyfill.min.js?features=Intl.~locale.en' },
      ],
    })
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
