<template>
  <main class="main">
    <GDPR />
  </main>
</template>

<script>
import GDPR from '@/components/core/GDPR'
import { getMetadata, buildHead } from '@/data/seo'
import initLazyLoadMixin from '@/mixins/initLazyLoadMixin'

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
