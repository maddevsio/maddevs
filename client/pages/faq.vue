<template>
  <main class="main">
    <FAQ />
  </main>
</template>

<script>
import FAQ from '@/components/FAQ'
import { getMetadata, buildHead } from '@/data/seo'
import initLazyLoadMixin from '@/mixins/initLazyLoad'

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
