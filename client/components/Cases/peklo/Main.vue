<template>
  <section>
    <About />
    <BenefitsFromPekloTool />
    <HowPekloToolWorks />
    <KeywordGrouping />
  </section>
</template>

<script>
import About from '@/components/Cases/peklo/About'
import BenefitsFromPekloTool from '@/components/Cases/peklo/BenefitsFromPekloTool'
import HowPekloToolWorks from '@/components/Cases/peklo/HowPekloToolWorks'
import KeywordGrouping from '@/components/Cases/peklo/KeywordGrouping'

export default {
  name: 'Main',
  components: {
    About,
    BenefitsFromPekloTool,
    HowPekloToolWorks,
    KeywordGrouping,
  },
}
</script>
