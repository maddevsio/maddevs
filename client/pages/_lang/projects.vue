<template>
  <main class="main">
    <BannerContainer />
    <CaseStudies />
    <Customers />
    <OpenSource />
  </main>
</template>

<script>
import BannerContainer from '@/containers/BannerContainer';
import CaseStudies from '@/components/About/CaseStudies';
import Customers from '@/components/Projects/Customers';
import OpenSource from '@/components/Projects/OpenSource';

export default {
  name: 'main-projects',
  components: {
    BannerContainer,
    CaseStudies,
    Customers,
    OpenSource
  },
  data() {
    return {
      title: 'Mad Devs Projects',
      description: '',
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
        { property: 'og:image', content: 'https://maddevs.io/Open-Graph.png' }
      ]
    };
  }
};
</script>
