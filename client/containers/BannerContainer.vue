<template>
    <div class="container banner-container">
      <AboutBanner v-if="currentPage === 'index'"/>
      <ServicesBanner v-if="currentPage === 'services'"/>
      <ProjectsBanner v-if="currentPage === 'projects'"/>
      <CareersBanner v-if="currentPage === 'careers'"/>
    </div>
</template>

<script>
import AboutBanner from '@/components/Banner/AboutBanner';
import ServicesBanner from '@/components/Banner/ServicesBanner';
import ProjectsBanner from '@/components/Banner/ProjectsBanner';
import CareersBanner from '@/components/Banner/CareersBanner';

export default {
  name: 'BannerContainer',
  components: {
    AboutBanner,
    ServicesBanner,
    ProjectsBanner,
    CareersBanner
  },
  mounted() {
    if ($nuxt.$route.name) {
      this.currentPage = $nuxt.$route.name;
    }
  },
  data() {
    return {
      currentPage: null
    };
  }
};
</script>

<style lang="scss">
  @import '../assets/styles/vars';

  .banner-container {
    width: 100%;
    height: 100%;
    position: relative;
    background-color: $bgcolor--black;

    .banner-content {
      width: 100%;
      height: 100%;
      padding-top: 190px;
    }

    .banner-main_title,
    .banner-main_title--white,
    .banner-main_title--white-first {
      font-family: 'Hoves-Bold';
      font-style: normal;
      font-weight: bold;
      font-size: 10.4vw;
      color: $text-color--black;
      -webkit-text-stroke: $text-stroke--white;
      line-height: 100%;
      letter-spacing: -9px;

      .main-title-white_part {
        color: $text-color--white;
        -webkit-text-stroke: 0;
      }

      &--white,
      &--white-first {
        color: $text-color--white;
        -webkit-text-stroke: 0;
      }
    }

    .text-content_wrapper {
      display: flex;
      padding-bottom: 12vw;
    }
  }

  @media only screen and (max-width: 1024px) {
    .banner-container {
      .banner-content {
        padding-top: 0;
      }
    }
  }

  @media only screen and (max-width: 610px) {
    .banner-container {
      .banner-main_title--white-first {
        display: inline;
      }
    }
  }

  @media only screen and (max-width: 755px) {
    .banner-container {
      .banner-main_title,
      .banner-main_title--white,
      .banner-main_title--white-first {
        font-size: 15vw;
        letter-spacing: -2px;
        line-height: 17vw;
        padding-bottom: 23vw;
      }
    }
  }
</style>
