<template>
  <section>
    <About />
    <BenefitsFromPekloTool />
    <HowPekloToolWorks />
    <KeywordGrouping />
    <ClusterisationAlgorithm />
    <PekloToolUnderTheHood />
    <Technologies />
    <Team />
  </section>
</template>

<script>
import About from '@/components/Cases/peklo/About'
import BenefitsFromPekloTool from '@/components/Cases/peklo/BenefitsFromPekloTool'
import HowPekloToolWorks from '@/components/Cases/peklo/HowPekloToolWorks'
import KeywordGrouping from '@/components/Cases/peklo/KeywordGrouping'
import ClusterisationAlgorithm from '@/components/Cases/peklo/ClusterisationAlgorithm'
import PekloToolUnderTheHood from '@/components/Cases/peklo/PekloToolUnderTheHood'
import Technologies from '@/components/Cases/peklo/Technologies'
import Team from '@/components/Cases/peklo/Team'

export default {
  name: 'Main',
  components: {
    About,
    BenefitsFromPekloTool,
    HowPekloToolWorks,
    KeywordGrouping,
    ClusterisationAlgorithm,
    PekloToolUnderTheHood,
    Technologies,
    Team,
  },
}
</script>
