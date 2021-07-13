<template>
  <main class="main">
    <Main />
  </main>
</template>

<script>
import Main from '@/components/OpenSource/Main'
import { getMetadata, buildHead } from '@/data/seo'
import initLazyLoadMixin from '@/mixins/initLazyLoadMixin'
import animateOnScrollMixin from '@/mixins/animateOnScrollMixin'

import featureFlag from '@/featureFlags/featureFlag'

export default {
  name: 'OpenSource',
  components: {
    Main,
  },

  mixins: [initLazyLoadMixin, animateOnScrollMixin({
    offset: 200,
    delay: 50,
    anchorPlacement: 'top-center',
    duration: 1000,
  })],

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
