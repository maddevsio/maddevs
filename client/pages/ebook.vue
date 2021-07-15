<template>
  <main class="main">
    <Banner />
  </main>
</template>

<script>
import Banner from '@/components/Ebook/Banner'
import { getMetadata, buildHead } from '@/data/seo'
import initLazyLoadMixin from '@/mixins/initLazyLoadMixin'

export default {
  name: 'MainEbook',
  components: {
    Banner,
  },

  mixins: [initLazyLoadMixin],

  head() {
    return buildHead(getMetadata('ebook'))
  },
}
</script>
