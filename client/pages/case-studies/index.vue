<template>
  <main class="main">
    <TitleDesc />
    <CasesList />
    <Customers light />
    <BuildDevTeam />
  </main>
</template>

<script>
import TitleDesc from '@/components/Cases/TitleDesc'
import CasesList from '@/components/Cases/CasesList'
import Customers from '@/components/Projects/Customers'
import BuildDevTeam from '@/components/Cases/BuildDevTeam'
import { getMetadata, buildHead } from '@/data/seo'
import initLazyLoadMixin from '@/mixins/initLazyLoadMixin'

export default {
  name: 'MainCaseStudies',
  components: {
    TitleDesc,
    CasesList,
    Customers,
    BuildDevTeam,
  },

  mixins: [initLazyLoadMixin],

  head() {
    return buildHead(getMetadata('caseStudies'))
  },
}
</script>
