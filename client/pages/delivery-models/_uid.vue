<template>
  <main class="main">
    <Model
      :uid="uid"
      v-bind="model"
    />
  </main>
</template>

<script>
import Model from '@/components/DeliveryModels/Model'
import initLazyLoadMixin from '@/mixins/initLazyLoadMixin'
import { deliveryModels } from '@/data/deliveryModels'

import featureFlag from '@/featureFlags/featureFlag'

export default {
  name: 'DeliveryModel',
  components: {
    Model,
  },

  mixins: [initLazyLoadMixin],

  asyncData({ params, error }) {
    const openGraphUrl = `${process.env.domain}/delivery-models/${params.uid}/`
    const model = deliveryModels[params.uid]

    if (!featureFlag('deliveryModels')) return error({ statusCode: 404, message: 'Page not found' })
    if (model) {
      return {
        uid: params.uid,
        model,
        openGraphUrl,
      }
    }
    return error({ statusCode: 404, message: 'Page not found' })
  },

  mounted() {
    this.$lazyLoad.init()
  },
}
</script>
