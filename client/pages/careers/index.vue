<template>
  <main class="main">
    <CareersBanner />
    <Careers />
  </main>
</template>

<script>
import CareersBanner from '@/components/core/banners/CareersBanner'
import Careers from '@/components/Careers/shared/Careers'
import { getMetadata, buildHead } from '@/data/seo'
import initLazyLoadMixin from '@/mixins/initLazyLoadMixin'

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
