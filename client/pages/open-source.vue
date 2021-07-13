<template>
  <main class="main">
    <Main />
  </main>
</template>

<script>
import Main from '@/components/OpenSource/Main'
import initLazyLoadMixin from '@/mixins/initLazyLoadMixin'
import { getMetadata, buildHead } from '@/data/seo'

import featureFlag from '@/featureFlags/featureFlag'

export default {
  name: 'OpenSource',
  components: {
    Main,
  },

  mixins: [initLazyLoadMixin],

  asyncData({ error }) {
    if (!featureFlag('openSourcePage')) return error({ statusCode: 404, message: 'Page not found' })
    return {}
  },

  head() {
    return buildHead(getMetadata('openSource'))
  },

  mounted() {
    this.$lazyLoad.init()
  },
}
</script>
