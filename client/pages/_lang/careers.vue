<template>
  <main class="main">
    <BannerContainer />
    <Careers />
  </main>
</template>

<script>
import BannerContainer from '@/containers/BannerContainer';
import Careers from '@/components/Careers/CareersForm';

export default {
  name: 'main-careers',
  components: {
    BannerContainer,
    Careers
  },
  data() {
    return {
      title: 'Mad Devs Careers',
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
        {
          property: 'og:image',
          content: 'https://maddevs.io/static/Open-Graph.png'
        }
      ]
    };
  }
};
</script>
