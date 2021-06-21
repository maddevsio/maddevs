<template>
  <main class="main">
    <Main />
  </main>
</template>

<script>
import Main from '@/components/DeliveryModels/Main'
import initLazyLoadMixin from '@/mixins/initLazyLoadMixin'
import { getMetadata, buildHead } from '@/data/seo'

export default {
  name: 'DeliveryModels',
  components: {
    Main,
  },

  mixins: [initLazyLoadMixin],

  head() {
    return buildHead(getMetadata('delivery-models'))
  },

  mounted() {
    this.$lazyLoad.init()
  },
}
</script>
