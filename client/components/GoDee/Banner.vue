<template>
  <section id="banner" class="banner">
    <div class="container-godee">
      <div class="banner__banner-content">
        <div class="banner__text-content">
          <h1 class="banner__main-title">
            <img loading="lazy" src="@/assets/img/GoDee/svg/goodee-logo.svg" class="banner__main-title-logo" alt="GoDee">
          </h1>
          <h3 class="banner__sub-title">Convenient shuttle <br> bus service</h3>
          <p class="banner__description">Mad Devs helped GoDee to develop feature-rich <br> software to re-invent public mobility by building new <br> smart ways of daily commute.</p>
        </div>
        <div class="banner__phone-wrapper">
          <img loading="lazy" src="@/assets/img/GoDee/png/godee-iphonex.png" class="banner__phone-image" alt="preview">
        </div>
        <img loading="lazy" src="@/assets/img/GoDee/svg/banner-godee-route-line.svg" class="banner__route-line" alt="Route">
      </div>
    </div>
    <div class="banner__grey-block">
      Case study
    </div>
  </section>
</template>

<script>
export default {
  name: 'Banner'
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';
  @import '../../assets/styles/get-vw';

  .banner {
    padding-top: get-vw(135px);
    padding-bottom: get-vw(48px);
    background: url('../../assets/img/GoDee/png/goode-banner-bg.png') no-repeat;
    background-size: cover;

    &__banner-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__main-title-logo {
      width: get-vw(577px);
      height: get-vw(124px);
    }

    &__sub-title {
      font-size: get-vw(72px);
    }

    &__sub-title {
      color: $accent-orange-text-color;
      letter-spacing: get-vw(-2px);
    }

    &__sub-title,
    &__description {
      font-family: 'Hoves-Bold', sans-serif;
    }

    &__sub-title,
    &__description {
      margin-top: get-vw(10px);
    }

    &__description {
      font-size: get-vw(32px);
      color: $text-color--grey;
      letter-spacing: get-vw(-1px);
    }

    &__phone-wrapper {
      margin-right: get-vw(33px);
      z-index: 1;
    }

    &__phone-image {
      width: get-vw(460px);
      height: get-vw(809px);
    }

    &__route-line {
      width: get-vw(1104px);
      height: get-vw(4173px);
      position: absolute;
      top: get-vw(920px);
      left: get-vw(160px);
    }

    &__grey-block {
      width: get-vw(280px);
      position: absolute;
      padding: get-vw(10px) get-vw(26px);
      top: get-vw(242px);
      left: 0;
      background-color: $border-color--grey;
      font-size: get-vw(24px);
      letter-spacing: get-vw(-1px);
      font-family: 'Hoves-Bold', sans-serif;
      color: $text-color--white;
      text-align: right;
    }
  }
</style>
