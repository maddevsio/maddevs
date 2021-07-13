<template>
  <main class="case case--veeqo">
    <CaseHeader
      :logo="logo"
      project="veeqo"
      video-name="/videos/veeqo-banner.mp4"
      video-fallback-path="/images/Cases/veeqo/svg/veeqo-banner-bg.svg"
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
        Our DevOps team optimized the infrastructure for Veeqo, an inventory <br> and shipping <span class="case_nowrap">e-commerce</span> platform, and made it highly efficient, smooth, <br> and cost-effective for our partners.
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
        width="270"
        height="57"
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
import Main from '@/components/Cases/veeqo/Main'
import initLazyLoadMixin from '@/mixins/initLazyLoadMixin'
import { getMetadata, buildHead } from '@/data/seo'

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
        width: 309,
        height: 114,
        folder: 'veeqo',
        file: 'veeqo-logotype',
        alt: 'Veeqo an Inventory Management Platform’s Logo.',
      },
    }
  },

  head() {
    return buildHead({
      ...getMetadata('veeqo'),
      image: 'https://maddevs.io/veeqo-case.jpg',
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
@import '../../assets/styles/cases/media';

.case {
  &_header-veeqo {
    background-color: rgba(16, 17, 19, 0.5);
  }

  &_veeqo-logotype {
    width: 309px;
    height: 114px;
    margin-left: 114px;

    @media screen and (max-width: 1170px) {
      margin-left: 0;
      margin-bottom: 30px;
    }

    @media screen and (max-width: 655px) {
      width: 219px;
      height: 90px;
    }

    @media screen and (max-width: 370px) {
      width: 190px;
      height: 70px;
      margin-bottom: 20px;
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
