<template>
  <main class="case case--yourcast">
    <CaseHeader
      :logo="logo"
      project="yourcast"
      video-name="/videos/yourcast-banner.mp4"
      video-fallback-path="/images/Cases/yourcast/png/banner-bg.png"
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
      <img
        slot="icon"
        :data-src="require(`@/assets/img/Studies/svg/sjmc-footer.svg`)"
        width="253"
        height="113"
        alt="SJMC"
        class="case_logotype-sjmc img_lazy"
      >
      The maintenance <br class="case_mobile-break-sjmc">
      of memory: <br>
      Sir John Monash <br class="case_mobile-break-sjmc">
      Centre
    </Footer>
  </main>
</template>

<script>
import CaseHeader from '@/components/Cases/shared/CaseHeader'
import Footer from '@/components/Cases/shared/CaseFooter'
import Main from '@/components/Cases/yourcast/Main'
import initLazyLoadMixin from '@/mixins/initLazyLoadMixin'
import { getMetadata, buildHead } from '@/data/seo'

export default {
  name: 'CaseYourcast',
  components: {
    CaseHeader,
    Footer,
    Main,
  },

  mixins: [initLazyLoadMixin],

  data() {
    return {
      logo: {
        width: 387,
        height: 81.23,
        folder: 'yourcast',
        file: 'yourcast-logo',
        alt: 'YourcastTV - Video Streaming Platform Logo.',
      },
    }
  },

  head() {
    return buildHead({
      ...getMetadata('yourcast'),
      image: 'https://maddevs.io/yourcast.jpg',
    })
  },

  mounted() {
    this.$lazyLoad.init()
  },
}
</script>

<style lang="scss">
@import '../../assets/styles/cases/base';
@import '../../assets/styles/cases/components';
@import '../../assets/styles/cases/yourcast/styles';
@import '../../assets/styles/cases/media';
</style>
