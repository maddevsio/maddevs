<template>
  <main class="main case case--sjmc">
    <CaseHeader
      :logo="logo"
      project="sjmc"
      video-name="/videos/sjmc/sjmc-main-video.b35a387.mp4"
      video-fallback-path="/images/Cases/sjmc/jpg/sjmc-main-video-preview.jpg"
    >
      <h1
        slot="title"
        class="case_header-title"
      >
        Sir John Monash <br>
        Centre
      </h1>
      <p
        slot="description"
        class="case_header-description"
      >
        The Sir John Monash Centre (SJMC) tells Australia’s story of the Western Front <br>
        during the First World War in the words of those who served.
      </p>
      <button
        slot="actions"
        class="case_play-button"
        data-testid="test-play-button"
        type="button"
        @click="openFullscreen()"
      >
        <img
          :data-src="require(`@/assets/img/Studies/svg/play-icon.svg`)"
          width="14"
          height="14"
          alt="Play"
          class="case_play-icon img_lazy"
        >
        View video about SJMC
      </button>
    </CaseHeader>
    <SJMCVideo />
    <section>
      <Main />
      <CaseFooter
        link="/case-studies/namba-food/"
        class-name="namba-food"
      >
        <img
          slot="icon"
          :data-src="require(`@/assets/img/Studies/svg/nambafood-footer.svg`)"
          width="200"
          height="63"
          alt="Namba Food"
          class="case_logotype-namba-food img_lazy"
        >
        Namba Food <br>
        Top Delivery Service in <br class="case_mobile-break-namba-food">
        Central Asia
      </CaseFooter>
    </section>
  </main>
</template>

<script>
import CaseHeader from '@/components/Cases/shared/CaseHeader'
import Main from '@/components/Cases/sjmc/Main'
import CaseFooter from '@/components/Cases/shared/CaseFooter'
import SJMCVideo from '@/components/Cases/sjmc/SJMCVideo'
import { getMetadata, buildHead } from '@/data/seo'
import { getPageScripts } from '@/data/pageScripts'
import initLazyLoadMixin from '@/mixins/initLazyLoadMixin'

export default {
  name: 'SirJohnMonashCentre',
  components: {
    CaseHeader,
    Main,
    CaseFooter,
    SJMCVideo,
  },

  mixins: [initLazyLoadMixin],

  data() {
    return {
      logo: {
        width: 242,
        height: 110,
        folder: 'sjmc',
        file: 'sjmc-logo',
        alt: 'Sjmc Logo',
      },
    }
  },

  head() {
    return buildHead({ ...getMetadata('sjmc'), image: 'https://maddevs.io/sjmc-case.png' }, getPageScripts('sjmc'))
  },

  mounted() {
    this.$lazyLoad.init()
  },

  methods: {
    openFullscreen() {
      this.$nuxt.$emit('open-fullscreen')
    },
  },
}
</script>

<style lang="scss">
@import '../../assets/styles/cases/base';
@import '../../assets/styles/cases/components';
@import '../../assets/styles/cases/sir-john-monash-centre/styles';
@import '../../assets/styles/cases/media';
</style>
