<template>
  <main class="main">
    <Main />
  </main>
</template>

<script>
import Main from '@/components/Careers/Main'
import { getMetadata, buildHead } from '@/data/seo'
import initLazyLoadMixin from '@/mixins/initLazyLoadMixin'
import animateOnScrollMixin from '@/mixins/animateOnScrollMixin'

export default {
  name: 'MainCareers',
  components: {
    Main,
  },

  mixins: [initLazyLoadMixin, animateOnScrollMixin({
    offset: 200,
    delay: 50,
    anchorPlacement: 'top-center',
    duration: 1000,
  })],

  head() {
    return buildHead(getMetadata('careers'))
  },

  mounted() {
    this.$lazyLoad.init()
  },
}
</script>
