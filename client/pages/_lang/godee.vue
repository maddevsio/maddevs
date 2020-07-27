<template>
  <main class="main">
    <Banner />
  </main>
</template>

<script>
import Banner from '@/components/GoDee/Banner';

export default {
  name: 'GoDee',
  components: {
    Banner
  },
  data() {
    return {
      title: 'Mad Devs: Software & Mobile App Development Company',
      description: '',
      ogUrl: 'https://maddevs.io/godee'
    };
  },
  head () {
    return {
      title: this.title,
      meta: [
        { name: 'description', content: this.description },
        // Facebook / Open Graph
        { property: 'og:url', content: this.ogUrl },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: this.title },
        { property: 'og:description', content: this.description },
        { property: 'og:image', content: 'https://maddevs.io/Open-Graph.png' }
      ]
    };
  }
};
</script>

<style lang="scss">
  @import '../../assets/styles/vars';

  .main {
    background-color: $bgcolor--white;
  }
</style>

