<template>
  <main class="main">
    <GDPR />
  </main>
</template>

<script>
import GDPR from '@/components/GDPR';

export default {
  name: 'main-gdpr',
  components: {
    GDPR
  },
  data() {
    return {
      title: 'Mad Devs GDPR',
      description: '',
      ogUrl: 'https://maddevs.io/en/gdpr'
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
