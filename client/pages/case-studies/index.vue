<template>
  <main class="main"></main>
</template>

<script>
import { getMetadata, buildHead } from '@/data/seo'
import initLazyLoadMixin from '@/mixins/initLazyLoadMixin'

export default {
  name: 'MainCaseStudies',
  components: {},

  mixins: [initLazyLoadMixin],

  head() {
    return buildHead(getMetadata('caseStudies'))
  },
}
</script>
