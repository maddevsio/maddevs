<template>
  <main class="main">
    <Banner />
  </main>
</template>

<script>
import Banner from '@/components/Ebook/Banner'
import { getMetadata, buildHead } from '@/data/seo'
import initLazyLoadMixin from '@/mixins/initLazyLoadMixin'

import featureFlag from '@/featureFlags/featureFlag'

export default {
  name: 'MainEbook',
  components: {
    Banner,
  },

  mixins: [initLazyLoadMixin],

  // NOTE: Remove if need show this page on production
  asyncData({ error }) {
    if (!featureFlag('ebookPage')) return error({ statusCode: 404, message: 'Page not found' })
    return {}
  },

  head() {
    return buildHead(getMetadata('ebook'))
  },
}
</script>
