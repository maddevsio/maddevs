<template>
  <main class="main">
    <Privacy />
  </main>
</template>

<script>
import Privacy from '@/components/Privacy';

export default {
  name: 'main-privacy',
  components: {
    Privacy
  },
  data() {
    return {
      title: 'Mad Devs Privacy Policy',
      description: 'Mad Devs’ Privacy Policy: Website Acceptable Use Terms.',
      ogUrl: 'https://maddevs.io/privacy'
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
        {
          property: 'og:image',
          content: 'https://maddevs.io/Open-Graph.png'
        }
      ]
    };
  }
};
</script>
