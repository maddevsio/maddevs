<template>
  <a
    :href="project.link"
    class="single-project"
    :style="{ background: project.projectColor }"
    :target="project.targetBlank ? '_blank' : '_self'"
  >
    <div
      class="single-project__container"
      :class="{
        'single-project__container_white-letters-theme': isWhiteColored
      }"
    >
      <div class="single-project__content-wrap">
        <span :class="`single-project__logo-bg single-project__logo-bg--${project.logoImg}`"/>
        <h3 class="single-project__sub-title">
          {{ project.projectTitle }}
        </h3>
        <p class="single-project__paragraph paragraph">
          {{ project.projectDescription }}
        </p>
        <ContributionWidget
          :contributionWidgetColors="project.contributionWidgetColors"
          :projectName="project.projectName"
        />
      </div>
      <div class="single-project__background" :class="backgroundModifierClasses">
        <picture>
          <source
            class="multi-image"
            :srcset="[require(`@/assets/img/Studies/png/${project.projectBackground}.webp`) + ' ', require(`@/assets/img/Studies/png/${project.projectBackground}.webp`) + ' 2x']"
            type='image/webp'>
          <img
            :src="[require(`@/assets/img/Studies/png/${project.projectBackground}.png`)]"
            :srcset="[require(`@/assets/img/Studies/png/${project.projectBackground}.png`) + ' 2x']"
            loading="lazy"
            :alt="project.projectBackground">
        </picture>
      </div>
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
@import '../../assets/styles/caseIcons';

.single-project {
  position: relative;
  z-index: 99;
  text-decoration: none;
  color: initial;
  display: block;

  &__logo-bg {
    display: block;
    height: 41px;

    &--godeeColored {
      @include godee-icon;
    }

    &--guardrailsColored {
      @include guardrails-icon;
    }

    &--nambafoodColored {
      @include nambafood-icon;
    }

    &--teacherlyColored {
      @include teacherly-icon;
    }
  }

  &__content-wrap {
    padding: 32px 32px 0;
    z-index: 1;
  }

  &__container {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
  }

  &__sub-title {
    font-family: 'Poppins-Bold', sans-serif;
    font-size: 40px;
    line-height: 120%;
    letter-spacing: -1px;
    margin-top: 34px;
    color: #111213;
    margin-bottom: 16px;

    @media screen and (max-width: 1158px) {
      font-size: 36px;
    }

    @media screen and (max-width: 1100px) {
      font-size: 32px;
    }

    @media screen and (max-width: 978px) {
      margin-top: 14px;
      font-size: 25px;
    }

    @media screen and (max-width: 826px) {
      font-size: 22px;
    }

    @media screen and (max-width: 768px) {
      font-size: 20px;
    }

    @media screen and (max-width: 650px) {
      font-size: 18px;
    }

    @media screen and (max-width: 608px) {
      font-size: 30px;
    }
  }

  &__paragraph {
    margin-top: 24px;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.02em;
    height: 72px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;

    @media screen and (max-width: 1229px) {
      height: 94px;
      -webkit-line-clamp: 4;
    }

    @media screen and (max-width: 1024px) {
      font-size: 14px;
      line-height: 24px;
      margin-top: 14px;
    }

    @media screen and (max-width: 873px) {
      height: 120px;
      -webkit-line-clamp: 5;
    }

    @media screen and (max-width: 800px) {
      height: 144px;
      -webkit-line-clamp: 6;
    }

    @media screen and (max-width: 650px) {
      font-size: 12px;
      line-height: 21px;
      height: 128px;
    }

    @media screen and (max-width: 608px) {
      -webkit-line-clamp: initial;
      font-size: 14px;
      line-height: 20px;
      height: auto;
      margin-bottom: 25px;
    }
  }

  .contribution-widget {
    display: flex;
    align-items: self-start;
    position: relative;
    z-index: 1;
    color: $text-color--grey;
    margin-top: 26px;

    @media screen and (max-width: 768px) {
      margin-top: 14px;
    }

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
    height: 322px;
    width: 100%;
    position: relative;

    @media screen and (max-width: 1120px) {
      height: 270px;
    }

    @media screen and (max-width: 1024px) {
      height: 230px;
    }

    @media screen and (max-width: 958px) {
      height: 180px;
    }

    @media screen and (max-width: 608px) {
      height: 270px;
    }

    @media screen and (max-width: 500px) {
      height: 180px;
    }

    @media screen and (max-width: 440px) {
      height: 200px;
    }

    img {
      width: 100%;
      position: absolute;
      bottom: 0;
    }

    &_guardrails {
      position: relative;
    }
  }

  &__container_white-letters-theme {
    .single-project {
      &__sub-title,
      &__paragraph {
        color: $text-color--white;
      }
    }
  }
}
</style>
