<template>
  <div class="delivery-models">
    <Banner />
    <ModelsGrid />
    <Presentation />
    <div class="delivery-models--bg-white">
      <Testimonials />
      <CTABanner />
    </div>
  </div>
</template>

<script>
import Banner from '@/components/DeliveryModels/Banner'
import ModelsGrid from '@/components/DeliveryModels/ModelsGrid'
import Presentation from '@/components/DeliveryModels/Presentation'
import Testimonials from '@/components/DeliveryModels/Testimonials'
import CTABanner from '@/components/DeliveryModels/CTABanner'

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
.delivery-models {
  &--bg-white {
    background-color: $bgcolor--white-primary;
  }
}
</style>
