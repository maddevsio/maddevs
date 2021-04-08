<template>
  <main class="main case">
    <CaseHeader
      :logo="logo"
      video-name="/videos/main.ef19480.mp4"
      video-fallback-path="/images/Cases/nambafood/jpg/blank.jpg"
    >
      <h1
        slot="title"
        class="case_header-title"
      >
        Namba Food
      </h1>
      <p
        slot="description"
        class="case_header-description"
      >
        Mad Devs created the Namba Food delivery service from scratch. The solution <br>
        orchestrates feature-rich apps for couriers, end-users, and business owners.
      </p>
    </CaseHeader>
    <Main />
    <Footer
      link="/case-studies/sir-john-monash-centre/"
      class-name="sjmc"
    >
      <div
        slot="icon"
        class="case_logotype-sjmc"
      />
      The maintenance <br class="case_mobile-break-sjmc">
      of memory: <br>
      Sir John Monash <br class="case_mobile-break-sjmc">
      Centre
    </Footer>
  </main>
</template>

<script>
import CaseHeader from '@/components/Cases/shared/CaseHeader'
import Main from '@/components/Cases/nambafood/Main'
import Footer from '@/components/Cases/shared/CaseFooter'
import { getMetadata, buildHead } from '@/data/seo'
import initLazyLoadMixin from '@/mixins/initLazyLoadMixin'

export default {
  name: 'NambaFood',
  components: {
    CaseHeader,
    Main,
    Footer,
  },

  mixins: [initLazyLoadMixin],

  data() {
    return {
      logo: {
        width: 259,
        height: 82,
        folder: 'nambafood',
        file: 'nambafood-logo',
        alt: '',
      },
    }
  },

  head() {
    return buildHead({
      ...getMetadata('nambafood'),
      image: 'https://maddevs.io/namba-food.png',
    })
  },
}
</script>

<style lang="scss">
@import '../../assets/styles/cases/base';
@import '../../assets/styles/cases/mixins';
@import '../../assets/styles/cases/components';
@import '../../assets/styles/cases/nambafood/styles';
@import '../../assets/styles/cases/media';
</style>
