<template>
  <main class="main">
    <FAQ />
  </main>
</template>

<script>
import FAQ from '@/components/FAQ';
export default {
  name: 'main-faq',
  components: {
    FAQ
  },
  data() {
    return {
      title: 'Frequently Asked Questions',
      ogUrl: 'https://maddevs.io/faq'
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        // Facebook / Open Graph
        { property: 'og:url', content: this.ogUrl },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: this.title },
        {
          property: 'og:image',
          content: 'https://maddevs.io/Open-Graph.png'
        }
      ]
    };
  }
};
</script>
