<template>
  <div class="banner-container">
    <div class="banner-content">
      <div class="text-content_wrapper container">
        <div class="main-title-wrapper">
          <h1 class="banner-main_title">
            <span class="main-title-black_part">Mad Devs</span>
            <span class="main-title-white_part"><br>Engineering<br>Your Growth</span>
          </h1>
        </div>
        <div class="icon-item">
          <div class="animation-img-wrap" />
        </div>
      </div>
    </div>
    <UINavigation :navigation="navigation" />
  </div>
</template>

<script>
import UINavigation from '@/components/shared/UINavigation'

import { aboutBannerNavigation as navigation } from '@/data/navigation'

export default {
  name: 'AboutBanner',
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
.banner-container {
  margin-bottom: 124px;

  @media screen and (max-width: 834px) {
    margin-bottom: 49px;
  }

  @media screen and (max-width: 578px) {
    margin-bottom: 47px;
  }
}

.banner-content {
  margin-bottom: 46px;

  @media screen and (max-width: 834px) {
    margin-bottom: 74px;
  }

  @media screen and (max-width: 578px) {
    margin-bottom: 65px;
  }
}

.text-content_wrapper {
  position: relative;
}

.banner-main_title {
  white-space: nowrap;
}

.animation-img-wrap {
  position: relative;
  width: 359px;
  height: 438px;
  background-image: url('../../../assets/img/Home/svg/stars-banner-logo.svg');
  background-size: contain;
  background-repeat: no-repeat;

  &::before {
    content: '';
    position: absolute;
    z-index: 99;
    background: url('../../../assets/sprites/sprite_tech.svg');
    top: 19%;
    right: 24.2%;
    width: calc(1720px / 30);
    height: 58px;
    transform: rotate(-28.6deg);
    animation: animate 15s steps(30) infinite;
  }
}

.main-title-wrapper {
  min-width: fit-content;
  padding-right: 30px;
}

.main-title-black_part {
  &:after {
    content: '';
    background-image: url('../../../assets/img/Home/svg/stars-banner-logo.svg');
    background-size: contain;
    background-repeat: no-repeat;
    width: 76px;
    height: 92px;
    margin-left: 30px;
    display: none;
  }
}

@media only screen and (min-width: 1281px) {
  .icon-item {
    display: flex;
    align-items: flex-end;
    position: relative;
    top: -40px;
  }
}

@media screen and (min-width: 1300px) {
  .animation-img-wrap {
    position: relative;
    width: 359px;
    height: 438px;
    background-image: url('../../../assets/img/Home/svg/stars-banner-logo.svg');
    background-size: contain;
    background-repeat: no-repeat;
  }
}

@media only screen and (max-width: 1280px) {
  .animation-img-wrap {
    width: 303px;
    height: 375px;
    bottom: 11px;

    &::before {
      content: '';
      background: url('../../../assets/sprites/sprite_tech_small.svg');
      right: 26%;
      width: calc(1200px / 30);
      height: 40px;
      transform: rotate(-28.6deg);
      animation: animate-sm 15s steps(30) infinite;
    }
  }
}

@media only screen and (max-width: 1180px) {
  .main-title-wrapper {
    padding-right: 30px;
  }
}

@media only screen and (max-width: 1140px) {
  .animation-img-wrap {
    width: 238px;
    height: 271px;
    top: 12px;

    &:before {
      display: none;
    }
  }
}

@media only screen and (max-width: 970px) {
  .animation-img-wrap {
    width: 198px;
    height: 230px;
    top: -5px;
  }
}

@media only screen and (max-width: 815px) {
  .animation-img-wrap {
    width: 168px;
    height: 171px;
    top: 28px;
  }
}

@media only screen and (max-width: 730px) {
  .icon-item {
    display: none;
  }

  .main-title-black_part::after {
    display: inline-block;
  }
}

@media only screen and (max-width: 576px) {
  .main-title-black_part::after {
    width: 66px;
    height: 82px;
    position: relative;
    top: 5px;
    margin-left: 16px;
  }
}

@media only screen and (max-width: 440px) {
  .main-title-black_part::after {
    display: inline-block;
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
