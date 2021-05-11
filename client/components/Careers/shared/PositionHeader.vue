<template>
  <div class="careers-position__header">
    <div class="container">
      <div class="careers-position__container">
        <h1 class="careers-position__title">
          Data Analyst / Senior Data Analyst - Core Services
        </h1>
        <p class="careers-position__subtitle">
          We're building a culture at MadDevs where amazing people can do their best work.
          If you're ready to grow your career and help millions of organizations grow better,
          you've come to the right place.
        </p>
        <div class="careers-position__tags">
          <PositionTags />
        </div>
        <UIButton class="careers-position__apply-button">
          Apply now
        </UIButton>
      </div>
    </div>
  </div>
</template>

<script>
import PositionTags from './PositionTags'
import UIButton from '../../shared/UIButton'

export default {
  name: 'PositionHeader',
  components: {
    PositionTags,
    UIButton,
  },
}
</script>

<style scoped lang="scss">
@import '../../../assets/styles/vars';

.careers-position {
  &__header {
    padding: 95px 0;
    background-color: $bgcolor--black;
    color: $text-color--white-primary;
  }
  &__labels {
    margin-bottom: 32px;
  }
  &__title {
    font-size: 68px;
    line-height: 109%;
    letter-spacing: -3.6px;
  }
  &__subtitle {
    margin-top: 24.5px;
    font-size: 17px;
    line-height: 141%;
    letter-spacing: -0.013em;
  }
  &__tags {
    margin-top: 23px;
  }
  &__apply-button {
    font-family: Inter, sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 166%;
    letter-spacing: -0.1px;
    width: 190px;
    height: 48px;
    margin-top: 47.5px;
    border-radius: 6px;
    &::after {
      content: '↓';
      display: inline-block;
      margin-left: 8px;
    }
  }
}
</style>
