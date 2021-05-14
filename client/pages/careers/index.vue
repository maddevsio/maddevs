<template>
  <main class="main">
    <Main />
  </main>
</template>

<script>
import Main from '@/components/Careers/Main'
import { getMetadata, buildHead } from '@/data/seo'
import initLazyLoadMixin from '@/mixins/initLazyLoadMixin'

export default {
  name: 'MainCareers',
  components: {
    Main,
  },

  mixins: [initLazyLoadMixin],

  head() {
    return buildHead(getMetadata('careers'))
  },

  mounted() {
    this.$lazyLoad.init()
  },
}
</script>
