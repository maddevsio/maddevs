<template>
  <section>
    <About />
    <BenefitsFromPekloTool />
    <HowPekloToolWorks />
  </section>
</template>

<script>
import About from '@/components/Cases/peklo/About'
import BenefitsFromPekloTool from '@/components/Cases/peklo/BenefitsFromPekloTool'
import HowPekloToolWorks from '@/components/Cases/peklo/HowPekloToolWorks'

export default {
  name: 'Main',
  components: {
    About,
    BenefitsFromPekloTool,
    HowPekloToolWorks,
  },
}
</script>
