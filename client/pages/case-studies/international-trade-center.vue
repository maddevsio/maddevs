<template>
  <main class="case case--veeqo">
    <CaseHeader
      :logo="logo"
      project="itc"
      video-name=""
      video-fallback-path=""
    >
      <h1
        slot="title"
        class="case_header-title"
      >
        Ready4Trade <br> Central Asia
      </h1>
      <p
        slot="description"
        class="case_header-description"
      >
        A web app customized for the delivery of export management coaching <br> missions that contributes to the development of <span class="case_nowrap">intra-regional</span> <br> and international trade in Central Asia
      </p>
    </CaseHeader>
    <Main />
    <Footer
      link="/case-studies/yourcast/"
      class-name="yourcast"
    >
      <img
        slot="icon"
        :data-src="require(`@/assets/img/Studies/svg/yourcast-logo.svg`)"
        alt="The Evolution of Yourcast.TV"
        class="case_logotype-yourcast img_lazy"
      >
      The Evolution of Yourcast.TV
    </Footer>
  </main>
</template>

<script>
import CaseHeader from '@/components/Cases/shared/CaseHeader'
import Footer from '@/components/Cases/shared/CaseFooter'
import Main from '@/components/Cases/itc/Main'
import initLazyLoadMixin from '@/mixins/initLazyLoadMixin'

export default {
  name: 'CaseITC',
  components: {
    CaseHeader,
    Footer,
    Main,
  },

  mixins: [initLazyLoadMixin],

  data() {
    return {
      logo: {
        width: 377,
        height: 154.95,
        folder: 'itc',
        file: 'itc-logo',
        alt: 'International trade center logo',
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

.case {
  &_header-itc {
    background-color: rgba(16, 17, 19, 0.5);
  }

  &_itc-logo {
    width: 377px;
    height: 154.95px;
    margin-left: 127px;
    margin-bottom: 32px;

    @media screen and (max-width: 1320px) {
      margin-left: 70px;
    }

    @media screen and (max-width: 1170px) {
      margin-left: 0;
      margin-bottom: 40px;
    }

    @media screen and (max-width: 655px) {
      width: 192px;
      height: 78.97px;
    }

    @media screen and (max-width: 370px) {

    }
  }

  &_nowrap {
    white-space: nowrap;
  }

  &_logotype-yourcast {
    width: 270px;
    height: 57px;
    margin-bottom: 30px;
  }

  &_title-yourcast {
    margin-bottom: 51px;

    @media screen and (max-width: 430px) {
      max-width: 205px;
    }
  }

  @media screen and (max-width: 768px) {
    &_logotype-yourcast {
      width: 200px;
      height: 44px;
      margin-bottom: 25px;
    }

    &_title-yourcast {
      margin-bottom: 41px;
    }
  }
}
</style>
