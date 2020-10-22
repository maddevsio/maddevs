<template>
  <section class="banner banner-container">
    <div class="banner__banner-content banner-content">
      <div class="banner__title-wrapper container">
        <h1 class="banner__banner-main_title banner-main_title">
          Your Trusted <br> <span class="banner__main-title-white_part main-title-white_part">IT Partner</span>
        </h1>
        <div class="banner__order-a-project-icon"></div>
      </div>
      <navigationList/>
    </div>
  </section>
</template>

<script>
import navigationList from '@/components/ui/navigation-list';

export default {
  name: 'ServicesBanner',
  components: {
    navigationList
  }
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/_servicesBannerIcons';

  .banner {
    &__banner-content {
      margin-bottom: 34px;

      @media screen and (max-width: 991px) {
        padding-top: 120px;
      } 
    }

    &__title-wrapper {
      display: flex;
      position: relative;
    }
  
    &__order-a-project-icon {
      width: 295px;
      height: 312px;
      display: block;
      position: relative;
      left: 85px;
      @include order-a-project-icon;

      @media screen and (max-width: 1290px) {
        left: 75px;
      }

      @media screen and (max-width: 1280px) {
        width: 265px;
        height: 282px;
        left: 40px;
      }

      @media screen and (max-width: 1140px) {
        width: 215px;
        height: 232px;
        top: 8px;
      }

      @media screen and (max-width: 970px) {
        width: 175px;
        height: 192px;
        top: 0;
      }

      @media screen and (max-width: 834px) {
        width: 135px;
        height: 152px;
        top: 17px;
        left: 20px;
      }

      @media screen and (max-width: 810px) {
        width: 118px;
        height: 138px;
        top: 25px;
        left: 15px;
      }

      @media screen and (max-width: 690px) {
        position: absolute;
        width: 180px;
        height: 200px;
        top: 125px;
        left: 58%;
      }

      @media screen and (max-width: 576px) {
        width: 150px;
        height: 185px;
        top: 70px;
        left: 53%;
      }

      @media screen and (max-width: 440px) {
        width: 140px;
        height: 150px;
        top: 81px;
        left: 55%;
      }

      @media screen and (max-width: 390px) {
        width: 108px;
        height: 128px;
        top: 90px;
        left: 229px;
      }

      @media screen and (min-width: 341px) and (max-width: 358px) {
        top: 150px;
        left: 210px;
      }

      @media screen and (max-width: 340px) {
        width: 98px;
        height: 118px;
        top: 65px;
        left: 195px;
      } 
    }
  }
</style>
