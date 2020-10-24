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
    }

    @media screen and (max-width: 1280px) {
      &__order-a-project-icon {
        width: 265px;
        height: 282px;
        position: absolute;
        left: 69%;
      }

      &__banner-main_title {
        margin-bottom: 76px;
      }
    }

    @media screen and (max-width: 1140px) {
      &__order-a-project-icon {
        width: 250px;
        height: 240px;
        top: -3px;
        left: 64%;
      }

      &__banner-main_title {
        margin-bottom: 57px;
      }
    }

    @media screen and (max-width: 970px) {
      &__order-a-project-icon {
        width: 200px;
        height: 190px;
      }

      &__banner-main_title {
        margin-bottom: 42px;
      }
    }

    @media screen and (max-width: 834px) {
      &__order-a-project-icon {
        left: 67%;
      }
    }

    @media screen and (max-width: 690px) {
      &__order-a-project-icon {
        width: 200px;
        height: 180px;
        top: 125px;
        left: 58%;
      }

      &__banner-main_title {
        margin-bottom: 0;
      }
    }

    @media screen and (max-width: 576px) {
      &__order-a-project-icon {
        top: 70px;
        left: 55%;
      }
    }

    @media screen and (max-width: 440px) {
      &__order-a-project-icon {
        width: 140px;
        height: 150px;
        top: 81px;
        left: 52%;
      }
    }

    @media screen and (max-width: 390px) {
      &__order-a-project-icon {
        width: 108px;
        height: 128px;
        top: 90px;
        left: 229px;
      }
    }

    @media screen and (min-width: 341px) and (max-width: 358px) {
      &__order-a-project-icon {
        top: 150px;
        left: 210px;
      }
    }

    @media screen and (max-width: 340px) {
      &__order-a-project-icon {
        width: 98px;
        height: 118px;
        top: 65px;
        left: 195px;
      }
    }
  }
</style>
