<template>
  <div class="banner-container">
    <div class="banner__banner-content banner-content">
      <div class="banner__main-title-wrapper main-title-wrapper container">
        <h1 class="banner__banner-main_title banner-main_title banner-main_title-test">
          Look! <br />
          A new <span>Mad Devs'</span> <br />
          ranger is here!
        </h1>
        <div class="banner__logo"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CareersBanner',
}
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/_vars';
@import '../../../assets/styles/_careersIcons';

.banner {
  &__main-title-wrapper {
    display: flex;
    justify-content: space-between;
  }

  &__banner-main_title {
    color: $text-color--white;
    line-height: 101%;

    span {
      white-space: nowrap;
    }
  }

  &__banner-content {
    padding-bottom: 89px;
  }

  &__logo {
    width: 181px;
    height: 172px;
    display: block;
    @include careers-logo;

    @media only screen and (max-width: 1340px) {
      width: 140px;
      height: 160px;
    }

    @media only screen and (max-width: 1180px) {
      position: absolute;
      bottom: -47px;
      right: 90px;
    }

    @media only screen and (max-width: 860px) {
      width: 100px;
      bottom: -56px;
      right: 40px;
    }

    @media only screen and (max-width: 576px) {
      width: 90px;
      bottom: -58px;
      right: 30px;
    }
  }

  @media only screen and (max-width: 991px) {
    &__banner-content {
      padding-top: 120px;
    }
  }

  @media screen and (min-width: 577px) and (max-width: 615px) {
    &__banner-main_title {
      font-size: 72px;
    }
  }

  @media only screen and (max-width: 400px) {
    &__banner-main_title {
      font-size: 45px;
    }
  }

  @media only screen and (max-width: 365px) {
    &__banner-main_title {
      font-size: 40px;
    }
  }

  @media only screen and (max-width: 330px) {
    &__banner-main_title {
      font-size: 38px;
    }
  }
}
</style>
