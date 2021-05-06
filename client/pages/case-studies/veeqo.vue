<template>
  <main class="case case--yourcast">
    <CaseHeader
      :logo="logo"
      project="veeqo"
      video-name=""
      video-fallback-path="/images/Cases/veeqo/svg/veeqo-banner-fallback.svg"
    >
      <h1
        slot="title"
        class="case_header-title"
      >
        Optimization <br> for Veeqo
      </h1>
      <p
        slot="description"
        class="case_header-description"
      >
        Our DevOps team optimized the infrastructure for Veeqo, an inventory <br> and shipping e-commerce platform, and made it highly efficient, smooth, <br> and cost-effective for our partners.
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
import Main from '@/components/Cases/veeqo/Main'
import initLazyLoadMixin from '@/mixins/initLazyLoadMixin'

export default {
  name: 'CaseVeeqo',
  components: {
    CaseHeader,
    Footer,
    Main,
  },

  mixins: [initLazyLoadMixin],

  data() {
    return {
      logo: {
        width: 388,
        height: 172,
        folder: 'veeqo',
        file: 'veeqo-logo',
        alt: '',
      },
    }
  },

  mounted() {
    this.$lazyLoad.init()
  },
}
</script>

<style lang="scss">
@import '../../assets/styles/cases/base';
@import '../../assets/styles/cases/mixins';
@import '../../assets/styles/cases/components';
@import '../../assets/styles/cases/media';
</style>
