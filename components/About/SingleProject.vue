<template>
  <div class="single-project" :style="{ background: project.projectColor }">
    <div class="single-project__container" :class="{ 'single-project__container_white-letters-theme': isWhiteColored}">
      <div class="single-project__content-wrap">
        <img :src="require(`@/assets/img/Home/svg/clients/${project.logoImg}.svg`)" class="single-project__logo" :alt="project.projectName" />
        <h4 class="single-project__sub-title sub-title">{{project.projectTitle}}</h4>
        <p class="single-project__paragraph paragraph">{{project.projectDescription}}</p> 
        <ContributionWidget
          :contributionWidgetColors="project.contributionWidgetColors"
          :projectName="project.projectName"
        />
      </div>
      <div class="single-project__background" :style="{'background-image': 'url(' + require(`@/assets/img/Studies/png/${project.projectBackground}.png`) + ')'}" :class="{ 'single-project__background_first-project': isFirstProject}"></div>
    </div>
  </div>
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
      if(this.project.projectName === 'teacherly' || this.project.projectName === 'guardrails') {
        return true;
      }
      return false;
    },
    isFirstProject() {
      if(this.project.projectName === 'nambafood') {
        return true;
      }
      return false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/vars';

.single-project {
  width: 50%;
  min-width: 400px;
  position: relative;
  z-index: 99;

  @media only screen and (max-width: 1020px) {
    width: 100%;

    &__content-wrap {
      margin:  68px 30px 0;
    }
  }

  &__container {
    &_white-letters-theme {
      color: $text-color--white;
    }
  }

  &__content-wrap {
    margin:  74px 70px 0;
    height: 230px;
    z-index: 1;
  }

  &__sub-title {
    margin-top: 22.5px;
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
  }

  @media screen and (max-width: 1020px) and (min-width: 798px) {
    .single-project {
      &__background {
        background-size: contain;

        &_first-project {
          background-size: cover;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .single-project {
      width: 100%;
      min-width: 320px;

      &__background {
        width: 85%;
        margin-left: 1.188em;
      }

      &__container {
        padding-top: 1px;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      &__content-wrap {
        margin:  68px 30px 0;
        height: 270px;
      }
    }
  }

  @media screen and (max-width: 768px) and (min-width: 679px) {
    .single-project {
      &__background {
        background-size: contain;
        height: 378px;

        &_first-project {
          background-size: cover;
        }
      }
    }
  }

  @media only screen and (max-width: 576px) {
    .single-project {
      min-width: 100%;

      &__sub-title {
        font-weight: bold;
        font-size: 41px;
        line-height: 40px;
      }

      &__content-wrap {
        margin: 40px 77px 0 34px;
        height: 65px;
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

  @media only screen and (max-width: 410px) {
    .single-project {
      &__background {
        width: 80%;
        margin-left: -2.4em;
      }
    }
  }
}

</style>
