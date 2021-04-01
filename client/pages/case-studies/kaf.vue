<template>
  <main class="case">
    <CaseHeader
      :header-logo="headerLogo"
      video-name=""
    >
      <h1
        slot="title"
        class="case_header-title"
      >
        The Evolution <br>
        of Yourcast.TV
      </h1>
      <p
        slot="description"
        class="case_header-description"
      >
        Mad Devs developed a secure and private video streaming service and live <br>
        video broadcasting cinema to provide entertainment experience to isolated <br>
        groups feeling homesick.
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
import CaseHeader from '@/components/Cases/CaseHeader'
import Footer from '@/components/Cases/Footer'
import Main from '@/components/Cases/kaf/Main'
import initLazyLoadMixin from '@/mixins/initLazyLoadMixin'

export default {
  name: 'CaseKaf',
  components: {
    CaseHeader,
    Footer,
    Main,
  },

  mixins: [initLazyLoadMixin],

  data() {
    return {
      headerLogo: {
        width: 387,
        height: 81.23,
        pictureFolder: 'kaf',
        fileName: 'kaf-logo',
        alt: '',
      },
    }
  },
}
</script>

<style lang="scss">
@import '../../assets/styles/cases/base';
@import '../../assets/styles/cases/mixins';
@import '../../assets/styles/cases/components';
@import '../../assets/styles/cases/kaf/styles';
@import '../../assets/styles/cases/media';
</style>
