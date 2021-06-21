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
import { buildHead, getMetadata } from '@/data/seo'

export default {
  name: 'DeliveryModel',
  components: {
    Model,
  },

  mixins: [initLazyLoadMixin],

  asyncData({ params, error }) {
    const model = deliveryModels[params.uid]

    if (model) {
      return {
        uid: params.uid,
        model,
      }
    }
    return error({ statusCode: 404, message: 'Page not found' })
  },

  head() {
    return buildHead(getMetadata(this.uid))
  },

  mounted() {
    this.$lazyLoad.init()
  },
}
</script>
