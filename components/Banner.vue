<template>
  <section id="banner" :class="`banner ${currentPageName}`">
    <div class="container">
      <div class="banner-content">
        <div class="text-content_wrapper">
          <div class="main-title-wrapper">
            <h1 class="banner-main_title" v-if="currentPageName === 'services'">
              Your Trusted <br> <span class="media-item">IT</span>
              <span class="main-title-white_part">Outsourcing <br> Partner</span>
            </h1>
            <h1 class="banner-main_title" v-if="currentPageName === 'projects'">
              Check out<br class="tablet-break"> our<br class="desktop-break">
              <span class="main-title-white_part"> 50+ <br class="tablet-break">implemented projects!</span>
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

    .tablet-break {
      display: none;
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
    .media-item {
      color: $text-color--white;
      text-shadow: none;
    }

    .icon-item {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;

      &:hover {
        .hover-image {
          display: block;
        }

        .default-image {
          display: none;
        }
      }
    }

    .hover-image,
    .default-image {
      position: absolute;
      top: 64%;
      left: 60.1%;
    }

    .green-image {
      position: absolute;
      top: 64%;
      left: 65.4%;
    }

    .hover-image {
      display: none;
    }
  }

  @media only screen and (max-width: 1880px) {
    .services {
      .hover-image,
      .default-image {
        left: 65%;
      }

      .green-image {
        left: 70.6%;
      }
    }
  }

  @media only screen and (max-width: 1760px) {
    .services {
      .hover-image,
      .default-image {
        left: 68%;
      }

      .green-image {
        left: 73.9%;
      }
    }
  }

  @media only screen and (max-width: 1700px) {
    .services {
      .hover-image,
      .default-image {
        left: 70%;
      }

      .green-image {
        left: 76.3%;
      }
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

    .services {
      .hover-image,
      .default-image {
        left: 68%;
      }

      .green-image {
        left: 74.3%;
      }
    }
  }

   @media only screen and (max-width: 1580px) {
    .services {
      .hover-image,
      .default-image {
        left: 67%;
      }

      .green-image {
        left: 73.5%;
      }
    }
  }

  @media only screen and (max-width: 1670px) and (min-width: 1565px) {
    .projects {
      .banner-main_title,
      .banner-main_title--white,
      .banner-main_title--white-first {
        width: 94%;
      }
    }
  }

  @media only screen and (max-width: 1540px) {
    .services {
      .hover-image,
      .default-image {
        left: 69%;
      }

      .green-image {
        left: 75.5%;
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

      .text-content_wrapper {
        padding-bottom: 147px;
      }
    }

    .services {
      .hover-image,
      .default-image {
        width: 296px;
        top: 67%;
        left: 71%;
      }

      .green-image {
        width: 219px;
        top: 67%;
        left: 76.3%;
      }

      /deep/.navigation-list {
        /deep/.navigation-item {
          padding-right: 54px;
        }
      }
    }
  }

   @media only screen and (max-width: 1420px) {
    .services {
      .hover-image,
      .default-image {
        left: 70%;
      }

      .green-image {
        left: 75.3%;
      }
    }
  }

  @media only screen and (max-width: 1380px) {
    .services {
      .hover-image,
      .default-image {
        left: 71%;
      }

      .green-image {
        left: 80.4%;
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

      .text-content_wrapper {
        padding-bottom: 122px;
      }
    }

    .index {
      .icon-item {
        img {
          width: 325px;
        }
      }
    }

    .services {
      .hover-image,
      .default-image {
        width: 231px;
        top: 54%;
        left: 69%;
      }

      .green-image {
        width: 170px;
        top: 54%;
        left: 73.6%;
      }
    }
  }

  @media only screen and (max-width: 1280px) {
    .banner {
      .banner-main_title,
      .banner-main_title--white,
      .banner-main_title--white-first  {
        font-size: 110px;
        letter-spacing: -8px;
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
  }

  @media only screen and (max-width: 1270px) {
    .index {
      .icon-item {
        img {
          width: 290px;
        }
      }
    }

    .services {
      .hover-image,
      .default-image {
        left: 63%;
      }

      .green-image {
        left: 67.8%;
      }
    }
  }

  @media only screen and (max-width: 1180px) {
    .services {
      .hover-image,
      .default-image {
        left: 65%;
      }

      .green-image {
        left: 70.2%;
      }
    }

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

  @media only screen and (max-width: 1140px) {
    .services {
      .hover-image,
      .default-image {
        left: 70%;
      }

      .green-image {
        left: 75.2%;
      }
    }
  }

  @media only screen and (max-width: 1080px) {
    .services {
      .hover-image,
      .default-image {
        left: 72%;
      }

      .green-image {
        left: 77.5%;
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

    .services {
      .hover-image,
      .default-image {
        width: 188px;
        top: 44%;
        left: 73%;
      }

      .green-image {
        width: 140px;
        top: 44%;
        left: 77.7%;
      }
    }
  }

  @media only screen and (max-width: 1005px) and (min-width: 770px) {
    .projects {
      .tablet-break {
        display: block;
      }

      .desktop-break {
        display: none;
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
        top: 59%;
        left: 57%;
      }

      .green-image {
        width: 140px;
        top: 59%;
        left: 61.9%;
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

  @media only screen and (max-width: 920px) {
    .services {
      .hover-image,
      .default-image {
        left: 59%;
      }

      .green-image {
        left: 64%;
      }
    }
  }

  @media only screen and (max-width: 900px) {
    .services {
      .hover-image,
      .default-image {
        left: 61%;
      }

      .green-image {
        left: 66%;
      }
    }
  }

  @media only screen and (max-width: 880px) {
    .services {
      .hover-image,
      .default-image {
        left: 62%;
      }

      .green-image {
        left: 67.5%;
      }
    }
  }

  @media only screen and (max-width: 840px) {
    .services {
      .hover-image,
      .default-image {
        left: 65%;
      }

      .green-image {
        left: 70.5%;
      }
    }
  }

  @media only screen and (max-width: 820px) {
    .services {
      .hover-image,
      .default-image {
        left: 68%;
      }

      .green-image {
        left: 74%;
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

    .services {
      .hover-image,
      .default-image {
        top: 46%;
        left: 69%;
      }

      .green-image {
        top: 46%;
        left: 75%;
      }

      .media-item {
        display: none;
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

  @media only screen and (max-width: 730px) {
    .banner {
      .phone-screen-logo {
        display: inline;
      }
    }

    .index {
      .icon-item {
        display: none;
      }
    }

    .services {
      .hover-image,
      .default-image {
        left: 67%;
      }

      .green-image {
        left: 73.5%;
      }
    }
  }

  @media only screen and (max-width: 714px) {
    .projects {
      .tablet-break {
        display: block;
      }

      .desktop-break {
        display: none;
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
      .default-image,
      .green-image {
        display: none;
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
    }
  }

  @media only screen and (max-width: 555px) {
    .banner {
      .phone-screen-logo {
        display: none;
      }
    }
  }

  @media only screen and (max-width: 515px) {
    .projects {
      .banner-main_title,
      .banner-main_title--white,
      .banner-main_title--white-first {
        font-size: 68px;
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
  }

  @media only screen and (max-width: 440px) {
    .services {
      .hover-image,
      .default-image,
      .green-image {
        display: block;
      }

      .hover-image,
      .default-image {
        width: 142px;
        top: 44%;
        left: 48%;
      }

      .green-image {
        width: 105px;
        top: 44%;
        left: 56%;
      }
    }
  }

  @media only screen and (max-width: 400px) {
    .services {
      .hover-image,
      .default-image {
        top: 51%;
        left: 51%;
      }

      .green-image {
        top: 51%;
        left: 60%;
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
        left: 67%;
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
        top: 40%;
        left: 68%;
      }
    }
  }

  @media only screen and (max-width: 370px) {
    .services {
      .hover-image,
      .default-image {
        width: 110px;
        top: 54%;
        left: 62%;
      }

      .green-image {
        width: 81px;
        top: 54%;
        left: 70.5%;
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
        left: 56%;
      }

      .green-image {
        width: 81px;
        top: 38%;
        left: 64.5%;
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
</style>
