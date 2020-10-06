<template>
  <div class="banner-container">
    <div class="banner-content">
      <div class="text-content_wrapper container">
        <div class="main-title-wrapper col-xxl-7 col-xl-7">
          <h1 class="banner-main_title">
            Mad Devs
            <img src="@/assets/img/Home/svg/stars-banner-logo.svg" alt="Stars Logotype" class="phone-screen-logo">
            <span class="main-title-white_part"><br>Engineering<br>Your Growth</span>
          </h1>
        </div>
        <div class="icon-item col-xxl-4 col-xl-5">
          <div class="animation-img-wrap"/>
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
.text-content_wrapper {
  position: relative;
}

.phone-screen-logo {
  width: 100px;
  display: none;
  margin-bottom: -15px;
}

.banner-main_title {
  white-space: nowrap;
}

.animation-img-wrap {
  position: relative;
  width: 359px;
  height: 438px;
  background-image: url('../../assets/img/Home/svg/stars-banner-logo.svg');
  background-size: contain;
  background-repeat: no-repeat;
  margin-left: auto;
}

@media (min-width: 1200px) {
  .animation-img-wrap {
    &::before {
      content: '';
      background: url('../../assets/sprites/sprite_tech_small.svg');
      right: 37%;
      width: calc(1200px / 30);
      height: 40px;
      transform: rotate(-28.6deg);
      animation: animate-sm 15s steps(30) infinite;
    }
  }
}

@media only screen and (min-width: 1281px) {
  .main-title-wrapper {
    //padding-right: 62px;
    //min-width: 740px;
  }

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
    background-image: url('../../assets/img/Home/svg/stars-banner-logo.svg');
    background-size: contain;
    background-repeat: no-repeat;
    margin-left: auto;

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
}

@media only screen and (max-width: 1280px) {
  .banner-main_title {
    font-size: 108px;

    @media screen and (max-width: 1220px) {

    }
  }

  .animation-img-wrap {
    height: 375px;

    &::before {
      content: '';
      background: url('../../assets/sprites/sprite_tech_small.svg');
      right: 37%;
      width: calc(1200px / 30);
      height: 40px;
      transform: rotate(-28.6deg);
      animation: animate-sm 15s steps(30) infinite;
    }
  }
}

@media only screen and (max-width: 1270px) {
  .icon-item {
    img {
      width: 290px;
    }
  }
}

@media only screen and (max-width: 1180px) {
  .icon-item {
    img {
      width: 255px;
    }
  }

  .main-title-wrapper {
    padding-right: 15px;
  }
}

@media only screen and (max-width: 1024px) {
  .icon-item {
    img {
      width: 230px;
    }
  }
}

@media only screen and (max-width: 970px) {
  .icon-item {
    img {
      width: 220px;
    }
  }
}

@media only screen and (max-width: 935px) {
  .icon-item {
    display: none;
  }
}

@media only screen and (max-width: 768px) {
  .icon-item {
    display: block;

    img {
      width: 190px;
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
