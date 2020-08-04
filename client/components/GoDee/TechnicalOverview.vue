<template>
  <section id="technical-overview" class="technical-overview">
    <div class="container">
      <div class="technical-overview__container">
        <h2 class="technical-overview__main-title">Technical Overview</h2>
        <ul class="technical-overview__tech-list">
          <li class="technical-overview__tech-item">
            <img src="@/assets/img/GoDee/svg/android.svg" alt="Android" class="technical-overview__tech-item-icon">
            <div class="technical-overview__tech-item-title">Mobile applications <br> for drivers</div>
            <p class="technical-overview__tech-item-description">Android</p>
          </li>
          <li class="technical-overview__tech-item">
            <img src="@/assets/img/GoDee/svg/computer.svg" alt="Computer" class="technical-overview__tech-item-icon">
            <div class="technical-overview__tech-item-title">Control panel <br> for admin staff</div>
            <p class="technical-overview__tech-item-description">Used for business purposes to <br> create routes, get reports and <br> show current active routes on <br> a map.</p>
          </li>
          <li class="technical-overview__tech-item">
            <div class="technical-overview__icons-wrapper">
              <img src="@/assets/img/GoDee/svg/android.svg" alt="Android" class="technical-overview__tech-item-icon">
              <img src="@/assets/img/GoDee/svg/apple.svg" alt="Apple" class="technical-overview__tech-item-icon">
            </div>
            <div class="technical-overview__tech-item-title">Mobile application <br> for passengers</div>
            <p class="technical-overview__tech-item-description">Android, iOS</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TechnicalOverview'
};
</script>

<style lang="scss">
  @import '../../assets/styles/vars';
  @import '../../assets/styles/get-vw';

  .technical-overview {
    margin-top: get-vw(160px);
    margin-bottom: get-vw(154px);
    text-align: center;

     &__container {
      padding: 0 get-vw(110px);
    }

    &__main-title {
      margin-bottom: get-vw(79px);
      font-size: get-vw(70px);
      letter-spacing: get-vw(-2px);
    }

    &__main-title,
    &__tech-item-title {
      font-family: 'Hoves-Bold';
    }

    &__tech-list {
      justify-content: space-between;
    }

    &__tech-list,
    &__tech-item,
    &__icons-wrapper {
      display: flex;
    }

    &__tech-item {
      flex-direction: column;
      align-items: center;
    }

    &__tech-item-title,
    &__tech-item-description {
      letter-spacing: get-vw(-1px);
    }

    &__tech-item-title {
      margin-top: get-vw(33px);
      margin-bottom: get-vw(7px);
      font-size: get-vw(32px);
    }

    &__tech-item-description {
      font-size: get-vw(18px);
      font-family: 'Hoves-Regular';
      line-height: get-vw(25px);
      color: $text-color--grey-dark;
    }

    &__tech-item-icon {
      width: get-vw(51px);
      height: get-vw(51px);
    }

    &__icons-wrapper {
      justify-content: center;
    }
  }
</style>
