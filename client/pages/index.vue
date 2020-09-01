<template>
  <main class="main">
    <AboutBanner />
    <WeCreateItProjectFor />
    <TechnologiesAndTools />
    <CaseStudies />
    <QuickProjectStart />
    <CustomerTestimonials />
    <WhyUs />
    <MeetOurExperts />
  </main>
</template>

<script>
import AboutBanner from '@/components/Banner/AboutBanner';
import WeCreateItProjectFor from '@/components/About/WeCreateItProjectFor';
import TechnologiesAndTools from '@/components/About/TechnologiesAndTools';
import CaseStudies from '@/components/About/CaseStudies';
import QuickProjectStart from '@/components/About/QuickProjectStart';
import CustomerTestimonials from '@/components/About/CustomerTestimonials';
import WhyUs from '@/components/About/WhyUs';
import MeetOurExperts from '@/components/About/MeetOurExperts';

export default {
  name: 'About',
  components: {
    AboutBanner,
    WeCreateItProjectFor,
    TechnologiesAndTools,
    CustomerTestimonials,
    CaseStudies,
    QuickProjectStart,
    WhyUs,
    MeetOurExperts
  },
  data() {
    // TODO remove console after optimize perfomanceF
    console.log('test fonts v1.6');
    return {
      title: 'Mad Devs: Custom Software Development Company',
      description: 'Mad Devs develops enterprise-level custom software solutions & mobile apps for finance, transportation, logistics, security, edtech, cloudtech & advertising industries.',
      ogUrl: 'https://maddevs.io'
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
