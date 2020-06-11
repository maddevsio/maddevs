<template>
  <section id="banner" :class="`banner ${currentPageName}`">
    <div class="container">
      <div class="banner-content">
        <div class="text-content_wrapper">
          <div class="main-title-wrapper">
            <h1 class="banner-main_title" v-if="currentPageName === 'services'">
              Your <br class="media-query-item"> Trusted <br> <span class="media-item">IT</span>
              <span class="main-title-white_part">Outsourcing Partner</span>
            </h1>
            <h1 class="banner-main_title" v-if="currentPageName === 'projects'">
              Check out our <br>
              <span class="main-title-white_part">50+ implemented projects!</span>
            </h1>
            <h1 class="banner-main_title--white-first" v-if="currentPageName === 'careers'">
              Look!
            </h1>
            <span class="banner-main_title--white" v-if="currentPageName === 'careers'">A new Mad Devs' ranger is here!</span>
            <h1 class="banner-main_title" v-if="currentPageName === 'index'">
              Mad Devs
              <span class="main-title-white_part"><br>Engineering<br>Your Growth</span>
            </h1>
            <navigationList v-if="currentPageName === 'projects'" />
          </div>
          <div class="icon-item">
            <img 
              src="@/assets/img/Home/svg/stars-banner-logo.svg" 
              alt="Stars Logotype" 
              v-if="currentPageName === 'index'"
            >
            <img 
              src="@/assets/img/Services/svg/order-a-project.svg" 
              alt="Order a Project Logotype" 
              v-if="currentPageName === 'services' && showGreenBannerImage === false"
              class="default-image" 
            >
            <img 
              src="@/assets/img/Services/svg/order-a-project-hover.svg" 
              alt="Order a Project Logotype" 
              v-if="currentPageName === 'services' && showGreenBannerImage === false"
              class="hover-image"
              @click="switchImage"
            >
            <img 
              src="@/assets/img/Services/svg/order-a-project-green.svg" 
              alt="Order a Project Logotype" 
              v-if="currentPageName === 'services' && showGreenBannerImage === true"
              class="green-image"
              @click="switchImage"
            >
          </div> 
        </div>
        <navigationList v-if="currentPageName !== 'projects'" />
      </div>
    </div>
  </section>
</template>

<script>
import navigationList from '@/components/ui/navigation-list';

export default {
  name: 'Banner',
  components: {
    navigationList
  },
  mounted() {
    if ($nuxt.$route.name) {
      this.currentPageName = $nuxt.$route.name;
    }
  },
  data() {
    return {
      currentPageName: '',
      showGreenBannerImage: false
    };
  },
  methods: {
    switchImage() {
      this.showGreenBannerImage = !this.showGreenBannerImage;
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '../assets/styles/vars';

  .banner {
    width: 100%;
    height: 100%;
    position: relative;
    background-color: $bgcolor--black;

    .banner-content {
      width: 100%;
      height: 100%;
      padding-top: 240px;

      .text-content_wrapper {
        display: flex;
      }
    }

    .banner-main_title,
    .banner-main_title--white,
    .banner-main_title--white-first {
      font-family: 'Hoves-Bold';
      font-style: normal;
      font-weight: bold;
      font-size: 165px;
      letter-spacing: -3px;
      color: $text-color--black;
      text-shadow: $text-shadow--white;

      .main-title-white_part {
        color: $text-color--white;
        text-shadow: none;
      }

      &--white,
      &--white-first {
        color: $text-color--white;
        text-shadow: none;
      }
    }
  }

  .projects {
    .container {
      position: relative;

      .main-title-wrapper {
        max-width: 100%;
      }
    }

    .navigation-wrap {
      margin-top: 170px;
    }
  }

  .careers {
    .container {
      position: relative;

      .main-title-wrapper {
        max-width: 75%;
      }
    }
  }

  .index {
    .main-title-wrapper {
      padding-right: 40px;
    }

    .icon-item {
      display: flex;
      align-items: flex-end;
    }
  }

  .services {
    .media-query-item {
      display: none;
    }

    .media-item {
      color: $text-color--white;
      text-shadow: none;
    }

    .icon-item {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;

      .hover-image,
      .default-image {
        margin-bottom: -141px;
        margin-right: 40px;
      }

      &:hover {
        .hover-image {
          display: block;
        }

        .default-image {
          display: none;
        }
      }
    }

    .hover-image {
      display: none;
    }

    .green-image {
      margin-right: 41px;
      margin-bottom: -20px;
    }
  }

  @media only screen and (min-width: 1620px) {
    .projects,
    .banner {
      .banner-main_title,
      .banner-main_title--white,
      .banner-main_title--white-first {
        font-size: 125px;
      }

      .text-content_wrapper {
        display: flex;
        padding-bottom: 130px;
      }
    }
  }

  @media only screen and (max-width: 1620px) {
    .banner {
      .banner-main_title,
      .banner-main_title--white,
      .banner-main_title--white-first {
        font-size: 125px;
      }

      .text-content_wrapper {
        display: flex;
        padding-bottom: 130px;
      }
    }

    .services {
      .hover-image,
      .default-image {
        margin-right: 55px;
      }
    }
  }

  @media only screen and (max-width: 1670px) and (min-width: 1565px) {
    .projects {
      .banner-main_title,
      .banner-main_title--white,
      .banner-main_title--white-first {
        width: 80%;
      }
    }
  }

  @media only screen and (max-width: 1440px) {
    .banner {
      .banner-main_title,
      .banner-main_title--white,
      .banner-main_title--white-first {
        font-size: 125px;
      }
    }

    .services {
      .hover-image,
      .default-image {
        width: 320px;
        margin-bottom: -120px;
        margin-right: 64px;
      }

      .green-image {
        width: 237px;
        margin-bottom: -43px;
      }
    }
  }

  @media only screen and (max-width: 1366px) {
    .banner {
      .banner-main_title,
      .banner-main_title--white,
      .banner-main_title--white-first  {
        font-size: 115px;
      }
    }

    .index {
      .icon-item {
        margin-top: -50px;
      }
    }

    .services {
      .media-query-item {
        display: block;
      }

      .hover-image,
      .default-image {
        margin-right: 50px;
      }
    }
  }

  @media only screen and (max-width: 1270px) {
    .index {
      .icon-item {
        margin-top: 0;

        img {
          height: 340px;
        }
      }
    }

    .services {
      .media-item {
        display: none;
      }

      .green-image {
        margin-right: 41px;
      }
    }
  }

  @media only screen and (max-width: 1120px) {
    .services {
      .green-image {
        margin-right: 28px;
      }
    }
  }

  @media only screen and (max-width: 1080px) {
    .banner {
      .banner-main_title,
      .banner-main_title--white,
      .banner-main_title--white-first {
        font-size: 110px;
      }
    }

    .services {
      .green-image {
        margin-right: 18px;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .banner {
      .banner-content {
        padding-top: 0;
      }

      .banner-main_title,
      .banner-main_title--white,
      .banner-main_title--white-first {
        font-size: 100px;
      }
    }

    .index {
      .main-title-wrapper {
        padding-right: 0;
      }

      .icon-item {
        display: none;
      }
    }

    .services {
      .icon-item {
        min-width: 375px;
      }

      .hover-image,
      .default-image,
      .green-image {
        position: absolute;
        top: 51%;
      }

      .hover-image,
      .default-image {
        width: 235px;
        left: 44%;
      }

      .green-image {
        width: 170px;
        left: 50%;
      }
    }
  }

  @media only screen and (max-width: 870px) {
    .services {
      .hover-image,
      .default-image {
        left: 48%;
      }

      .green-image {
        left: 55%;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .services {
      .hover-image,
      .default-image {
        left: 55%;
      }

      .green-image {
        left: 63%;
      }
    }

    .projects {
      .text-content_wrapper {
        padding-bottom: 40px;
      }
    }

    .careers {
      .container {
        position: relative;

        .main-title-wrapper {
          max-width: 95%;
        }
      }
    }
  }

  @media only screen and (max-width: 670px) {
    .services {
      .hover-image,
      .default-image {
        left: 59%;
      }

      .green-image {
        left: 68%;
      }
    }

    .careers {
      .container {
        position: relative;

        .main-title-wrapper {
          max-width: 90%;
        }
      }
    }

    .projects {
      .banner-main_title,
      .banner-main_title--white,
      .banner-main_title--white-first {
        font-size: 85px;
      }
    }
  }

  @media only screen and (max-width: 610px) {
    .banner {
      .banner-main_title,
      .banner-main_title--white,
      .banner-main_title--white-first {
        font-size: 73px;
      }

      .banner-main_title--white-first {
        display: inline;
      }
    }

    .careers {
      .text-content_wrapper {
        padding-bottom: 70px;
      }

      .container {
        position: relative;

        .main-title-wrapper {
          max-width: 80%;
        }
      }
    }

    .services {
      .hover-image,
      .default-image {
        width: 185px;
        top: 48%;
        left: 54%;
      }

      .green-image {
        width: 145px;
        left: 61%;
        top: 48%;
      }
    }
  }

  @media only screen and (max-width: 455px) {
    .banner {
      .banner-main_title,
      .banner-main_title--white,
      .banner-main_title--white-first {
        font-size: 56px;
      }
    }

    .services {
      .hover-image,
      .default-image {
        width: 150px;
        top: 47%;
      }

      .green-image {
        width: 113px;
        left: 62%;
        top: 47%;
      }
    }
  }

  @media only screen and (max-width: 475px) {
    .services {
      .green-image {
        left: 64%;
      }
    }
  }

  @media only screen and (max-width: 370px) {
    .banner {
      .banner-main_title,
      .banner-main_title--white,
      .banner-main_title--white-first {
        font-size: 46px;
      }
    }

    .services {
      .hover-image,
      .default-image {
        width: 130px;
        top: 40%;
        left: 48%;
      }

      .green-image {
        width: 95px;
        top: 40%;
        left: 57%;
      }
    }
  }

  @media only screen and (max-width: 320px) {
    .services {
      .green-image {
        left: 58%;
      }
    }
  }
</style>
