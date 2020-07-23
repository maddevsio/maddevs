<template>
  <a
    :href="project.link"
    class="single-project"
    :style="{ background: project.projectColor }"
  >
    <div
      class="single-project__container"
      :class="{
        'single-project__container_white-letters-theme': isWhiteColored
      }"
    >
      <div class="single-project__content-wrap">
        <img
          :src="require(`@/assets/img/Home/svg/clients/${project.logoImg}.svg`)"
          class="single-project__logo"
          :alt="project.projectName"
        />
        <h4 class="single-project__sub-title sub-title">
          {{ project.projectTitle }}
        </h4>
        <p class="single-project__paragraph paragraph">
          {{ project.projectDescription }}
        </p>
        <ContributionWidget
          :contributionWidgetColors="project.contributionWidgetColors"
          :projectName="project.projectName"
        />
      </div>
    </div>
    <div
      class="single-project__background"
      :style="{
          'background-image':
            'url(' +
            require(`@/assets/img/Studies/png/${project.projectBackground}.png`) +
            ')'
        }"
      :class="backgroundModifierClasses"
    />
  </a>
</template>

<script>
import ContributionWidget from '@/components/About/ContributionWidget';

export default {
  name: 'SingleProject',
  components: {
    ContributionWidget
  },
  props: {
    project: {
      projectColor: {
        type: String,
        required: true
      },
      projectName: {
        type: String,
        required: true
      },
      logoImg: {
        type: String,
        required: true
      },
      link: {
        type: String,
        required: true
      },
      contributionWidgetColors: {
        type: Array,
        required: true
      },
      projectBackground: {
        type: String,
        required: true
      },
      projectTitle: {
        type: String,
        required: true
      }
    }
  },
  computed: {
    isWhiteColored() {
      return this.project.projectName === 'teacherly' || this.project.projectName === 'guardrails';
    },
    backgroundModifierClasses() {
      return {
        'single-project__background_first-project':
          this.project.projectName === 'nambafood',
        'single-project__background_guardrails':
          this.project.projectName === 'guardrails',
        'single-project__background_godee': this.project.projectName === 'godee'
      };
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/vars';

.single-project {
  width: 50%;
  position: relative;
  z-index: 99;
  text-decoration: none;
  color: initial;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (min-width: 1600px) {
    .single-project {
      &__sub-title {
        font-size: 3vw;
        letter-spacing: -1px;
      }
    }
  }

  &__container {
    &_white-letters-theme {
      color: $text-color--white;
    }
  }

  &__content-wrap {
    margin: 3.7vw 4vw 0;
    z-index: 1;
  }

  &__sub-title {
    margin-top: 1vw;
    line-height: 110%;
    letter-spacing: -2px;
  }

  &__paragraph {
    margin-top: 1vw;
    line-height: 1.7vw;
  }

  .contribution-widget {
    display: flex;
    align-items: center;
    position: relative;
    z-index: 1;
    color: $text-color--grey;
    margin-top: 2vw;

    &__img {
      &_black {
        fill: $text-color--black;
      }

      &_red {
        fill: $text-color--red;
      }

      &_gray {
        fill: $text-color--grey;
      }
    }

    &__content {
      margin-left: 0.5vw;

      &-mobile {
        display: none;
      }

      &_black {
        color: $text-color--black;
      }

      &_white {
        color: $text-color--white;
      }

      &_gray {
        color: $text-color--grey;
      }
    }

    @media only screen and (max-width: 576px) {
      &__content {
        display: none;

        &-mobile {
          display: block;
          margin-left: 6px;

          &_gray {
            color: $text-color--black;
          }

          &_mobile-white {
            color: $text-color--grey;
          }
        }
      }
    }
  }

  &__background {
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: contain;
    height: 22vw;
    width: 100%;

    &_guardrails {
      position: relative;
    }
  }

  @media only screen and (max-width: 745px) {

      &__content-wrap {
        margin: 10vw 9vw 0;
        z-index: 1;
        line-height: 1vw;
      }

      &__sub-title {
        margin-top: 5vw;
        line-height: 110%;
        letter-spacing: -1px;
      }

      &__paragraph {
        margin-top: 2vw;
        line-height: 5.9vw;
      }

      &__container {
        padding-top: 1px;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

    &__background {
      height: 39vw;
    }

    .contribution-widget {
      margin-top: 14vw;
    }
  }
}
</style>
