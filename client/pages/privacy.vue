<template>
  <main class="main">
    <Privacy />
  </main>
</template>

<script>
import Privacy from '@/components/core/Privacy'
import { getMetadata, buildHead } from '@/data/seo'
import initLazyLoadMixin from '@/mixins/initLazyLoadMixin'

export default {
  name: 'MainPrivacy',
  components: {
    Privacy,
  },

  mixins: [initLazyLoadMixin],

  head() {
    return buildHead(getMetadata('privacy'))
  },
}
</script>
