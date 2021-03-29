<template>
  <div class="banner__banner-container banner-container">
    <div class="banner__banner-content banner-content">
      <div class="banner__main-title-wrapper main-title-wrapper container">
        <h1 class="banner__banner-main_title banner-main_title">
          Check out our <br />
          <span class="banner__main-title-white_part main-title-white_part">
            50+
            <br class="banner__small-screen-break" />
            implemented
            <br />
            projects!
          </span>
        </h1>
      </div>
      <UINavigation :navigation="navigation" />
    </div>
  </div>
</template>

<script>
import UINavigation from '@/components/shared/UINavigation'
import { projectsBannerNavigation as navigation } from '@/data/navigation'

export default {
  name: 'ProjectsBanner',
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
    margin-bottom: 104px;
  }

  &__main-title-wrapper {
    position: relative;
  }

  &__banner-main_title {
    width: max-content;
    margin-bottom: 72px;
  }

  &__small-screen-break {
    display: none;
  }

  @media screen and (max-width: 991px) {
    &__banner-content {
      padding-top: 120px;
    }

    &__banner-content {
      margin-bottom: 70px;
    }
  }

  @media screen and (max-width: 834px) {
    &__small-screen-break {
      display: block;
    }

    &__banner-content {
      margin-bottom: 60px;
    }
  }

  @media screen and (max-width: 576px) {
    &__small-screen-break {
      display: none;
    }
  }

  @media screen and (max-width: 530px) {
    &__small-screen-break {
      display: block;
    }
  }

  @media screen and (max-width: 480px) {
    &__banner-content {
      margin-bottom: 40px;
    }
  }

  @media screen and (max-width: 420px) {
    &__banner-content {
      margin-bottom: 20px;
    }
  }

  @media screen and (max-width: 390px) {
    &__banner-main_title {
      font-size: 45px;
    }
  }

  @media screen and (max-width: 355px) {
    &__banner-main_title {
      font-size: 40px;
    }
  }
}
</style>
