<template>
  <a
    :href="project.link"
    class="single-project"
    :style="{ background: project.projectColor }"
    :target="project.targetBlank ? '_blank' : '_self'"
  >
    <div class="single-project__container" :class="colorTheme">
      <div class="single-project__content-wrap">
        <img
          :width="project.logoWidth"
          height="41"
          :data-src="require(`@/assets/img/Home/svg/caseIcons/${project.logoImg}.svg`)"
          class="img_lazy single-project__logo"
          :alt="project.alt"
        >
        <h3 class="single-project__sub-title">
          {{ project.projectTitle }}
        </h3>
        <p class="single-project__paragraph paragraph">
          {{ project.projectDescription }}
        </p>
        <ContributionWidget
          :projectName="project.projectName"
          :contribution="project.contribution"
          :maddevsLogo="project.maddevsLogo"
        />
      </div>
      <div class="single-project__background" :class="backgroundModifierClasses">
        <picture>
          <source
            class="multi-image"
            :data-srcset="[require(`@/assets/img/Studies/webp/${project.projectBackground}.webp`) + ' ', require(`@/assets/img/Studies/webp/${project.projectBackground}.webp`) + ' 2x']"
            type='image/webp'>
          <img
            :data-src="[require(`@/assets/img/Studies/${project.fileExtension}/${project.projectBackground}.${project.fileExtension}`)]"
            :data-srcset="[require(`@/assets/img/Studies/${project.fileExtension}/${project.projectBackground}.${project.fileExtension}`) + ' 2x']"
            class="img_lazy"
            :alt="project.alt"
            width="610"
            height="294"
          >
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
      },
      alt: {
        type: String,
        default: ''
      },
      fileExtension: {
        type: String,
        default: ''
      }
    }
  },
  computed: {
    colorTheme() {
      if (this.project.projectName === 'sjmc' || this.project.projectName === 'guardrails') {
        return 'single-project_white-letters-theme';
      } else {
        return 'single-project_black-letters-theme';
      }
    },
    backgroundModifierClasses() {
      return this.project.projectName === 'guardrails' ? 'single-project__background_guardrails' : '';
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/vars';

.single-project {
  position: relative;
  z-index: 99;
  text-decoration: none;
  color: initial;
  display: block;

  &__logo {
    display: block;
    max-height: 41px;
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
      height: auto;
      position: absolute;
      bottom: 0;
    }

    &_guardrails {
      position: relative;
    }
  }

  &_white-letters-theme {
    color: $text-color--white;
  }

  &_black-letters-theme {
    color: $text-color--black-lighter;
  }
}
</style>
