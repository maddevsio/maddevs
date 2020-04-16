<template>
  <main class="main">
    <Banner />
    <ItOutsourcing />
    <SoftwareDevelopment />
  </main>
</template>

<script>
import Banner from '@/components/Services/Banner';
import ItOutsourcing from '@/components/Services/ItOutsourcing';
import SoftwareDevelopment from '@/components/Services/SoftwareDevelopment';

export default {
  name: 'main-services',
  components: {
    Banner,
    ItOutsourcing,
    SoftwareDevelopment
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