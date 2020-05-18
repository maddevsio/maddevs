<template>
  <main class="main">
    <Banner />
    <CaseStudies />
    <Customers />
  </main>
</template>

<script>
import Banner from '@/components/Banner';
import CaseStudies from '@/components/About/CaseStudies';
import Customers from '@/components/Projects/Customers';

export default {
  name: 'main-projects',
  components: {
    Banner,
    CaseStudies,
    Customers
  },
  data() {
    return {
      title: 'Mad Devs Projects',
      description: 'Example',
      ogUrl: 'https://maddevs.io/en/projects'
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
    };
  }
};
</script>
