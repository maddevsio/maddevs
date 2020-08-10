<template>
  <section id="trips-monitor" class="trips-monitor">
    <div class="container-godee">
      <div class="trips-monitor__head-text-content">
        <h3 class="trips-monitor__main-title">Trips Monitor</h3>
        <p class="trips-monitor__description">The Trips Monitor feature enables operators to track every bus in real-time and collect <br> data on late or early arrival. Moreover, the operator can contact drivers or passengers <br> right away if necessary.</p>
      </div>
      <div class="trips-monitor__container">
        <img src="@/assets/img/GoDee/png/trips-monitor.png" alt="Trips monitor" class="trips-monitor__trips-monitor-image">
        <div class="trips-monitor__trips-monitor-features">
          <h4 class="trips-monitor__features-title">The Trips Monitor dashboard displays the <br> following information:</h4>
          <div class="trips-monitor__features-content-wrapper">
            <ul class="trips-monitor__features-list">
              <li class="trips-monitor__features-item">
                <img src="@/assets/img/GoDee/svg/map.svg" alt="Map icon">
                <p>
                  A mini-map that shows drivers' location in real-time.
                </p>
              </li>
              <li class="trips-monitor__features-item">
                <img src="@/assets/img/GoDee/svg/clock.svg" alt="Clock icon">
                <p>
                  Buses’ late and early departures.
                </p>
              </li>
              <li class="trips-monitor__features-item">
                <img src="@/assets/img/GoDee/svg/calendar.svg" alt="Calendar icon">
                <p>
                  The entire bus schedule for the weeks ahead.
                </p>
              </li>
              <li class="trips-monitor__features-item">
                <img src="@/assets/img/GoDee/svg/map-pin.svg" alt="Pin icon">
                <p>
                  A bus stop where a driver forgot to pick up a GoDee client.
                </p>
              </li>
              <li class="trips-monitor__features-item">
                <img src="@/assets/img/GoDee/svg/humans.svg" alt="Humans icon">
                <p>
                  The number of passengers assigned to each stop and driver.
                </p>
              </li>
              <li class="trips-monitor__features-item">
                <img src="@/assets/img/GoDee/svg/revert.svg" alt="Revert icon">
                <p>
                  Access to historical information through filters.
                </p>
              </li>
            </ul>
            <img src="@/assets/img/GoDee/svg/trips-monitor-mini-map.svg" alt="" class="trips-monitor__trips-monitor-mini-map">
          </div>
        </div>
      </div>
      <img src="@/assets/img/GoDee/svg/godee-bus.svg" alt="Bus icon" class="trips-monitor__bus-icon">
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

  .trips-monitor {
    position: relative;
    margin-bottom: get-vw(130px);

    &__head-text-content {
      text-align: center;
    }

    &__container {
      padding: 0 get-vw(115px);
    }

    &__main-title,
    &__features-title {
      font-family: 'Hoves-Bold';
    }

    &__main-title {
      font-size: get-vw(50px);
      margin-top: get-vw(70px);
      margin-bottom: get-vw(30px);
    }

    &__description,
    &__features-title,
    &__features-item {
      letter-spacing: get-vw(-1px);
    }

    &__description,
    &__features-item {
      font-size: get-vw(24px);
      font-family: 'Hoves-Regular';
      line-height: get-vw(33px);
      color: $text-color--grey-dark;
    }

    &__description {
      margin-bottom: get-vw(40px);
    }

    &__features-title {
      font-size: get-vw(32px);
      margin-bottom: get-vw(40px);
    }

    &__features-item {
      display: flex;
      align-items: center;
      margin-bottom: get-vw(60px);

      p {
        margin-left: get-vw(26px);
      }

      img {
        width: get-vw(47px);
      }

      &:nth-child(1) {
        color: $text-color--black;

        img {
          height: get-vw(40px);
        }
      }

      &:nth-child(2) {
        img {
          height: get-vw(45px);
        }
      }

      &:nth-child(3) {
        img {
          height: get-vw(49px);
        }
      }

      &:nth-child(4) {
        img {
          height: get-vw(45px);
        }
      }

      &:nth-child(5) {
        img {
          width: get-vw(45px);
        }
      }

      &:nth-child(6) {
        img {
          height: get-vw(40px);
        }
      }
    }

    &__trips-monitor-image {
      width: get-vw(1165px);
      height: get-vw(681px);
      margin-left: get-vw(-25px);
    }

    &__trips-monitor-mini-map {
      width: get-vw(482px);
      height: get-vw(387px);
      margin-top: get-vw(52px);
      margin-right: get-vw(-140px);
    }

    &__features-content-wrapper {
      display: flex;
      justify-content: space-between;
    }

    &__bus-icon {
      width: get-vw(130px);
      height: get-vw(130px);
      position: absolute;
      top: get-vw(-45px);
      left: get-vw(122px);
    }
  }
</style>
