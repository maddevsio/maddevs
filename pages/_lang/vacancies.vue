<template>
  <main class="main">
    <Banner />
    <Contacts />
    <modal name="resume-form"></modal>
  </main>
</template>

<script>
import Banner from '@/components/Vacancies/Banner';
import Contacts from '@/components/Contacts';

export default {
  name: 'main-vacancies',
  props: ['language'],
  components: {
    Banner,
    Contacts
  },
  data() {
    return {
      title: this.$t('title-vacancies'),
      description: this.$t('meta-desc_vacancies'),
      ogUrl: this.$t('og_meta-url_vacancies'),
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
        { property: 'og:image', content: 'https://maddevs.io/static/Open-Graph.png' }
      ]
    }
  }
};
</script>
