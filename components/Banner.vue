<template>
  <section id="banner" :class="`banner ${currentPageName}`">
    <div class="container">
      <div class="banner-content">
        <div class="text-content_wrapper">
          <div class="main-title-wrapper">
            <h1 class="banner-main_title" v-if="currentPageName === 'services'">
              Your <br class="phone-screen-br"> Trusted <br> <span class="main-title-white_part">IT Partner</span>
            </h1>
            <h1 class="banner-main_title" v-if="currentPageName === 'projects'">
              Check out our
              <span class="main-title-white_part">50+ implemented projects!</span>
            </h1>
            <h1 class="banner-main_title--white-first" v-if="currentPageName === 'careers'">
              Look!
            </h1>
            <span class="banner-main_title--white" v-if="currentPageName === 'careers'">A new Mad Devs' ranger is here!</span>
            <h1 class="banner-main_title" v-if="currentPageName === 'index'">
              Mad Devs 
              <img src="@/assets/img/Home/svg/stars-banner-logo.svg" alt="Stars Logotype" class="phone-screen-logo">
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
    window.addEventListener('click', this.setInitialStateForImage);
  },
  destroyed() {
    window.removeEventListener('click', this.setInitialStateForImage);
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
      this.$modal.show('order-project-from-us-modal');
    },
    setInitialStateForImage() {
      if (event.target.className === 'close-modal') {
        this.showGreenBannerImage = false;
      }
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
      padding-top: 190px;
    }

    .text-content_wrapper {
      display: flex;
      padding-bottom: 180px;
    }

    .banner-main_title,
    .banner-main_title--white,
    .banner-main_title--white-first {
      font-family: 'Hoves-Bold';
      font-style: normal;
      font-weight: bold;
      font-size: 165px;
      color: $text-color--black;
      text-shadow: $text-shadow--white;
      line-height: 100%;
      letter-spacing: -8px;

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

    .phone-screen-logo {
      width: 100px;
      display: none;
      margin-bottom: -15px;
    }

    .phone-screen-br {
      display: none;
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
        max-width: 91%;
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
    .icon-item {
      min-height: 415px;
      margin-top: 23px;
      margin-bottom: -36px;

      &:hover {
        .hover-image {
          display: block;
        }

        .default-image {
          display: none;
        }
      }
    }

    .text-content_wrapper {
      justify-content: space-between;
    }

    .hover-image {
      display: none;
    }

    .green-image {
      margin-top: -121px;
      margin-right: 1px;
    }
  }

  @media only screen and (max-width: 1620px) {
    .banner {
      .text-content_wrapper {
        display: flex;
      }
    }

    .projects,
    .banner {
      .text-content_wrapper {
        display: flex;
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

  @media only screen and (max-width: 1540px) {
    .index {
      .icon-item {
        img {
          width: 325px;
        }
      }
    }
  }

  @media only screen and (max-width: 1520px) {
    .banner {
      .text-content_wrapper {
        padding-bottom: 130px;
      }
    }

    .services {
      .hover-image,
      .default-image {
        width: 296px;
      }

      .green-image {
        width: 219px;
        margin-top: -91px;
      }
    }
  }

  @media only screen and (max-width: 1480px) {
    .banner {
      .banner-main_title,
      .banner-main_title--white,
      .banner-main_title--white-first {
        font-size: 162px;
      }
    }

    .index {
      .icon-item {
        img {
          width: 300px;
        }
      }
    }
  }

  @media only screen and (max-width: 1440px) {
    .banner {
      .banner-main_title,
      .banner-main_title--white,
      .banner-main_title--white-first {
        font-size: 149px;
      }
    }

    .services {
      /deep/.navigation-list {
        /deep/.navigation-item {
          padding-right: 54px;
        }
      }
    }
  }

  @media only screen and (max-width: 1340px) {
    .banner {
      .banner-main_title,
      .banner-main_title--white,
      .banner-main_title--white-first {
        font-size: 131px;
      }
    }

    .index {
      .icon-item {
        img {
          width: 325px;
        }
      }
    }
  }

  @media only screen and (max-width: 1280px) {
    .banner {
      .text-content_wrapper {
        padding-bottom: 190px;
      }
    }

    .index {
      .icon-item {
        margin-bottom: -20px;

        img {
          width: 265px;
        }
      }
    }

    .services {
      .icon-item {
        min-height: 243px;
      }

      .hover-image,
      .default-image {
        width: 231px;
      }

      .green-image {
        width: 170px;
        margin-top: -71px;
      }
    }
  }

  @media only screen and (max-width: 1270px) {
    .index {
      .icon-item {
        img {
          width: 290px;
        }
      }
    }
  }

  @media only screen and (max-width: 1220px) {
    .banner {
      .banner-main_title,
      .banner-main_title--white,
      .banner-main_title--white-first  {
        font-size: 110px;
        letter-spacing: -8px;
      }
    }
  }

  @media only screen and (max-width: 1180px) {
    .index {
      .icon-item {
        img {
          width: 255px;
        }
      }

      .main-title-wrapper {
        padding-right: 15px;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .banner {
      .banner-content {
        padding-top: 0;
      }
    }

    .index {
      .icon-item {
        img {
          width: 230px;
        }
      }
    }
  }

  @media only screen and (max-width: 1010px) {
    .services {
      /deep/.navigation-list {
        /deep/.navigation-item {
          padding-right: 41px;
        }
      }

      .hover-image,
      .default-image {
        width: 210px;
      }

      .green-image {
        width: 155px;
        margin-top: -65px;
      }
    }
  }

  @media only screen and (max-width: 970px) {
    .banner {
      .text-content_wrapper {
        padding-bottom: 105px;
      }
    }

    .index {
      .icon-item {
        img {
          width: 220px;
        }
      }
    }

    .services {
      /deep/.navigation-list {
        /deep/.navigation-item {
          padding-right: 0;
        }
      }

      .hover-image,
      .default-image {
        width: 188px;
      }

      .green-image {
        width: 140px;
        margin-top: -58px;
      }
    }
  }

  @media only screen and (max-width: 935px) {
    .index {
      .icon-item {
        display: none;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .banner {
      .banner-main_title,
      .banner-main_title--white,
      .banner-main_title--white-first {
        font-size: 77px;
        letter-spacing: -5px;
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

    .index {
      .icon-item {
        display: block;

        img {
          width: 190px;
        }
      }
    }
  }

  @media only screen and (max-width: 755px) {
    .index {
      .icon-item {
        display: none;
      }
    }
  }

  @media only screen and (max-width: 730px) {
    .banner {
      .phone-screen-logo {
        display: inline;
      }
    }
  }

  @media only screen and (max-width: 670px) {
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

    .services {
      .hover-image,
      .default-image {
        width: 167px;
      }

      .green-image {
        width: 125px;
        margin-top: -50px;
        margin-right: 0;
      }
    }
  }

  @media only screen and (max-width: 610px) {
    .banner {
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
          max-width: 97%;
        }
      }
    }

    .index {
      .phone-screen-logo {
        width: 75px;
      }
    }
  }

  @media only screen and (max-width: 576px) {
    .banner {
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

  @media only screen and (max-width: 572px) {
    .banner {
      .phone-screen-logo {
        display: none;
      }
    }
  }

  @media only screen and (max-width: 455px) {
    .banner {
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

    .services {
      .text-content_wrapper {
        padding-bottom: 172px;
      }
    }
  }

  @media only screen and (max-width: 440px) {
    .banner {
      .phone-screen-br {
        display: block;
      }
    }

    .services {
      .icon-item {
        min-height: initial;
        display: block;
      }

      .hover-image,
      .default-image,
      .green-image {
        display: block;
        position: absolute;
      }

      .hover-image,
      .default-image {
        width: 142px;
        top: 44%;
        left: 55%;
      }

      .green-image {
        width: 105px;
        top: 55.5%;
        left: 63.2%;
      }
    }
  }

  @media only screen and (max-width: 400px) {
    .services {
      .hover-image,
      .default-image {
        top: 42.5%;
        left: 61%;
      }

      .green-image {
        top: 54%;
        left: 70%;
      }
    }
  }

  @media only screen and (max-width: 384px) {
    .services {
      .hover-image,
      .default-image {
        left: 58%;
      }

      .green-image {
        left: 67.5%;
      }
    }
  }

  @media only screen and (max-width: 375px) {
    .services {
      .hover-image,
      .default-image {
        top: 40%;
        left: 59%;
      }

      .green-image {
        top: 51.5%;
        left: 68.5%;
      }
    }
  }

  @media only screen and (max-width: 360px) {
    .services {
      .hover-image,
      .default-image {
        width: 125px;
        top: 56%;
        left: 62%;
      }

      .green-image {
        width: 93px;
        top: 56%;
        left: 70.5%;
      }
    }
  }

  @media only screen and (max-width: 355px) {
    .services {
      .hover-image,
      .default-image {
        top: 38%;
        left: 61%;
      }

      .green-image {
        top: 52%;
        left: 70%
      }
    }

    .banner {
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

  @media only screen and (max-width: 320px) {
    .services {
      .hover-image,
      .default-image {
        width: 105px;
        top: 40%;
        left: 63%;
      }

      .green-image {
        width: 78px;
        top: 54%;
        left: 71.5%
      }
    }
  }
</style>
