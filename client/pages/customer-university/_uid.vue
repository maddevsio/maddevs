<template>
  <post-view v-bind="postData" />
</template>

<script>
import PostView from '@/components/Blog/PostView';

export default {
  name: 'post',
  components: {
    PostView
  },
  data() {
    return {
      type: 'cu_post',
      title: '',
      jsonLd: '',
      cluster: null
    };
  },
  head () {
    return {
      title: this.$prismic.asText(this.document.meta_title) || this.document.title[0].text,
      meta: [
        { name: 'description', content: this.$prismic.asText(this.document.meta_description)},
        // Facebook / Open Graph
        { property: 'og:type', content: 'website'},
        { property: 'og:url', content: this.openGraphUrl},
        { property: 'og:title', content: this.$prismic.asText(this.document.meta_title) || this.document.title[0].text},
        { property: 'og:description', content: this.$prismic.asText(this.document.meta_description)},
        { property: 'og:image', content: this.document.featured_image.url ? this.document.featured_image.url : '/favicon.ico'},
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        // Twitter / Twitter Card
        { property: 'twitter:card', content: 'summary' },
        { property: 'twitter:text:title', content: this.$prismic.asText(this.document.meta_title) || this.document.title[0].text},
        { property: 'twitter:description', content: this.$prismic.asText(this.document.meta_description)},
        { property: 'twitter:image:src', content: this.document.featured_image.url ? this.document.featured_image.url : '/favicon.ico' },
        { property: 'twitter:url', content: this.openGraphUrl}
      ],
      link: [
        { rel: 'canonical', href: this.openGraphUrl}
      ],
      __dangerouslyDisableSanitizers: ['script'],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: this.jsonLd
        },
        {src: 'https://cdn.polyfill.io/v2/polyfill.min.js?features=Intl.~locale.en'}
      ]
    };
  },
  async asyncData({ $prismic, params, error }) {
    let recommendedPosts = [];
    let openGraphUrl = `${process.env.domain}/customer-university/${params.uid}/`;
    let jsonLd;
    try {
      // Query to get post content
      let post = await $prismic.api.getByUID('customer_university', params.uid);

      // Query to get recommended posts
      if (post.tags.length) {
        recommendedPosts = await $prismic.api.query($prismic.predicates.at('document.tags', [post.tags[0]]), {pageSize: 4});
        recommendedPosts = recommendedPosts.results.filter(recommendedPost => recommendedPost.uid !== post.uid);

        if (recommendedPosts.length > 3) {
          recommendedPosts = recommendedPosts.slice(0, 3);
        }
      }

      // Query to get Schema.org markup
      if (
        post.data.schema_org_snippets.length &&
        post.data.schema_org_snippets[0].single_snippet.length &&
        post.data.schema_org_snippets[0].single_snippet[0].text
      ) {
        jsonLd = post.data.schema_org_snippets[0].single_snippet[0].text;
        jsonLd = jsonLd.substring(jsonLd.indexOf('{'), jsonLd.lastIndexOf('}') + 1); // extracting only JSON object from a snippet without extra characters
      } else {
        console.log('Schema.org is not defined');
      }

      // Returns data to be used in template
      return {
        id: post.id,
        document: post.data,
        slices: post.data.body,
        formattedDate: Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(post.data.date)),
        recommendedPosts: recommendedPosts,
        tags: post.tags,
        openGraphUrl,
        jsonLd
      };
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' });
    }
  },
  mounted() {
    this.title = this.$prismic.asText(this.document.meta_title) || this.document.title[0].text;
    this.getClusterData();
  },
  methods: {
    getClusterData() {
      this.$prismic.api.getSingle('cu_master')
        .then(response => {
          this.cluster = response.data.body.find(cluster => cluster.items.find(post => post.cu_post.id === this.id) !== undefined) || null;
        });
    }
  },
  computed: {
    postData() {
      return Object.assign({}, this.$data);
    }
  }
};
</script>
