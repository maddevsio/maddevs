<template>
  <div class="case_root case--godee">
    <Header />
    <Main />
  </div>
</template>

<script>
import Main from '@/components/Cases/godee/Main'
import Header from '@/components/core/Header/Header'
import { getMetadata, buildHead } from '@/data/seo'
import initLazyLoadMixin from '@/mixins/initLazyLoadMixin'

export default {
  name: 'GoDeeCase',
  components: {
    Header,
    Main,
  },

  mixins: [initLazyLoadMixin],

  layout: 'godee',

  head() {
    return buildHead({
      ...getMetadata('godee'),
      image: 'https://maddevs.io/godee.png',
    })
  },
}
</script>

<style lang="scss">
@import '../../assets/styles/cases/base';
@import '../../assets/styles/cases/mixins';
@import '../../assets/styles/cases/components';
@import '../../assets/styles/cases/godee/styles';
@import '../../assets/styles/cases/media';
</style>
