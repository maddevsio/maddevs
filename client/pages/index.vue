<template>
  <main class="main">
    <AboutBanner />
    <WeCreateItProjectsFor />
    <TechnologiesAndTools />
    <CaseStudies type="index" />
    <QuickProjectStart />
    <CustomerTestimonials />
    <CustomerRates />
    <MeetOurExperts />
  </main>
</template>

<script>
import AboutBanner from '@/components/core/banners/AboutBanner'
import WeCreateItProjectsFor from '@/components/About/WeCreateItProjectsFor'
import TechnologiesAndTools from '@/components/About/TechnologiesAndTools'
import CaseStudies from '@/components/core/CaseStudies'
import QuickProjectStart from '@/components/About/QuickProjectStart'
import CustomerTestimonials from '@/components/About/CustomerTestimonials'
import CustomerRates from '@/components/About/CustomerRates'
import MeetOurExperts from '@/components/About/MeetOurExperts'
import { getMetadata, buildHead } from '@/data/seo'
import initLazyLoadMixin from '@/mixins/initLazyLoadMixin'

export default {
  name: 'About',
  components: {
    AboutBanner,
    WeCreateItProjectsFor,
    TechnologiesAndTools,
    CustomerTestimonials,
    CaseStudies,
    QuickProjectStart,
    CustomerRates,
    MeetOurExperts,
  },

  mixins: [initLazyLoadMixin],

  head() {
    return buildHead(getMetadata('index'))
  },

  mounted() {
    this.$lazyLoad.init()
  },
}
</script>
