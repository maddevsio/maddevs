<template>
  <main class="main">
    <Main />
  </main>
</template>

<script>
import Main from '@/components/DeliveryModels/Main'
import { getMetadata, buildHead } from '@/data/seo'
import initLazyLoadMixin from '@/mixins/initLazyLoadMixin'

export default {
  name: 'DeliveryModels',
  components: {
    Main,
  },

  mixins: [initLazyLoadMixin],

  head() {
    return buildHead(getMetadata('deliveryModels'))
  },

  mounted() {
    this.$lazyLoad.init()
  },
}
</script>
