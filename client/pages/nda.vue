<template>
  <main class="main">
    <NDA />
  </main>
</template>

<script>
import NDA from '@/components/core/NDA'
import { getMetadata, buildHead } from '@/data/seo'
import initLazyLoadMixin from '@/mixins/initLazyLoadMixin'

export default {
  name: 'MainNda',
  components: {
    NDA,
  },

  mixins: [initLazyLoadMixin],

  head() {
    return buildHead(getMetadata('nda'))
  },
}
</script>
