<template>
  <main class="main">
    <Main />
  </main>
</template>

<script>
import Main from '@/components/CooperationModels/Main'
import { getMetadata, buildHead } from '@/data/seo'
import initLazyLoadMixin from '@/mixins/initLazyLoadMixin'

export default {
  name: 'CooperationModels',
  components: {
    Main,
  },

  mixins: [initLazyLoadMixin],

  head() {
    return buildHead(getMetadata('cooperation-models'))
  },

  mounted() {
    this.$lazyLoad.init()
  },
}
</script>
