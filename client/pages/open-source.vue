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
    once: true,
  })],

  head() {
    return buildHead(getMetadata('openSource'))
  },

  mounted() {
    this.$lazyLoad.init()
  },
}
</script>
