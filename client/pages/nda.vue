<template>
  <main class="main">
    <NDA />
  </main>
</template>

<script>
import NDA from '@/components/NDA';
export default {
  name: 'main-nda',
  components: {
    NDA
  },
  data() {
    return {
      title: 'Mad Devs: Work Under NDA',
      description: 'Non-Disclosure Agreement at Mad Devs',
      ogUrl: 'https://maddevs.io/nda'
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        { name: 'description', content: this.description },
        // Facebook / Open Graph
        { property: 'og:url', content: this.ogUrl },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: this.title },
        { property: 'og:description', content: this.description },
        {
          property: 'og:image',
          content: 'https://maddevs.io/Open-Graph.png'
        }
      ]
    };
  }
};
</script>
