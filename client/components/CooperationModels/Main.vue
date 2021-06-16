<template>
  <div class="cooperation-models">
    <Banner />
    <ModelsGrid />
    <Presentation />
    <div class="cooperation-models--bg-white">
      <Testimonials />
      <CTABanner />
    </div>
  </div>
</template>

<script>
import Banner from '@/components/CooperationModels/Banner'
import ModelsGrid from '@/components/CooperationModels/ModelsGrid'
import Presentation from '@/components/CooperationModels/Presentation'
import Testimonials from '@/components/CooperationModels/Testimonials'
import CTABanner from '@/components/CooperationModels/CTABanner'

export default {
  name: 'Main',
  components: {
    Banner,
    ModelsGrid,
    Presentation,
    Testimonials,
    CTABanner,
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_vars';

.cooperation-models {
  &--bg-white {
    background-color: $bgcolor--white-primary;
  }
}
</style>
