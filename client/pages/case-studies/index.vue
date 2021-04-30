<template>
  <main class="main">
    <TitleDesc />
    <CasesList />
  </main>
</template>

<script>
import TitleDesc from '@/components/Cases/TitleDesc'
import CasesList from '@/components/Cases/CasesList'
import { getMetadata, buildHead } from '@/data/seo'
import initLazyLoadMixin from '@/mixins/initLazyLoadMixin'

export default {
  name: 'MainCaseStudies',
  components: { TitleDesc, CasesList },

  mixins: [initLazyLoadMixin],

  head() {
    return buildHead(getMetadata('caseStudies'))
  },
}
</script>
