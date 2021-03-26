<template>
  <main class="main">
    <CareersBanner />
    <Careers />
  </main>
</template>

<script>
import CareersBanner from '@/components/Banner/CareersBanner'
import Careers from '@/components/Careers/CareersForm'
import { getMetadata, buildHead } from '@/data/seo'
import initLazyLoadMixin from '@/mixins/initLazyLoad'

export default {
  name: 'MainCareers',
  components: {
    CareersBanner,
    Careers,
  },

  mixins: [initLazyLoadMixin],

  head() {
    return buildHead(getMetadata('careers'))
  },
}
</script>
