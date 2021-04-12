<template>
  <PostView :open-graph-url="openGraphUrl" />
</template>

<script>
import { mapGetters } from 'vuex'
import PostView from '@/components/Blog/Post/Post'

export default {
  name: 'AuthorPost',
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
        next({ path: `/blog/author/${vm.uid}/${vm.postUID}/` })
      }
    })
  },

  async asyncData({ store, params, error }) {
    const openGraphUrl = `${process.env.domain}/blog/author/${params.uid}/${params.postUID}`
    try {
      await store.dispatch('getBlogPost', { type: 'post', uid: params.postUID })
      if (store.state.blogPost.post.postAuthor.uid) {
        await store.dispatch('getBlogAuthor', store.state.blogPost.post.postAuthor.uid)
      }

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
      type: 'blog_post',
      openGraphUrl: '',
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
      ],
    }
  },

  computed: {
    ...mapGetters(['blogPost']),
  },
}
</script>
