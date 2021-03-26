<template>
  <main class="main">
    <GDPR />
  </main>
</template>

<script>
import GDPR from '@/components/GDPR'
import { getMetadata, buildHead } from '@/data/seo'
import initLazyLoadMixin from '@/mixins/initLazyLoad'

export default {
  name: 'MainGdpr',
  components: {
    GDPR,
  },

  mixins: [initLazyLoadMixin],

  head() {
    return buildHead(getMetadata('gdpr'))
  },
}
</script>
