<template>
  <main class="main">
    <Main />
  </main>
</template>

<script>
import Main from '@/components/Careers/Main'
import { getMetadata, buildHead } from '@/data/seo'

export default {
  name: 'MainCareers',
  components: {
    Main,
  },

  head() {
    return buildHead(getMetadata('careers'))
  },

  mounted() {
    this.$lazyLoad.init()
  },
}
</script>
