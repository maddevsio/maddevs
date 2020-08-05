<template>
  <section id="mobile-apps" class="mobile-apps">
    <div class="container-godee">
      <div class="mobile-apps__head-text-content">
        <h2 class="mobile-apps__main-title">Mobile Apps</h2>
        <h3 class="mobile-apps__sub-title">Mobile applications for drivers</h3>
        <p class="mobile-apps__description">An app for drivers enables them to pick up passengers from bus stops, according to <br> their previously booked tickets.</p>
      </div>
      <div class="mobile-apps__container">
        <div class="mobile-apps__driver-features">
          <div class="mobile-apps__driver-feature">
            <img src="@/assets/img/GoDee/svg/mobile-apps-first-phone.svg" alt="Phone" class="mobile-apps__phone-image mobile-apps__driver-features-sec-phone">
            <p class="mobile-apps__description">Fast registration for <br> drivers.</p>
          </div>
          <div class="mobile-apps__driver-feature">
            <img src="@/assets/img/GoDee/svg/mobile-apps-second-phone.svg" alt="Phone" class="mobile-apps__phone-image mobile-apps__driver-features-sec-phone">
            <p class="mobile-apps__description">Inbuilt voice feature <br> updates drivers about bus <br> stops and the number of <br> passengers waiting.</p>
          </div>
          <div class="mobile-apps__driver-feature">
            <img src="@/assets/img/GoDee/svg/mobile-apps-third-phone.svg" alt="Phone" class="mobile-apps__phone-image mobile-apps__driver-features-sec-phone">
            <p class="mobile-apps__description">Drivers can easily pick <br> passengers from bus <br> stops while staying on <br> track with the schedule.</p>
          </div>
          <div class="mobile-apps__driver-feature">
            <img src="@/assets/img/GoDee/svg/mobile-apps-fourth-phone.svg" alt="Phone" class="mobile-apps__phone-image mobile-apps__driver-features-sec-phone">
            <p class="mobile-apps__description">Drivers can see bus <br> stops' real pictures to <br> understand where to <br> pick up passengers.</p>
          </div>
        </div>
        <div class="mobile-apps__application-for-users">
          <h3 class="mobile-apps__sub-title">Mobile applications for passengers</h3>
          <p class="mobile-apps__description mobile-apps__application-for-users-description">Ticket booking process is intuitive — the passenger needs to select the pick up and <br> drop off points, choose the departure time in the schedule, and book the ticket. <br> The most suitable route will be found automatically.</p>
          <img src="@/assets/img/GoDee/svg/solution-sec-phone.svg" alt="Phone" class="mobile-apps__phone-image mobile-apps__application-for-users-phone">
        </div>
      </div>
      <img src="@/assets/img/GoDee/svg/mobile-apps-route-line.svg" class="mobile-apps__route-line" alt="Mobile Apps route line">
      <img src="@/assets/img/GoDee/svg/godee-bus.svg" class="mobile-apps__bus-icon" alt="Bus">
    </div>
  </section>
</template>

<script>
export default {
  name: 'MobileApps'
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';
  @import '../../assets/styles/get-vw';

  .mobile-apps {
    position: relative;
    margin-top: get-vw(65px);
    margin-bottom: get-vw(225px);

    &__container {
      padding-left: 70px;
      padding-right: 80px;
    }

    &__head-text-content,
    &__application-for-users {
      text-align: center;
    }

    &__head-text-content {
      margin-bottom: get-vw(70px);
    }

    &__main-title,
    &__sub-title {
      font-family: 'Hoves-Bold';
    }

    &__main-title {
      margin-bottom: get-vw(65px);
      font-size: get-vw(90px);
      letter-spacing: get-vw(-3px);
      color: $accent-orange-text-color;
    }

    &__sub-title {
      margin-bottom: get-vw(20px);
      font-size: get-vw(50px);
      letter-spacing: get-vw(-2px);
    }

    &__description {
      font-size: get-vw(24px);
      font-family: 'Hoves-Regular';
      letter-spacing: get-vw(-1px);
      color: $text-color--grey-dark;
    }

    &__driver-features,
    &__driver-feature,
    &__application-for-users {
      display: flex;
    }

    &__driver-features {
      justify-content: space-between;
      margin-bottom: get-vw(155px);
    }

    &__driver-feature,
    &__application-for-users {
      flex-direction: column;
    }

    &__phone-image {
      margin-bottom: get-vw(13px);
    }

    &__driver-features-sec-phone {
      width: get-vw(265px);
      height: get-vw(533px);
      margin-left: get-vw(-3px);
    }

    &__application-for-users {
      align-items: center;
    }

    &__application-for-users-description {
      margin-bottom: get-vw(40px);
    }

    &__application-for-users-phone {
      width: get-vw(430px);
      height: get-vw(730px);
    }

    &__route-line,
    &__bus-icon {
      position: absolute;
    }

    &__route-line {
      width: get-vw(1337px);
      height: get-vw(2287px);
      top: 38px;
      right: 128px;
      z-index: -1;
    }

    &__bus-icon {
      width: get-vw(130px);
      height: get-vw(130px);
      right: get-vw(120px);
      bottom: get-vw(670px);
    }
  }
</style>
