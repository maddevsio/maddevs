<template>
  <section>
    <About />
    <BenefitsFromPekloTool />
    <HowPekloToolWorks />
    <KeywordGrouping />
    <ClusterisationAlgorithm />
    <PekloToolUnderTheHood />
  </section>
</template>

<script>
import About from '@/components/Cases/peklo/About'
import BenefitsFromPekloTool from '@/components/Cases/peklo/BenefitsFromPekloTool'
import HowPekloToolWorks from '@/components/Cases/peklo/HowPekloToolWorks'
import KeywordGrouping from '@/components/Cases/peklo/KeywordGrouping'
import ClusterisationAlgorithm from '@/components/Cases/peklo/ClusterisationAlgorithm'
import PekloToolUnderTheHood from '@/components/Cases/peklo/PekloToolUnderTheHood'

export default {
  name: 'Main',
  components: {
    About,
    BenefitsFromPekloTool,
    HowPekloToolWorks,
    KeywordGrouping,
    ClusterisationAlgorithm,
    PekloToolUnderTheHood,
  },
}
</script>
