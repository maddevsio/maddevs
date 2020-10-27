<template>
  <div class="banner__banner-container banner-container">
    <div class="banner__banner-content banner-content">
      <div class="banner__main-title-wrapper main-title-wrapper container">
        <h1 class="banner__banner-main_title banner-main_title">
          Check out our <br> <span class="banner__main-title-white_part main-title-white_part"> 50+ <br class="banner__small-screen-break"> implemented <br> projects!</span>
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
    &__banner-main_title {
      width: max-content;
      margin-bottom: 72px;
    }

    &__small-screen-break {
      display: none;
    }

    &__fire-icon {
      display: block;
      width: 407px;
      height: 661px;
      position: absolute;
      top: 326px;
      right: 100px;
      @include fire-icon;
    }

    @media screen and (max-width: 1320px) {
      &__fire-icon {
        width: 340px;
        height: 600px;
        top: 395px;
      }
    }

    @media screen and (max-width: 1280px) {
      &__fire-icon {
        top: 358px;
      }
    }

    @media screen and (max-width: 1140px) {
      &__fire-icon {
        top: 320px;
      }
    }

    @media screen and (max-width: 991px) {
      &__banner-content {
        padding-top: 120px;
      }

      &__fire-icon {
        width: 300px;
        height: 560px;
        top: 293px;
      }
    }

    @media screen and (max-width: 970px) {
      &__fire-icon {
        width: 250px;
        height: 510px;
        top: 290px;
      } 
    }

    @media screen and (max-width: 834px) {
      &__fire-icon {
        top: 306px;
        right: 95px;
      }

      &__small-screen-break {
        display: block;
      }
    }

    @media screen and (max-width: 768px) {
      &__fire-icon {
        top: 314px;
        right: 75px;
      }
    }

    @media screen and (max-width: 690px) {
      &__fire-icon {
        width: 240px;
        height: 470px;
        top: 428px;
        right: 55px;
      }
    }

    @media screen and (max-width: 578px) {
      &__fire-icon {
        top: 404px;
      }
    }

    @media screen and (max-width: 576px) {
      &__fire-icon {
        top: 262px;
      }

      &__small-screen-break {
        display: none;
      }
    }

    @media screen and (max-width: 530px) {
      &__fire-icon {
        width: 203px;
        height: 400px;
        top: 368px;
        right: 45px;
      }

      &__small-screen-break {
        display: block;
      }
    }

    @media screen and (max-width: 480px) {
      &__fire-icon {
        width: 145px;
        height: 300px;
        top: 453px;
      }
    }

    @media screen and (max-width: 440px) {
      &__fire-icon {
        right: 25px;
      }
    }

    @media screen and (max-width: 420px) {
      &__fire-icon {
        top: 495px;
        right: 35px;
      }
    }

    @media screen and (max-width: 390px) {
      &__banner-main_title {
        font-size: 45px;
      }

      &__fire-icon {
        top: 475px;
      }
    }

    @media screen and (max-width: 355px) {
      &__banner-main_title {
        font-size: 40px;
      }

      &__fire-icon {
        top: 455px;
        right: 30px;
      }
    }
  }

  /deep/ .navigation-list {
    justify-content: flex-start;
  }
</style>
