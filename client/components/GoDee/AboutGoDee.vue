<template>
  <section id="about-godee" class="about-godee">
    <div class="container">
      <div class="about-godee__text-content">
        <h2 class="about-godee__main-title">About GoDee</h2>
        <p class="about-godee__description-bold">The app-based system allows users to find a route, <br> select the time, book a seat, and pay for the ride online.</p>
        <p class="about-godee__description">GoDee is a reliable way to commute in Ho Chi Minh city, Vietnam . Shuttle buses ride <br> along the express routes linking the major districts and popular destinations of the city. <br> It helps users to save their time, money, and planet due to less ecological impact.</p>
      </div>
      <div class="about-godee__people-image-wrapper">
        <img src="@/assets/img/GoDee/svg/about-godee-people.svg" class="about-godee__people-image" alt="People">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutGoDee'
};
</script>

<style lang="scss">
  @import '../../assets/styles/vars';
  @import '../../assets/styles/get-vw';

  .about-godee {
    margin-top: get-vw(325px);
    margin-bottom: get-vw(120px);
    background: url('../../assets/img/GoDee/svg/about-godee-bg.svg') no-repeat bottom;
    background-size: contain;

    &__text-content {
      position: relative;
      margin-bottom: get-vw(120px);
      text-align: center;

      &::before {
        content: '';
        width: get-vw(150px);
        height: get-vw(150px);
        position: absolute;
        top: get-vw(135px);
        left: get-vw(-51px);
        background: url('../../assets/img/GoDee/svg/godee-bus.svg') no-repeat;
        background-size: get-vw(150px);
      }
    }

    &__main-title {
      margin-bottom: get-vw(23px);
      font-size: get-vw(90px);
      letter-spacing: get-vw(-3px);
      color: $accent-orange-text-color;
    }

    &__main-title,
    &__description-bold {
      font-family: 'Hoves-Bold';
    }

    &__description-bold,
    &__description {
      letter-spacing: get-vw(-1px);
    }

    &__description-bold {
      margin-bottom: get-vw(25px);
      font-size: get-vw(32px);
      letter-spacing: get-vw(-1px);
      color: $text-color--black;
    }

    &__description {
      font-size: get-vw(24px);
      line-height: get-vw(33px);
      font-family: 'Hoves-Regular';
      color: $text-color--grey-dark;
    }

    &__people-image-wrapper {
      width: 100%;
      display: flex;
      justify-content: flex-end;
    }

    &__people-image {
      width: get-vw(393px);
      height: get-vw(262px);
      margin-bottom: get-vw(-75px);
    }
  }

  @media only screen and (max-width: 768px) {
    .about-godee {
      &__text-content {

        &::before {
          left: get-vw(-28px);
        }
      }
    }
  }
</style>
