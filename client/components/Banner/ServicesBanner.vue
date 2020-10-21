<template>
  <section class="banner__banner-container banner-container">
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
    &__title-wrapper {
      display: flex;
      justify-content: space-between;
    }
  
    &__order-a-project-icon {
      width: 295px;
      height: 312px;
      display: block;
      position: relative;
      right: 30px;
      @include order-a-project-icon;

      @media screen and (max-width: 1280px) {
        width: 265px;
        height: 282px;
        right: 0;
      }

      @media screen and (max-width: 1140px) {
        width: 215px;
        height: 232px;
      }

      @media screen and (max-width: 970px) {
        width: 175px;
        height: 192px;
      }

      @media screen and (max-width: 834px) {
        width: 145px;
        height: 162px;
      }

      @media screen and (max-width: 810px) {
        width: 115px;
        height: 132px;
        top: 15px;
      }
    }
  }
</style>
