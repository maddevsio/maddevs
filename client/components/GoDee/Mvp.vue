<template>
  <section id="mvp" class="mvp">
    <div class="container-godee">
      <div class="mvp__container">
        <div class="mvp__title-wrapper">
          <h2 class="mvp__main-title">MVP</h2>
          <p class="mvp__description">Before investing a considerable amount of money in building software, hiring personnel, and <br> acquiring minibuses, GoDee wanted to develop an MVP to understand the market fit potential.</p>
        </div>
        <div class="mvp__phones-list">
          <img src="@/assets/img/GoDee/svg/mvp-sec-first-phone.svg" alt="Phone" class="mvp__phone-item">
          <img src="@/assets/img/GoDee/svg/mvp-sec-second-phone.svg" alt="Phone" class="mvp__phone-item">
          <img src="@/assets/img/GoDee/svg/mvp-sec-third-phone.svg" alt="Phone" class="mvp__phone-item">
        </div>
        <div class="mvp__year-item">2018</div>
        <div class="mvp__tech">
          <div class="mvp__tech-item">
            <div class="mvp__tech-title">Live chat</div>
            <p class="mvp__tech-description">During 3 months of helping white collars to <br> commute conveniently, the integrated live chat <br> feature collected extensive feedback from users.</p>
          </div>
          <div class="mvp__tech-item">
            <div class="mvp__tech-title">Trip request</div>
            <p class="mvp__tech-description">On top of that, the trip request feature enables GoDee <br> to analyze actual demand for different Ho Chi Minh <br> districts.</p>
          </div>
        </div>
        <div class="mvp__user-centered-solution">
          <div class="mvp__user-centered-solution-text-content">
            <div class="mvp__user-centered-solution-title">User-centered solution</div>
            <p class="mvp__user-centered-solution-description">Although services like GoDee exist in <br> other parts of the world, copy-pasting <br> the functionality was pointless as Ho <br> Chi Minh citizens' commuting culture <br> is different. Thus, slowly improving the <br> solution driven by users' feedback was <br> key to its current rapid growth.</p>
          </div>
          <img src="@/assets/img/GoDee/svg/hands-with-phone.svg" class="mvp__hands-with-phone-image" alt="Hands">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Mvp'
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';
  @import '../../assets/styles/get-vw';

  .mvp {
    margin-bottom: get-vw(160px);

    &__container {
      padding: 0 get-vw(110px);
    }

    &__main-title,
    &__description,
    &__year-item {
      text-align: center;
    }

    &__main-title {
      margin-bottom: get-vw(17px);
      font-size: get-vw(70px);
      letter-spacing: get-vw(-2px);
    }

    &__main-title,
    &__user-centered-solution-title {
      letter-spacing: get-vw(-2px);
    }

    &__main-title,
    &__tech-title,
    &__user-centered-solution-title,
    &__user-centered-solution-description {
      font-family: 'Hoves-Bold', sans-serif;
    }

    &__description,
    &__tech-description,
    &__year-item {
      font-family: 'Hoves-Regular', sans-serif;
      color: $text-color--grey-dark;
    }

    &__description {
      margin-bottom: get-vw(59px);
      font-size: get-vw(24px);
      letter-spacing: get-vw(-1px);
    }

    &__phones-list,
    &__tech,
    &__user-centered-solution {
      display: flex;
      justify-content: space-between;
    }

    &__phones-list {
      margin-bottom: get-vw(30px);
    }

    &__phone-item {
      width: get-vw(274px);
      height: get-vw(548px);
    }

    &__tech {
      margin-bottom: get-vw(115px);
    }

    &__tech-item,
    &__user-centered-solution-text-content {
      display: flex;
      flex-direction: column;
    }

    &__tech-title,
    &__tech-description,
    &__year-item,
    &__user-centered-solution-description {
      letter-spacing: get-vw(-1px);
    }

    &__tech-title,
    &__user-centered-solution-description {
      font-size: get-vw(32px);
    }

    &__tech-title {
      margin-bottom: get-vw(8px);
    }

    &__tech-description {
      font-size: get-vw(24px);
    }

    &__year-item {
      font-size: get-vw(17px);
      line-height: get-vw(22px);
    }

    &__user-centered-solution {
      align-items: center;
    }

    &__user-centered-solution-title {
      font-size: get-vw(50px);
      margin-bottom: get-vw(20px);
      color: $accent-orange-text-color;
    }

    &__user-centered-solution-description {
      color: $text-color--grey-dark;
    }

    &__hands-with-phone-image {
      width: get-vw(374px);
      height: get-vw(634px);
    }
  }
</style>
