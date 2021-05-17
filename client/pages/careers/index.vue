<template>
  <main class="main">
    <Main v-if="featureFlag('careersMain')" />
    <div v-else>
      <CareersBanner />
      <Careers />
    </div>
  </main>
</template>

<script>
import Main from '@/components/Careers/Main'
import Careers from '@/components/Careers/shared/Careers'
import CareersBanner from '@/components/core/banners/CareersBanner'
import { getMetadata, buildHead } from '@/data/seo'
import initLazyLoadMixin from '@/mixins/initLazyLoadMixin'

export default {
  name: 'MainCareers',
  components: {
    Main,
    Careers,
    CareersBanner,
  },

  mixins: [initLazyLoadMixin],

  head() {
    return buildHead(getMetadata('careers'))
  },

  mounted() {
    this.$lazyLoad.init()
  },
}
</script>
