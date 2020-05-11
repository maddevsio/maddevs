<template>
  <main class="main">
    <Banner />
    <WeCreateItProjectFor />
    <TechnologiesAndTools />
    <CaseStudies />
    <QuickProjectStart />
    <CustomerTestimonials />
    <WhyUs />
  </main>
</template>

<script>
import Banner from '@/components/Banner';
import WeCreateItProjectFor from '@/components/About/WeCreateItProjectFor';
import TechnologiesAndTools from '@/components/About/TechnologiesAndTools';
import CaseStudies from '@/components/About/CaseStudies';
import QuickProjectStart from '@/components/About/QuickProjectStart';
import CustomerTestimonials from '@/components/About/CustomerTestimonials';
import WhyUs from '@/components/About/WhyUs';

export default {
  name: 'About',
  components: {
    Banner,
    WeCreateItProjectFor,
    TechnologiesAndTools,
    CustomerTestimonials,
    CaseStudies,
    QuickProjectStart,
    WhyUs
  },
  data() {
    return {
      title: this.$t('title-home'),
      description: this.$t('meta-desc_home'),
      ogUrl: this.$t('og_meta-url_home')
    };
  },
  head () {
    return {
      title: this.title,
      meta: [
        { name: 'description', content: this.description },
        { name: 'description', content: this.description },
        // Facebook / Open Graph
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
