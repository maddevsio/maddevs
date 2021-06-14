<template>
  <div class="cooperation-models">
    <Banner />
    <ModelsGrid />
    <GetPresentation />
    <div class="cooperation-models--white-sections">
      <CustomerTestimonials />
      <CTABanner />
    </div>
  </div>
</template>

<script>
import Banner from '@/components/CooperationModels/Banner'
import ModelsGrid from '@/components/CooperationModels/ModelsGrid'
import GetPresentation from '@/components/CooperationModels/GetPresentation'
import CustomerTestimonials from '@/components/CooperationModels/CustomerTestimonials'
import CTABanner from '@/components/CooperationModels/CTABanner'

export default {
  name: 'Main',
  components: {
    Banner,
    ModelsGrid,
    GetPresentation,
    CustomerTestimonials,
    CTABanner,
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_vars';

.cooperation-models {
  &--white-sections {
    background-color: $bgcolor--white-primary;
  }
}
</style>
