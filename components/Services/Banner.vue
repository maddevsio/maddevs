<template>
  <section id="services-banner" class="services-banner">
    <div class="container">
      <div class="services-banner__container">
        <div class="services-banner__text-content_wrapper">
          <div class="services-banner__text-item services-banner__first-child">Your Trusted</div>
          <div class="services-banner__text-item services-banner__last-child">IT Outsourcing Partner</div>
        </div>
        <nav class="services-banner__navigation-list">
          <a href="" class="services-banner__navigation-item">IT Outsourcing</a>
          <a href="" class="services-banner__navigation-item">Software Development</a>
          <a href="" class="services-banner__navigation-item">Infrastructure Optimization</a>
          <a href="" class="services-banner__navigation-item">IT Consulting</a>
        </nav>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Banner',
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';

  .services-banner {
    height: 100%;
    width: 100%;
    background-color: #000;
    &__container {
      width: 100%;
      height: 100%;
      padding-top: 150px;
      padding-bottom: 60px;
    }

    &__text-content_wrapper {
      padding-bottom: 130px;
    }

    &__text-item {
      font-family: 'Hoves';
      font-style: normal;
      font-weight: bold;
      font-size: 150px;
    }

    &__first-child {
      color: #000;
      text-shadow: -1px 0 #fff, 0 1px #fff, 1px 0 #fff, 0 -1px #fff;
    }

    &__last-child {
      color: #fff;
    }

    &__navigation-item {
      padding-right: 71px;
      padding-left: 20px;
      color: #f2f2f2;
      font-size: 22px;
      font-family: 'Hoves';
      background: url('../../assets/img/Services/svg/link-arrow.svg') no-repeat;
      background-position-y: 7px;
    }
  }
</style>