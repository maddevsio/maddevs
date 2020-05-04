<template>
  <section id="banner" :class="`banner ${currentPageName}`">
    <div class="container">
      <div class="banner-content">
        <div class="text-content_wrapper">
          <div class="main-title-wrapper">
            <h1 class="banner-main_title" v-if="currentPageName === 'services'">
              Your Trusted <br> <span class="media-item">IT</span>
              <span class="main-title-white_part">Outsourcing Partner</span>
            </h1>
            <h1 class="banner-main_title" v-if="currentPageName === 'index'">
              Mad Devs
              <span class="main-title-white_part"><br>Engineering<br>Your Growth</span>
            </h1>
          </div>
          <div class="icon-item">
            <img src="../assets/img/Home/svg/stars-banner-logo.svg" alt="Stars Logotype" v-if="currentPageName === 'index'">
            <img src="../assets/img/Services/svg/make-partner.svg" alt="Make Partner Logotype" v-if="currentPageName === 'services'">
          </div>
        </div>
        <navigationList />
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
      currentPageName: ''
    };
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
        padding-bottom: 130px;
      }
    }

    .banner-main_title {
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

      img {
        margin-bottom: -140px;
        margin-right: 40px;
      }
    }
  }

  @media only screen and (max-width: 1620px) {
    .banner {
      .banner-main_title {
        font-size: 125px;
      }
    }

    .services {
      .icon-item {
        img {
          margin-right: 55px;
        }
      }
    }
  }

  @media only screen and (max-width: 1440px) {
    .banner {
      .banner-main_title {
        font-size: 125px;
      }
    }

    .services {
      .icon-item {
        img {
          width: 320px;
          margin-bottom: -120px;
          margin-right: 64px;
        }
      }
    }
  }

  @media only screen and (max-width: 1366px) {
    .banner {
      .banner-main_title  {
        font-size: 115px;
      }
    }

    .index {
      .icon-item {
        margin-top: -50px;
      }
    }

    .services {
      .icon-item {
        img {
          margin-right: 50px;
        }
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
    }
  }

  @media only screen and (max-width: 1080px) {
    .banner {
      .banner-main_title {
        font-size: 110px;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .banner {
      .banner-content {
        padding-top: 0;
      }

      .banner-main_title {
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

       img {
         width: 235px;
         position: absolute;
         top: 51%;
         left: 44%;
        }
      }
    }
  }

  @media only screen and (max-width: 870px) {
    .services {
      .icon-item {
       img {
         left: 48%;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .services {
      .icon-item {
        img {
          left: 55%;
        }
      }
    }
  }

  @media only screen and (max-width: 670px) {
    .services {
      .icon-item {
       img {
         left: 59%;
        }
      }
    }
  }

  @media only screen and (max-width: 610px) {
    .banner {
      .banner-main_title {
        font-size: 73px;
      }
    }

    .services {
      .icon-item {
        img {
          width: 185px;
          top: 48%;
          left: 54%;
        }
      }
    }
  }

  @media only screen and (max-width: 440px) {
    .banner {
      .banner-main_title {
        font-size: 56px;
      }
    }

    .services {
      .icon-item {
        img {
          width: 150px;
          top: 47%;
        }
      }
    }
  }

  @media only screen and (max-width: 370px) {
    .banner {
      .banner-main_title {
        font-size: 46px;
      }
    }

    .services {
      .icon-item {
        img {
          width: 130px;
          top: 40%;
          left: 48%;
        }
      }
    }
  }
</style>
