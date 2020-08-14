<template>
  <section id="smart-route-planing" class="smart-route-planing">
    <div class="container-godee">
      <div class="smart-route-planing__head-text-content">
        <h3 class="smart-route-planing__main-title">Smart route planning</h3>
        <p class="smart-route-planing__description-bold">How to create profitable yet convenient to users routes?</p>
        <p class="smart-route-planing__description">Let users send <span>trip requests</span> and tell you what works for them. The feature was <br> available initially from the MVP phase, and it enables GoDee route manager to build <br> routes effectively by understanding the real demand.</p>
        <p class="smart-route-planing__description">Inside the application, users can submit a trip request with pick up and drop off locations <br> at the desired time. The request is added to the list on managers' dashboard.</p>
        <img src="@/assets/img/GoDee/svg/number-one.svg" alt="Number" class="smart-route-planing__number-icon smart-route-planing__number-icon-one">
      </div>
      <div class="smart-route-planing__container">
        <img src="@/assets/img/GoDee/png/trip-request-list.png" alt="Trip requests list" class="smart-route-planing__image smart-route-planing__image-trip-requests-list">
        <div class="smart-route-planing__prime-algorithm">
          <div class="smart-route-planing__prime-text-content">
            <h4 class="smart-route-planing__sub-title">Prim's algorithm</h4>
            <p class="smart-route-planing__description">Prim's algorithm is used to connect dots on a map effectively. <br> So, a trip request list is transformed into a map, where new <br> potential routes are displayed for easier overview. The <br> algorithm connects dots and maps possible routes. <br> The aim is to connect as many dots as possible while keeping <br> the longevity under 20 km.</p>
            <img src="@/assets/img/GoDee/svg/number-two.svg" alt="Number" class="smart-route-planing__number-icon smart-route-planing__number-icon-two">
          </div>
          <img src="@/assets/img/GoDee/gif/prim-algorithm.gif" alt="Prim algorithm" class="smart-route-planing__prim-algorithm-gif">
        </div>
        <img src="@/assets/img/GoDee/png/trip-request-map.png" alt="Trip request map" class="smart-route-planing__image smart-route-planing__image-trip-request-map">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Result'
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';
  @import '../../assets/styles/get-vw';

  .smart-route-planing {
    position: relative;

    &__head-text-content {
      position: relative;
      text-align: center;
    }

    &__container {
      padding: 0 get-vw(110px);
    }

    &__main-title,
    &__sub-title,
    &__description-bold {
      font-family: 'Hoves-Bold', sans-serif;
    }

    &__main-title {
      margin-bottom: get-vw(50px);
      font-size: get-vw(50px);
      letter-spacing: get-vw(-2px);
    }

    &__description,
    &__description-bold,
    &__sub-title {
      letter-spacing: get-vw(-1px);
    }

    &__sub-title {
      margin-bottom: get-vw(15px);
      font-size: get-vw(32px);
    }

    &__description,
    &__description-bold {
      margin-bottom: get-vw(40px);
    }

    &__description {
      font-size: get-vw(24px);
      font-family: 'Hoves-Regular', sans-serif;
      line-height: get-vw(33px);
      color: $text-color--grey-dark;

      span {
        font-family: 'Hoves-Bold', sans-serif;
      }
    }

    &__description-bold {
      font-size: get-vw(32px);
      color: $accent-orange-text-color;
    }

    &__prime-algorithm,
    &__prime-text-content {
      display: flex;
    }

    &__prime-algorithm {
      justify-content: space-between;
      align-items: center;
      margin-top: get-vw(39px);
      margin-bottom: get-vw(29px);
    }

    &__prime-text-content {
      position: relative;
      flex-direction: column;
    }

    &__image {
      margin-left: get-vw(-20px);
    }

    &__image-trip-request-map,
    &__image-trip-requests-list {
      width: get-vw(1161px);
    }

    &__image-trip-requests-list {
      height: get-vw(541px);
    }

    &__image-trip-request-map {
      height: get-vw(506px);
    }

    &__prim-algorithm-gif {
      width: get-vw(314px);
      height: get-vw(323px);
    }

    &__number-icon {
      position: absolute;
      z-index: -1;
    }

    &__number-icon-one {
      width: get-vw(88px);
      height: get-vw(202px);
      left: get-vw(190px);
      bottom: get-vw(-55px);
    }

    &__number-icon-two {
      width: get-vw(145px);
      height: get-vw(205px);
      left: get-vw(25px);
      bottom: get-vw(-110px);
    }
  }
</style>
