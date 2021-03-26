<template>
  <main class="main">
    <NDA />
  </main>
</template>

<script>
import NDA from '@/components/NDA'
import { getMetadata, buildHead } from '@/data/seo'
import initLazyLoadMixin from '@/mixins/initLazyLoad'

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
