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
              <li class="trips-monitor__features-item trips-monitor__active" ref="firstChildOfList" @mouseover="handleHover($event, 'trips-monitor-mini-map')">
                <MapIcon />
                <p>
                  A mini-map that shows drivers' location in real-time.
                </p>
              </li>
              <li class="trips-monitor__features-item" @mouseover="handleHover($event, 'trip-item')">
                <ClockIcon />
                <p>
                  Buses’ late and early departures.
                </p>
              </li>
              <li class="trips-monitor__features-item" @mouseover="handleHover($event, 'calendar')">
                <CalendarIcon />
                <p>
                  The entire bus schedule for the weeks ahead.
                </p>
              </li>
              <li class="trips-monitor__features-item" @mouseover="handleHover($event, 'selected-trip-menu')">
                <MapPinIcon />
                <p>
                  A bus stop where a driver forgot to pick up a GoDee client.
                </p>
              </li>
              <li class="trips-monitor__features-item" @mouseover="handleHover($event, 'customer-support')">
                <PeopleIcon />
                <p>
                  The number of passengers assigned to each stop and driver.
                </p>
              </li>
              <li class="trips-monitor__features-item" @mouseover="handleHover($event, 'filter')">
                <RevertIcon />
                <p>
                  Access to historical information through filters.
                </p>
              </li>
            </ul>
            <img src="@/assets/img/GoDee/png/trips-monitor-mini-map.png" class="trips-monitor__trips-monitor-mini-map" ref="image">
          </div>
        </div>
      </div>
      <img src="@/assets/img/GoDee/png/godee-bus.png" alt="Bus icon" class="trips-monitor__bus-icon">
    </div>
  </section>
</template>

<script>
import CalendarIcon from '@/components/svg/calendar-icon';
import ClockIcon from '@/components/svg/clock-icon';
import MapIcon from '@/components/svg/map-icon';
import MapPinIcon from '@/components/svg/map-pin-icon';
import PeopleIcon from '@/components/svg/people-icon';
import RevertIcon from '@/components/svg/revert-icon';

export default {
  name: 'TripMonitor',
  components: {
    CalendarIcon,
    ClockIcon,
    MapIcon,
    MapPinIcon,
    PeopleIcon,
    RevertIcon
  },
  methods: {
    handleHover(e, imageName) {
      // Remove default class from first item of list 
      if (this.$refs.firstChildOfList.classList.contains('trips-monitor__active')) {
        this.$refs.firstChildOfList.classList.remove('trips-monitor__active');
      }

      this.$refs.image.src = require(`../../assets/img/GoDee/png/${imageName}.png`);
      this.$refs.image.classList = [];
      this.$refs.image.classList.add(`trips-monitor__${imageName}`);
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';
  @import '../../assets/styles/get-vw';

  .trips-monitor {
    position: relative;
    margin-bottom: get-vw(168px);

    &__head-text-content {
      text-align: center;
    }

    &__container {
      padding: 0 get-vw(115px);
    }

    &__main-title,
    &__features-title {
      font-family: 'Hoves-Bold', sans-serif;
    }

    &__main-title {
      font-size: get-vw(50px);
      margin-top: get-vw(40px);
      margin-bottom: get-vw(10px);
    }

    &__description,
    &__features-title,
    &__features-item {
      letter-spacing: get-vw(-1px);
    }

    &__description,
    &__features-item {
      font-size: get-vw(24px);
      font-family: 'Hoves-Regular', sans-serif;
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
      cursor: pointer;

      p {
        margin-left: get-vw(26px);
      }

      svg {
        /deep/ path {
          fill: $svg-gray;
        }
      }

      &:hover {
        p {
          color: $text-color--black;
        }

        svg {
          /deep/ path {
            fill: $svg-orange;
          }
        }
      }

      &:nth-child(1) {
        p {
          margin-left: get-vw(30px);
        }
      }

      &:nth-child(4) {
        svg {
          margin-left: get-vw(7px);
        }
        
        p {
          margin-left: get-vw(35px);
        }
      }

      &:nth-child(6) {
        svg {
          margin-left: get-vw(-2px);
        }
      }
    }

    &__active {
      p {
        color: $text-color--black;
      }

      svg {
        /deep/ path {
          fill: $svg-orange;
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

    &__trip-item {
      width: get-vw(372px);
      height: get-vw(180px);
      margin-top: get-vw(140px);
      margin-right: get-vw(-100px);
    }

    &__calendar {
      width: get-vw(363px);
      height: get-vw(434px);
      margin-top: get-vw(30px);
      margin-right: get-vw(-70px);
    }

    &__selected-trip-menu {
      width: get-vw(500px);
      height: get-vw(292px);
      margin-top: get-vw(100px);
      margin-right: get-vw(-140px);
    }

    &__customer-support {
      width: get-vw(436px);
      height: get-vw(670px);
      margin-top: get-vw(-100px);
      margin-right: get-vw(-115px);
    }

    &__filter {
      width: get-vw(461px);
      height: get-vw(537px);
      margin-top: get-vw(-20px);
      margin-right: get-vw(-125px);
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
      left: get-vw(140px);
    }
  }
</style>
