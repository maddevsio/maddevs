<template>
  <div class="case_root case--godee">
    <Header />
    <main
      id="case-scroll-container"
      ref="main"
      class="case case_parallax"
    >
      <div class="case_content-layer p-48_bottom media-p-24_bottom">
        <CaseHeader
          :logo="logo"
          project="godee"
          video-name="/videos/godee-case-main-video.mp4"
          video-fallback-path="/images/Cases/godee/jpg/godee-case-preview.jpg"
        >
          <h1
            slot="title"
            class="case_header-title"
          >
            Convenient shuttle <br>
            bus service
          </h1>
          <p
            slot="description"
            class="case_header-description"
          >
            Mad Devs helped GoDee with developing feature-rich software to re-invent <br>
            public mobility by building new smart ways of a daily commute.
          </p>
        </CaseHeader>
        <Main />
      </div>
      <CaseFooter
        link="/case-studies/namba-food/"
        class-name="namba-food"
      >
        <img
          slot="icon"
          :data-src="require(`@/assets/img/Studies/svg/nambafood-footer.svg`)"
          alt="Namba Food"
          class="case_logotype-namba-food img_lazy"
        >
        Namba Food <br>
        Top Delivery Service in <br class="case_mobile-break-namba-food">
        Central Asia
      </CaseFooter>
      <!-- Добавил главный футер сайта, так как из-за того что скролл на странице находиться у элемента .main, нельзя доскроллить фо футера -->
      <Footer class="background-color-black" />
    </main>
  </div>
</template>

<script>
import CaseFooter from '@/components/Cases/shared/CaseFooter'
import CaseHeader from '@/components/Cases/shared/CaseHeader'
import Main from '@/components/Cases/godee/Main'
import Footer from '@/components/core/Footer/Footer'
import Header from '@/components/core/Header/Header'
import { getMetadata, buildHead } from '@/data/seo'
import initLazyLoadMixin from '@/mixins/initLazyLoadMixin'

export default {
  name: 'GoDeeCase',
  components: {
    Footer,
    Header,
    CaseFooter,
    CaseHeader,
    Main,
  },

  mixins: [initLazyLoadMixin],

  layout: 'godee',
  data() {
    return {
      logo: {
        width: 293,
        height: 130,
        folder: 'godee',
        file: 'godee-logo',
        alt: '',
      },
    }
  },

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
