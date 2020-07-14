<template>
  <section id="banner-container" class="banner-container">
    <div class="container">
      <AboutBanner v-if="currentPage === 'index'"/>
      <ServicesBanner v-if="currentPage === 'services'"/>
      <ProjectsBanner v-if="currentPage === 'projects'"/>
      <CareersBanner v-if="currentPage === 'careers'"/>
    </div>
  </section>
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
      font-size: 165px;
      color: $text-color--black;
      -webkit-text-stroke: $text-stroke--white;
      line-height: 100%;
      letter-spacing: -8px;

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
      padding-bottom: 180px;
    }
  }

  @media only screen and (max-width: 1620px) {
    .banner-container {
      .text-content_wrapper {
        display: flex;
      }
    }
  }

  @media only screen and (max-width: 1520px) {
    .banner-container {
      .text-content_wrapper {
        padding-bottom: 130px;
      }
    }
  }

  @media only screen and (max-width: 1480px) {
    .banner-container {
      .banner-main_title,
      .banner-main_title--white,
      .banner-main_title--white-first {
        font-size: 162px;
      }
    }
  }

  @media only screen and (max-width: 1440px) {
    .banner-container {
      .banner-main_title,
      .banner-main_title--white,
      .banner-main_title--white-first {
        // TODO template text
        // font-size: 149px;
        font-size: 135px;
      }
    }
  }

  @media only screen and (max-width: 1340px) {
    .banner-container {
      .banner-main_title,
      .banner-main_title--white,
      .banner-main_title--white-first {
        font-size: 90px;
      }
    }
  }

  @media only screen and (max-width: 1280px) {
    .banner-container {
      .text-content_wrapper {
        padding-bottom: 190px;
      }
    }
  }

  @media only screen and (max-width: 1220px) {
    .banner-container {
      .banner-main_title,
      .banner-main_title--white,
      .banner-main_title--white-first  {
        font-size: 90px;
        letter-spacing: -8px;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .banner-container {
      .banner-content {
        padding-top: 0;
      }
    }
  }

  @media only screen and (max-width: 970px) {
    .banner-container {
      .text-content_wrapper {
        padding-bottom: 105px;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .banner-container {
      .banner-main_title,
      .banner-main_title--white,
      .banner-main_title--white-first {
        font-size: 77px;
        letter-spacing: -5px;
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

  @media only screen and (max-width: 576px) {
    .banner-container {
      .banner-main_title,
      .banner-main_title--white,
      .banner-main_title--white-first {
        font-size: 77px;
        letter-spacing: -5px;
      }

      .icon-item {
        display: none;
      }
    }
  }

  @media only screen and (max-width: 455px) {
    .banner-container {
      .banner-main_title,
      .banner-main_title--white,
      .banner-main_title--white-first {
        font-size: 56px;
        letter-spacing: -2px;
      }

      .text-content_wrapper {
        padding-bottom: 120px;
      }
    }
  }

  @media only screen and (max-width: 355px) {
    .banner-container {
      .banner-main_title,
      .banner-main_title--white,
      .banner-main_title--white-first {
        font-size: 49px;
        line-height: 101%;
      }

      .text-content_wrapper {
        padding-bottom: 114px;
      }
    }
  }
</style>
