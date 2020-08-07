<template>
  <section id="route-optimization" class="route-optimization">
    <div class="container-godee">
      <div class="route-optimization__container">
        <div class="route-optimization__head-text-content">
          <h3 class="route-optimization__main-title">Route optimization</h3>
          <p class="route-optimization__description">With the help of detailed drivers' performance data, Mad Devs’ Pifia microservice <br> enables route managers to optimize ETA (estimated time of arrival). Pifia shows a more <br> accurate arrival and departure time in just one click.</p>
          <img src="@/assets/img/GoDee/png/trips-monitor-route-optimization-section.png" alt="Trips monitor" class="route-optimization__trips-monitor-route-optimization-section">
          <img src="@/assets/img/GoDee/svg/godee-bus.svg" alt="Bus icon" class="route-optimization__bus-icon">
        </div>
        <div class="route-optimization__text-content-wrapper">
          <div class="route-optimization__text-content-item">
            <div class="route-optimization__left-text-block">
              <h4 class="route-optimization__title">Let’s imagine two examples of early and <br> late departure time:</h4>
              <p class="route-optimization__description">If Pifia understands that a minibus usually comes late due to <br> increased traffic at 5:35 PM and not 5:30 PM, it tells the route <br> manager to shift the arrival time to 5:35 PM. It might sound like <br> only 5 minutes change, but such small optimizations add up.</p>
            </div>
            <div class="route-optimization__right-text-block">
              <p class="route-optimization__description-bold">By shifting a bus arrival <br> time to 5:35 PM, the <br> passengers waiting for the <br> ride won’t need to stand in <br> the hot, humid weather.</p>
            </div>
          </div>
          <div class="route-optimization__text-content-item">
            <div class="route-optimization__left-text-block">
              <h4 class="route-optimization__title">Real-time ETA</h4>
              <p class="route-optimization__description">On top of that, Pifia shows in real-time the approximate <br> late/early departure. Thus, passengers waiting for the ride <br> always know whether the bus is coming late and how long it <br> would take. The information is displayed on their mobile <br> application.</p>
            </div>
            <img src="@/assets/img/GoDee/svg/eta-preview-phone.svg" alt="ETA preview on phone" class="route-optimization__eta-preview-phone">
          </div>
        </div>
      </div>
      <img src="@/assets/img/GoDee/svg/route-optimization-route-line.svg" alt="Route line" class="route-optimization__route-line">
    </div>
  </section>
</template>

<script>
export default {
  name: 'RouteOptimization'
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';
  @import '../../assets/styles/get-vw';

  .route-optimization {
    position: relative;
    margin-top: get-vw(-79px);

    &__head-text-content {
      position: relative;
      text-align: center;
    }

    &__container {
      padding: 0 get-vw(115px);
    }

    &__main-title,
    &__title,
    &__description-bold {
      font-family: 'Hoves-Bold';
    }

    &__main-title {
      font-size: get-vw(50px);
      margin-right: get-vw(37px);
      margin-bottom: get-vw(40px);
    }

    &__description,
    &__title,
    &__description-bold {
      letter-spacing: get-vw(-1px);
    }

    &__description {
      margin-bottom: get-vw(40px);
      font-size: get-vw(24px);
      font-family: 'Hoves-Regular';
      line-height: get-vw(33px);
      color: $text-color--grey-dark;
    }

    &__title {
      margin-bottom: get-vw(20px);
    }

    &__title,
    &__description-bold {
      font-size: get-vw(32px);
    }

    &__description-bold {
      margin-top: get-vw(35px);
      position: relative;
      color: $text-color--grey;

      &::after {
        content: '';
        width: get-vw(185px);
        height: get-vw(210px);
        position: absolute;
        top: get-vw(-105px);
        right: get-vw(-80px);
        background-image: url('../../assets/img/GoDee/svg/thermometer.svg');
        background-repeat: no-repeat;
        background-size: cover;
        z-index: -1;
      }
    }

    &__text-content-item {
      display: flex;
      justify-content: space-between;

      &:first-child {
        margin-bottom: get-vw(70px);
      }

      &:last-child {
        align-items: center;
      }
    }

    &__trips-monitor-route-optimization-section {
      width: get-vw(1170px);
      height: get-vw(525px);
      margin-left: get-vw(-26px);
      margin-bottom: get-vw(90px);
    }

    &__eta-preview-phone {
      width: get-vw(267px);
      height: get-vw(536px);
    }

    &__route-line {
      width: get-vw(1298px);
      height: get-vw(1905px);
      position: absolute;
      top: get-vw(24px);
      right: get-vw(185px);
      z-index: -1;
    }

    &__bus-icon {
      width: get-vw(130px);
      height: get-vw(130px);
      position: absolute;
      top: get-vw(-33px);
      right: get-vw(80px);
      transform: rotate(-90deg);
    }
  }
</style>
