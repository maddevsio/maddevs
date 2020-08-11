<template>
  <section id="impact" class="impact">
    <div class="container-godee">
      <div class="impact__container">
        <h2 class="impact__main-title">Impact</h2>
        <p class="impact__description">GoDee faced the challenge of changing people’s habits. And to grow the user base, we needed to <br> create an extremely helpful and hassle-free solution. Something that creates an alternative for <br> expensive taxis and inconvenient motorbikes, remaining predictable, affordable and ‘green’ by design.</p>
        <ul class="impact__statistic-list">
          <li class="impact__statistic-item">
            <div class="impact__statistic-number">44</div>
            <p class="impact__designation">All routes</p>
          </li>
          <li class="impact__statistic-item">
            <div class="impact__statistic-number">14</div>
            <p class="impact__designation">Active routes</p>
          </li>
          <li class="impact__statistic-item">
            <div class="impact__statistic-number">~4500</div>
            <p class="impact__designation">Passengers per month</p>
          </li>
        </ul>
      </div>
      <img src="@/assets/img/GoDee/svg/impact-footer-image.svg" alt="Group of people" class="impact__footer-image">
    </div>
  </section>
</template>

<script>
export default {
  name: 'Impact'
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';
  @import '../../assets/styles/get-vw';

  .impact {
    margin-bottom: get-vw(100px);
    text-align: center;

    &__main-title,
    &__statistic-number,
    &__designation {
      font-family: 'Hoves-Bold';
    }

    &__main-title {
      margin-bottom: get-vw(30px);
      font-size: get-vw(90px);
      letter-spacing: get-vw(-3px);
      color: $accent-orange-text-color;
    }

    &__description,
    &__designation,
    &__statistic-number {
      letter-spacing: get-vw(-1px);
    }

    &__description {
      margin-bottom: get-vw(61px);
      font-size: get-vw(24px);
      line-height: get-vw(33px);
      font-family: 'Hoves-Regular';
      color: $text-color--grey-dark;
    }

    &__statistic-item {
      display: flex;
    }

    &__statistic-list {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      justify-content: center;
      position: relative;
    }

    &__statistic-item {
      flex-direction: column;

      &:nth-child(1) {
        margin-left: get-vw(40px);
      }

      &:nth-child(2) {
        margin-right: get-vw(75px);
      }

      &:nth-child(3) {
        margin-left: get-vw(-210px);
      }
    }

    &__statistic-number {
      font-size: get-vw(128px);
      color: $text-color--grey;
    }

    &__designation {
      font-size: get-vw(32px);
    }

    &__footer-image {
      width: get-vw(1665px);
      height: get-vw(389px);
      margin: get-vw(-30px) -8.5vw 0;
      z-index: -1;
    }
  }
</style>
