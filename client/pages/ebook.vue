<template>
  <main class="main ebook-page">
    <Banner />
    <Learn />
    <Read />
    <Delivery />
  </main>
</template>

<script>
import Banner from '@/components/Ebook/Banner'
import Learn from '@/components/Ebook/Learn'
import Read from '@/components/Ebook/Read'
import Delivery from '@/components/Ebook/Delivery'
import { getMetadata, buildHead } from '@/data/seo'
import initLazyLoadMixin from '@/mixins/initLazyLoadMixin'
import animateOnScrollMixin from '@/mixins/animateOnScrollMixin'

import featureFlag from '@/featureFlags/featureFlag'

export default {
  name: 'MainEbook',
  components: {
    Banner,
    Learn,
    Read,
    Delivery,
  },

  mixins: [initLazyLoadMixin, animateOnScrollMixin({
    offset: 200,
    delay: 50,
    anchorPlacement: 'top-center',
    duration: 1000,
    once: true,
  })],

  // NOTE: Remove if need show this page on production
  asyncData({ error }) {
    if (!featureFlag('ebookPage')) return error({ statusCode: 404, message: 'Page not found' })
    return {}
  },

  head() {
    return buildHead(getMetadata('ebook'))
  },

  mounted() {
    this.$lazyLoad.init()
  },
}
</script>

<style lang="scss" scoped>
  .ebook-page {
    /deep/ .container {
      @media screen and (max-width: 1024px) {
        padding: 0 24px;
      }
    }
  }
</style>
