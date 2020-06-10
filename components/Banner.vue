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
              Check out our <br>
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
      letter-spacing: -8px;
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
        max-width: 90%;
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
    .default-image,
    .green-image {
      position: absolute;
      top: 64%;
      left: 60%;
    }

    .hover-image {
      display: none;
    }
  }

  @media only screen and (max-width: 1700px) {
    .services {
      .hover-image,
      .default-image {
        left: 62%;
      }

      .green-image {
        left: 68%;
      }
    }
  }

  @media only screen and (max-width: 1660px) {
    .services {
      .hover-image,
      .default-image {
        left: 64%;
      }

      .green-image {
        left: 70%;
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
        left: 65%;
      }

      .green-image {
        left: 71.3%;
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

      .navigation-list {
        .navigation-item {
          padding-right: 54px;
        }
      } 
    }
  }

  @media only screen and (max-width: 1380px) {
    .services {
      .hover-image,
      .default-image {
        left: 73%;
      }

      .green-image {
        left: 78.4%;
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
          width: 345px;
        }
      }
    }

    .services {
      .hover-image,
      .default-image {
        width: 231px;
        top: 59%;
        left: 72%;
      }

      .green-image {
        width: 170px;
        top: 59%;
        left: 76.6%;
      }
    }
  }

  @media only screen and (max-width: 1220px) {
    .banner { 
      .banner-main_title,
      .banner-main_title--white,
      .banner-main_title--white-first {
        font-size: 110px;
      }
    }

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

  @media only screen and (max-width: 1140px) {
    .services {
      .hover-image,
      .default-image {
        left: 65%;
      }

      .green-image {
        left: 70.2%;
      }
    }
  }

  @media only screen and (max-width: 1080px) {
    .services {
      .hover-image,
      .default-image {
        left: 69%;
      }

      .green-image {
        left: 74.5%;
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
      .main-title-wrapper {
        padding-right: 15px;
      }
    }

    .services {
      .hover-image,
      .default-image {
        width: 188px;
        top: 49px;
        left: 73%;
      }

      .green-image {
        width: 140px;
        top: 49%;
        left: 77.7%;
      }
    }
  }

  @media only screen and (max-width: 970px) {
    .banner { 
      .banner-main_title,
      .banner-main_title--white,
      .banner-main_title--white-first {
        font-size: 77px;
        letter-spacing: -5px;
      }

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

  @media only screen and (max-width: 565px) {
    .banner {
      .phone-screen-logo {
        width: 90px;
        margin-bottom: -10px;
      }
    }
  }

  @media only screen and (max-width: 565px) {
    .banner {
      .phone-screen-logo {
        display: none;
      }
    }
  }

  @media only screen and (max-width: 530px) {
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

  @media only screen and (max-width: 455px) {
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

  @media only screen and (max-width: 335px) {
    .banner {
      .banner-main_title,
      .banner-main_title--white,
      .banner-main_title--white-first {
        font-size: 48px;
      }

      .text-content_wrapper {
        padding-bottom: 114px;
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
