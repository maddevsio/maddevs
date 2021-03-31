<template>
  <main class="main">
    <FAQ />
  </main>
</template>

<script>
import FAQ from '@/components/core/FAQ'
import { getMetadata, buildHead } from '@/data/seo'
import initLazyLoadMixin from '@/mixins/initLazyLoadMixin'

export default {
  name: 'MainFaq',
  components: {
    FAQ,
  },

  mixins: [initLazyLoadMixin],

  head() {
    return buildHead(getMetadata('faq'))
  },
}
</script>
