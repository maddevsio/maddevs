<template>
  <main class="main">
    <Main />
  </main>
</template>

<script>
import Main from '@/components/DeliveryModels/Main'
import { getMetadata, buildHead } from '@/data/seo'
import initLazyLoadMixin from '@/mixins/initLazyLoadMixin'

import featureFlag from '@/featureFlags/featureFlag'

export default {
  name: 'DeliveryModels',
  components: {
    Main,
  },

  mixins: [initLazyLoadMixin],

  async asyncData({ error }) {
    if (!featureFlag('deliveryModels')) return error({ statusCode: 404, message: 'Page not found' })
    return {}
  },

  head() {
    return buildHead(getMetadata('deliveryModels'))
  },

  mounted() {
    this.$lazyLoad.init()
  },
}
</script>
