<template>
  <section id="open-source" class="open-source">
    <div class="container">
      <div>
        <h3 class="open-source__section-title section-title">
          Our code - available in open source - is used by many other companies.
        </h3>
        <h4 class="open-source__sub-title sub-title">
          70+ of Mad Devs' pet projects have been shared with the community via
          GitHub.
        </h4>
      </div>
      <div class="open-source__projects">
        <div class="open-source__project">
          <div class="open-source__content-wrap">
            <img
              class="open-source__logo"
              src="../../assets/img/Projects/svg/OpenSource/mad_location.svg"
              alt="img"
            />
            <span class="open-source__industry">Logistics</span>
          </div>
          <p class="open-source__paragraph paragraph">
            А library for GPS and accelerometer data "fusion" with a Kalman
            filter.
          </p>
        </div>

        <div class="open-source__project">
          <div class="open-source__content-wrap">
            <img
              class="open-source__logo"
              src="../../assets/img/Projects/svg/OpenSource/mad_location.svg"
              alt="img"
            />
            <span class="open-source__industry">Logistics</span>
          </div>
          <p class="open-source__paragraph paragraph">
            А library for GPS and accelerometer data "fusion" with a Kalman
            filter.
          </p>
        </div>
        <div class="open-source__project">
          <div class="open-source__content-wrap">
            <img
              class="open-source__logo"
              src="../../assets/img/Projects/svg/OpenSource/mad_location.svg"
              alt="img"
            />
            <span class="open-source__industry">Logistics</span>
          </div>
          <p class="open-source__paragraph paragraph">
            А library for GPS and accelerometer data "fusion" with a Kalman
            filter.
          </p>
        </div>
        <div class="open-source__project">
          <div class="open-source__content-wrap">
            <img
              class="open-source__logo"
              src="../../assets/img/Projects/svg/OpenSource/mad_location.svg"
              alt="img"
            />
            <span class="open-source__industry">Logistics</span>
          </div>
          <p class="open-source__paragraph paragraph">
            А library for GPS and accelerometer data "fusion" with a Kalman
            filter.
          </p>
        </div>
        <div class="open-source__project">
          <div class="open-source__content-wrap">
            <img
              class="open-source__logo"
              src="../../assets/img/Projects/svg/OpenSource/mad_location.svg"
              alt="img"
            />
            <span class="open-source__industry">Logistics</span>
          </div>
          <p class="open-source__paragraph paragraph">
            А library for GPS and accelerometer data "fusion" with a Kalman
            filter.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'OpenSource'
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/vars';

.open-source {
  padding: 99px 0 205px;
  margin-top: 120px;
  background: $bgcolor--grey-light;

  &__section-title {
    margin-bottom: 31px;
    position: relative;
  }

  &__sub-title {
    color: $text-color--grey;

    &::after {
      content: url('../../assets/img/Projects/svg/github.svg');
      position: relative;
      right: 10px;
      top: 25px;
    }
  }

  &__projects {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-top: 76px;
  }

  &__project {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background: $bgcolor--white;
    height: 270px;
    width: 33%;
    box-sizing: border-box;
    padding: 43px 30px 64px 43px;
    border-right: 2px solid $border-color--grey-light;
    border-bottom: 2px solid $border-color--grey-light;
  }

  &__content-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 36px;
  }

  &__logo {
  }

  &__industry {
  }

  &__paragraph {
    padding-right: 61px;
  }
}
</style>
