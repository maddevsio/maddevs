<template>
  <div class="cooperation-models">
    <Banner />
    <ModelsGrid />
    <Presentation />
    <div class="cooperation-models--bg-white">
      <CustomerTestimonials />
      <CTABanner />
    </div>
  </div>
</template>

<script>
import Banner from '@/components/CooperationModels/Banner'
import ModelsGrid from '@/components/CooperationModels/ModelsGrid'
import Presentation from '@/components/CooperationModels/Presentation'
import CustomerTestimonials from '@/components/CooperationModels/CustomerTestimonials'
import CTABanner from '@/components/CooperationModels/CTABanner'

export default {
  name: 'Main',
  components: {
    Banner,
    ModelsGrid,
    Presentation,
    CustomerTestimonials,
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
