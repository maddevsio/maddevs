<template>
  <div class="container banner-container">
  <div class="banner-content">
    <div class="text-content_wrapper">
      <div class="main-title-wrapper">
        <h1 class="banner-main_title">
          Mad Devs
          <img src="@/assets/img/Home/svg/stars-banner-logo.svg" alt="Stars Logotype" class="phone-screen-logo">
          <span class="main-title-white_part"><br>Engineering<br>Your Growth</span>
        </h1>
      </div>
      <div class="icon-item">
        <div class="animation-img-wrap">
          <img src="@/assets/img/Home/svg/stars-banner-logo.svg" alt="Stars Logotype">
        </div>
      </div>
    </div>
    <navigationList/>
  </div>
  </div>
</template>

<script>
import navigationList from '@/components/ui/navigation-list';

export default {
  name: 'AboutBanner',
  components: {
    navigationList
  }
};
</script>

<style lang="scss" scoped>
  .animation-img-wrap {
    position: relative;

    &::before {
      content: '';
      position: absolute;
      z-index: 99;
      background: url('../../assets/sprites/sprite_tech.svg');
      top: 19%;
      right: 24.2%;
      width: calc(1720px / 30);
      height: 58px;
      transform: rotate(-28.6deg);
      animation: animate 15s steps(30) infinite;
    }
  }

  .main-title-wrapper {
    padding-right: 3vw
  }

  .icon-item {
    display: flex;
    align-items: flex-end;

    & img {
      width: 100%;
    }
  }

  .phone-screen-logo {
    width: 100px;
    display: none;
    margin-bottom: -15px;
  }

  @media only screen and (max-width: 1280px) {

    .animation-img-wrap {
      &::before {
        content: '';
        background: url('../../assets/sprites/sprite_tech_small.svg');
        top: 19%;
        right: 24%;
        width: calc(1200px / 30);
        height: 40px;
        transform: rotate(-28.6deg);
        animation: animate-sm 15s steps(30) infinite;
      }
    }
  }

  @media only screen and (max-width: 755px) {
    .icon-item {
      display: none;
    }
  }

  @media only screen and (max-width: 730px) {
    .phone-screen-logo {
      display: inline;
    }
  }

  @media only screen and (max-width: 610px) {
    .phone-screen-logo {
      width: 75px;
    }
  }

  @media only screen and (max-width: 572px) {
    .phone-screen-logo {
      display: none;
    }
  }

  @media only screen and (max-width: 440px) {
    .phone-screen-br {
      display: block;
    }
  }

  @keyframes animate {
    from {
      background-position: 0;
    }

    to {
      background-position: 1740px;
    }
  }

  @keyframes animate-sm {
    from {
      background-position: 0;
    }

    to {
      background-position: 1200px;
    }
  }
</style>
