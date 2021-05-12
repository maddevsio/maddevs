<template>
  <div class="careers-position__header">
    <div class="container">
      <div class="careers-position__container">
        <div
          v-if="vacancy.labels.remote || vacancy.labels.relocation"
          class="careers-position__labels"
        >
          <PositionLabels :labels="vacancy.labels" />
        </div>
        <h1 class="careers-position__title">
          {{ vacancy.title }}
        </h1>
        <p
          v-if="vacancy.subtitle"
          class="careers-position__subtitle"
        >
          {{ vacancy.subtitle }}
        </p>
        <div
          v-if="vacancy.tags && vacancy.tags.length"
          class="careers-position__tags"
        >
          <PositionTags :tags="vacancy.tags" />
        </div>
        <NuxtLink to="#careers-position-form">
          <UIButton class="careers-position__apply-button">
            Apply now
          </UIButton>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PositionLabels from './PositionLabels'
import PositionTags from './PositionTags'
import UIButton from '../../shared/UIButton'

export default {
  name: 'PositionHeader',
  components: {
    PositionLabels,
    PositionTags,
    UIButton,
  },

  computed: {
    ...mapGetters(['vacancy']),
  },
}
</script>

<style scoped lang="scss">
@import '../../../assets/styles/vars';

@keyframes moveArrow {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(3px);
  }
}

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
    line-height: 74px;
    letter-spacing: -3.6px;
  }
  &__subtitle {
    margin-top: 24.5px;
    font-size: 17px;
    line-height: 24px;
    letter-spacing: -0.013em;
  }
  &__tags {
    margin-top: 23px;
  }
  &__apply-button {
    font-family: Inter, sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 27px;
    letter-spacing: -0.1px;
    width: 190px;
    height: 48px;
    margin-top: 47.5px;
    border-radius: 6px;
    &::after {
      content: '↓';
      transform: translateY(0);
      display: inline-block;
      margin-left: 8px;
    }
    &:hover::after {
      animation: moveArrow 1s linear infinite;
    }
  }
}
</style>
