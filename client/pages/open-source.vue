<template>
  <main class="main">
    <Main />
  </main>
</template>

<script>
import Main from '@/components/OpenSource/Main'
import initLazyLoadMixin from '@/mixins/initLazyLoadMixin'
import { getMetadata, buildHead } from '@/data/seo'

export default {
  name: 'OpenSource',
  components: {
    Main,
  },

  mixins: [initLazyLoadMixin],

  head() {
    return buildHead(getMetadata('open-source'))
  },

  mounted() {
    this.$lazyLoad.init()
  },
}
</script>
