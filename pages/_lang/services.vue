<template>
  <main class="main">
    <Banner />
  </main>
</template>

<script>
import Banner from '@/components/Services/Banner';

export default {
  name: 'main-services',
  components: {
    Banner
  },
  data() {
    return {
      title: 'Mad Devs Services',
      description: 'Example',
      ogUrl: 'https://maddevs.io/en/services',
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        { name: 'description', content: this.description },
        { property: 'og:url', content: this.ogUrl },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: this.title },
        { property: 'og:description', content: this.description },
        { property: 'og:image', content: 'https://maddevs.io/static/Open-Graph.png' }
      ]
    }
  }
};
</script>