<template>
  <main class="main">
    <Banner />
  </main>
</template>

<script>
import Banner from './Banner';

export default {
  name: 'main-quality',
  props: ['language'],
  data() {
    return {
      title: this.$t('title-jobs'),
      description: this.$t('meta-desc_jobs'),
      ogUrl: this.$t('og_meta-url_jobs'),
    };
  },
  components: {
    Banner
  },
  head: {
    title: function() {
      return {
        inner: this.title,
        separator: ' ', // Leave empty separator
        complement: ' ', // Leave empty complement
      };
    },
    meta: function () {
      return [
        {name: 'description', content: this.description},
        // Facebook / Open Graph
        {property: 'og:url', content: this.ogUrl},
        {property: 'og:type', content: 'website'},
        {property: 'og:title', content: this.title},
        {property: 'og:description', content: this.description},
        {property: 'og:image', content: 'https://maddevs.io/static/Open-Graph.png'},
      ];
    }
  },
};
</script>
