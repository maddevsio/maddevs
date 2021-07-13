<template>
  <section class="banner banner-container">
    <div class="banner__banner-content banner-content">
      <div class="banner__title-wrapper container">
        <h1 class="banner__banner-main_title banner-main_title">
          Your Trusted <br>
          <span class="banner__main-title-white_part main-title-white_part">IT Partner</span>
        </h1>
        <div class="banner__order-a-project-icon" />
      </div>
      <UINavigation :navigation="navigation" />
    </div>
  </section>
</template>

<script>
import UINavigation from '@/components/shared/UINavigation'
import { servicesBannerNavigation as navigation } from '@/data/navigation'

export default {
  name: 'ServicesBanner',
  components: {
    UINavigation,
  },

  data() {
    return {
      navigation,
    }
  },
}
</script>

<style lang="scss" scoped>
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
      width: 210px;
      height: 200px;
      top: 2px;
      left: 68%;
    }

    &__banner-main_title {
      margin-bottom: 33px;
    }
  }

  @media screen and (max-width: 970px) {
    &__order-a-project-icon {
      width: 180px;
      height: 170px;
      left: 67%;
    }

    &__banner-main_title {
      margin-bottom: 30px;
    }
  }

  @media screen and (max-width: 834px) {
    &__order-a-project-icon {
      width: 160px;
      height: 140px;
      left: 73%;
    }

    &__banner-main_title {
      margin-bottom: 0;
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
      margin-bottom: 44px;
    }
  }

  @media screen and (max-width: 576px) {
    &__order-a-project-icon {
      width: 170px;
      height: 150px;
      top: 80px;
      left: 56%;
    }

    &__banner-main_title {
      margin-bottom: 30px;
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
