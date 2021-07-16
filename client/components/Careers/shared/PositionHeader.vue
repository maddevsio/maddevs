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
        <h1
          class="careers-position__title"
        >
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
        <UIButton
          type="button"
          class="careers-position__apply-button"
          @click="scrollToElement('#careers-position-form')"
        >
          Apply now
        </UIButton>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PositionLabels from '@/components/Careers/shared/PositionLabels'
import PositionTags from '@/components/Careers/shared/PositionTags'
import UIButton from '@/components/shared/UIButton'
import scrollToElementMixin from '@/mixins/scrollToElementMixin'

export default {
  name: 'PositionHeader',
  components: {
    PositionLabels,
    PositionTags,
    UIButton,
  },

  mixins: [scrollToElementMixin],

  computed: {
    ...mapGetters(['vacancy']),
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_vars.scss';

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
    padding: 155px 0 95px;
    margin-bottom: 60px;
    background-color: $bgcolor--black;
    color: $text-color--white-primary;
    /deep/ .ui-button {
      width: 190px;
      height: 48px;
      font-weight: 400;
      border-radius: 6px;
      line-height: 27px;
      letter-spacing: -0.1px;
      margin-top: 47.5px;
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

  @media screen and (max-width: 1024px) {
    &__header {
      padding: 120px 0 60px;
    }
    &__title {
      font-size: 52px;
      line-height: 64px;
      letter-spacing: -3px;
    }
  }

  @media screen and (max-width: 576px) {
    &__title {
      font-size: 35px;
      line-height: 45px;
      letter-spacing: -1.4px;
    }
  }
}
</style>
