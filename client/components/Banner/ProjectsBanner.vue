<template>
  <div class="banner__banner-container banner-container">
    <div class="banner__banner-content banner-content">
      <div class="banner__main-title-wrapper main-title-wrapper container">
        <h1 class="banner__banner-main_title banner-main_title">
          Check out our <br> <span class="banner__main-title-white_part main-title-white_part"> 50+ implemented <br> projects!</span>
        </h1>
        <div class="banner__fire-icon"></div>
      </div>
      <navigationList />
    </div>
  </div>
</template>

<script>
import navigationList from '@/components/ui/navigation-list';

export default {
  name: 'ProjectsBanner',
  components: {
    navigationList
  }
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/_projectsBannerIcons';

  .banner {
    span {
      white-space: nowrap;
    }

    &__banner-main_title {
      margin-bottom: 72px;
    }

    &__fire-icon {
      display: block;
      width: 407px;
      height: 661px;
      position: absolute;
      top: 326px;
      right: 100px;
      @include fire-icon;

      @media screen and (max-width: 1320px) {
        width: 340px;
        height: 600px;
        top: 395px;
      }

      @media screen and (max-width: 1280px) {
        top: 358px;
      }

      @media screen and (max-width: 1140px) {
        top: 320px;
      }

      @media screen and (max-width: 991px) {
        width: 300px;
        height: 560px;
        top: 259px;
      }

      @media screen and (max-width: 970px) {
        width: 250px;
        height: 510px;
        top: 255px;
      }

      @media screen and (max-width: 834px) {
        top: 206px;
        right: 95px;
      }

      @media screen and (max-width: 690px) {
        top: 294px;
        right: 60px;
      }
    }
  }

  /deep/ .navigation-list {
    justify-content: flex-start;
  }
</style>
