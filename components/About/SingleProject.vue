<template>
  <a
    href="https://blog.maddevs.io/"
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
      <div
        class="single-project__background"
        :style="{
          'background-image':
            'url(' +
            require(`@/assets/img/Studies/png/${project.projectBackground}.png`) +
            ')'
        }"
        :class="backgroundModifierClasses"
      ></div>
    </div>
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
      contributionWidgetColors: {
        type: Array,
        required: true
      },
      projectBackground: {
        type: String,
        required: true
      },
      projectColor: {
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
      if (
        this.project.projectName === 'teacherly' ||
        this.project.projectName === 'guardrails'
      ) {
        return true;
      }
      return false;
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
  display: block;

  @media only screen and (min-width: 1600px) {
    .single-project {
      &__content-wrap {
        height: 320px;
      }

      &__sub-title {
        font-size: 50px;
      }
    }
  }

  @media only screen and (max-width: 1600px) {
    .single-project {
      &__content-wrap {
        height: 302px;
      }

      &__sub-title {
        font-size: 50px;
      }
    }
  }

  @media only screen and (max-width: 1440px) {
    .single-project {
      &__content-wrap {
        margin: 60px 46px 0;
        height: 230px;
      }
    }
  }

  @media only screen and (max-width: 1280px) {
    .single-project {
      &__background {
        &_first-project {
          width: 100%;
          background-size: contain;
        }
      }

      &__content-wrap {
        height: 225px;
        margin: 50px 34px 0;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .single-project {
      &__content-wrap {
        margin: 68px 34px 0;
        height: 175px;
      }

      &__sub-title {
        line-height: 40px;
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
    margin: 74px 70px 0;
    height: 270px;
    z-index: 1;
  }

  &__sub-title {
    margin-top: 22.5px;
    line-height: 110%;
    letter-spacing: -2px;
  }

  &__paragraph {
    margin-top: 33px;
  }

  .contribution-widget {
    display: flex;
    align-items: center;
    position: relative;
    z-index: 1;
    color: $text-color--grey;
    font-family: 'Hoves-Regular';
    margin-top: 36px;
    font-size: 16px;
    line-height: 23px;

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
      margin-left: 6px;

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
    height: 413px;
    width: 100%;

    &_guardrails {
      position: relative;
    }

    &_first-project {
      width: 100%;
      background-size: cover;
    }
  }

  @media screen and (max-width: 1024px) {
    .single-project {
      &__sub-title {
        font-size: 47px;
      }

      &__paragraph {
        font-size: 16px;
      }
    }
  }

  @media screen and (max-width: 920px) {
    .single-project {
      min-width: inherit;

      &__sub-title {
        font-size: 44px;
      }
    }
  }

  @media screen and (max-width: 870px) {
    .single-project {
      &__sub-title {
        font-size: 40px;
      }
    }
  }

  @media screen and (max-width: 820px) {
    .single-project {
      &__sub-title {
        font-size: 39px;
      }
    }
  }

  @media only screen and (max-width: 810px) and (min-width: 769px) {
    .single-project {
      &__content-wrap {
        margin: 68px 23px 0;
        height: 145px;
      }
    }
  }

  @media screen and (max-width: 1030px) and (min-width: 798px) {
    .single-project {
      &__background {
        background-size: contain;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .single-project {
      &__content-wrap {
        height: 230px;
      }

      &__sub-title {
        font-size: 47px;
      }

      &__background {
        background-size: contain;

        &_first-project {
          width: 100%;
          background-size: contain;
        }
      }

      &__container {
        padding-top: 1px;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
  }

  @media screen and (max-width: 768px) and (min-width: 580px) {
    .single-project {
      &__background {
        background-size: contain;
        height: 378px;
      }
    }
  }

  @media only screen and (max-width: 576px) {
    .single-project {
      &__logo {
        height: 40px;
      }

      &__content-wrap {
        height: 100px;
        word-wrap: break-word;

        .contribution-widget {
          margin-top: 26px;
        }
      }

      &__paragraph {
        margin-top: 15px;
      }
    }
  }

  @media only screen and (max-width: 445px) {
    .single-project {
      &__content-wrap {
        margin: 50px 21px 0;
      }

      &__sub-title {
        font-size: 41px;
      }
    }
  }

  @media only screen and (max-width: 410px) {
    .single-project {
      &__background {
        &_first-project {
          background-size: contain;
          width: 100%;
        }

        &_guardrails {
          width: calc(100% - 47px);
        }
      }
    }
  }

  @media only screen and (max-width: 340px) {
    .single-project {
      &__content-wrap {
        margin: 50px 17px 0;
      }
    }
  }
}
</style>
