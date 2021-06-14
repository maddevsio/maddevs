<template>
  <div class="cooperation-model">
    <div class="container cooperation-model__container">
      <ModelBanner />
    </div>
    <div class="cooperation-model--bg-white">
      <div class="container cooperation-model__container">
        <ModelOptimal :list-items="optimalModelFor" />
        <ModelProcess />
      </div>
      <CTABanner />
    </div>
  </div>
</template>

<script>
import ModelBanner from '@/components/CooperationModels/ModelBanner'
import ModelOptimal from '@/components/CooperationModels/ModelOptimal'
import ModelProcess from '@/components/CooperationModels/ModelProcess'
import CTABanner from '@/components/CooperationModels/CTABanner'

export default {
  name: 'Model',
  components: {
    ModelBanner,
    ModelOptimal,
    ModelProcess,
    CTABanner,
  },

  props: {
    optimalModelFor: {
      type: Array,
      default: () => ([]),
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_vars';

.cooperation-model {
  &--bg-white {
    background-color: $bgcolor--white-primary;
  }
  &__container {
    max-width: 816px;
  }
}
</style>
