<template>
  <div
    class="careers-position__header"
  >
    <div class="container">
      <div class="careers-position__container">
        <div
          v-if="vacancy.labels.remote || vacancy.labels.relocation"
          class="careers-position__labels"
          data-aos="fade-right"
          data-aos-duration="600"
        >
          <PositionLabels :labels="vacancy.labels" />
        </div>
        <h1
          class="careers-position__title"
          data-aos="fade-right"
          data-aos-duration="600"
        >
          {{ vacancy.title }}
        </h1>
        <p
          v-if="vacancy.subtitle"
          data-aos="fade-right"
          data-aos-duration="600"
          class="careers-position__subtitle"
        >
          {{ vacancy.subtitle }}
        </p>
        <div
          v-if="vacancy.tags && vacancy.tags.length"
          data-aos="fade-right"
          data-aos-duration="600"
          class="careers-position__tags"
        >
          <PositionTags :tags="vacancy.tags" />
        </div>
        <NuxtLink
          to="#careers-position-form"
        >
          <UIButton
            data-aos="fade-up"
            data-aos-duration="600"
            type="button"
            class="careers-position__apply-button"
          >
            Apply now
          </UIButton>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PositionLabels from '@/components/Careers/shared/PositionLabels'
import PositionTags from '@/components/Careers/shared/PositionTags'
import UIButton from '@/components/shared/UIButton'

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
