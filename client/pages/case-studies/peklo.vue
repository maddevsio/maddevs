<template>
  <main class="case case--peklo">
    <CaseHeader
      :logo="logo"
      project="peklo"
      video-name="/videos/peklo-banner.mp4"
      video-fallback-path="/images/Cases/peklo/jpg/peklo-banner.jpg"
    >
      <h1
        slot="title"
        class="case_header-title"
      >
        Peklo Tool for better <br> ad campaigns
      </h1>
      <p
        slot="description"
        class="case_header-description"
      >
        Mad Devs developed parsing- and clusterisation-based software that <br> automates keyword grouping and text generation, making the launch <br> of contextual ads two times faster.
      </p>
    </CaseHeader>
    <Main />
    <Footer
      link="/case-studies/R4TCA-web-application/"
      class-name="itc"
    >
      <img
        slot="icon"
        :data-src="require(`@/assets/img/Studies/svg/itc.svg`)"
        width="195"
        height="72"
        alt="Ready4Trade Central Asiao"
        class="case_logotype-itc img_lazy"
      >
      Ready4Trade Central Asia
    </Footer>
  </main>
</template>

<script>
import CaseHeader from '@/components/Cases/shared/CaseHeader'
import Footer from '@/components/Cases/shared/CaseFooter'
import Main from '@/components/Cases/peklo/Main'
import initLazyLoadMixin from '@/mixins/initLazyLoadMixin'
import { getMetadata, buildHead } from '@/data/seo'
import animateOnScrollMixin from '@/mixins/animateOnScrollMixin'

export default {
  name: 'CaseITC',
  components: {
    CaseHeader,
    Footer,
    Main,
  },

  mixins: [initLazyLoadMixin, animateOnScrollMixin({
    offset: 200,
    delay: 50,
    anchorPlacement: 'top-center',
    duration: 1000,
    once: true,
  })],

  data() {
    return {
      logo: {
        width: 206.34,
        height: 149.71,
        folder: 'peklo',
        file: 'peklo-logo',
        alt: 'Peklo Tool for search ad campaigns',
      },
    }
  },

  head() {
    return buildHead({
      ...getMetadata('peklo'),
      image: 'https://maddevs.io/peklo.jpg',
    })
  },

  mounted() {
    this.$lazyLoad.init()
  },
}
</script>

<style lang="scss">
@import '@/assets/styles/cases/_base';
@import '@/assets/styles/cases/_mixins';
@import '@/assets/styles/cases/_components';
@import '@/assets/styles/cases/_media';

.case {
  &_header-peklo {
    background-color: rgba(16, 17, 19, 0.9);
  }

  &_header-title {
    @media screen and (max-width: 768px) {
      br {
        display: none;
      }
    }
  }

  &_peklo-logo {
    width: 206.34px;
    height: 149.71px;
    margin-left: 170px;

    @media screen and (max-width: 1320px) {
      margin-left: 70px;
    }

    @media screen and (max-width: 1170px) {
      margin-left: 0;
      margin-bottom: 30px;
    }

    @media screen and (max-width: 655px) {
      width: 137.86px;
      height: 99.25px;
    }
  }

  &_logotype-itc {
    width: 210px;
    height: 90px;
    margin-bottom: 30px;
  }

  &_title-itc {
    margin-bottom: 51px;

    @media screen and (max-width: 430px) {
      max-width: 190px;
    }
  }

  @media screen and (max-width: 768px) {
    &_logotype-itc {
      width: 135px;
      height: 55px;
      margin-bottom: 21px;
    }

    &_title-itc {
      margin-bottom: 31px;
    }
  }
}
</style>
