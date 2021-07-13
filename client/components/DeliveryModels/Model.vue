<template>
  <div class="delivery-model">
    <div class="container delivery-model__container">
      <ModelBanner
        :uid="uid"
        :title="title"
        :subtitle="subtitle"
      />
    </div>
    <div class="delivery-model--bg-white">
      <div class="container delivery-model__container">
        <ModelOptimal :list-items="optimalModelFor" />
        <ModelProcess v-bind="process" />
      </div>
      <CTABanner />
    </div>
  </div>
</template>

<script>
import ModelBanner from '@/components/DeliveryModels/ModelBanner'
import ModelOptimal from '@/components/DeliveryModels/ModelOptimal'
import ModelProcess from '@/components/DeliveryModels/ModelProcess'
import CTABanner from '@/components/DeliveryModels/CTABanner'

export default {
  name: 'Model',
  components: {
    ModelBanner,
    ModelOptimal,
    ModelProcess,
    CTABanner,
  },

  props: {
    uid: {
      type: String,
      default: '',
    },

    title: {
      type: String,
      default: '',
    },

    subtitle: {
      type: String,
      default: '',
    },

    optimalModelFor: {
      type: Array,
      default: () => ([]),
    },

    process: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>

<style lang="scss" scoped>
.delivery-model {
  &--bg-white {
    background-color: $bgcolor--white-primary;
  }
  &__container {
    max-width: 816px;
  }
}
</style>
