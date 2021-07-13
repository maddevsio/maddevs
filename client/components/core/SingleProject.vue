<template>
  <NuxtLink
    :to="link"
    :style="{ background: color }"
    :target="isBlank ? '_blank' : '_self'"
    class="single-project"
  >
    <div
      :class="colorTheme"
      class="single-project__container"
    >
      <div class="single-project__content-wrap">
        <img
          :width="logoWidth"
          :data-src="require(`@/assets/img/Home/svg/caseIcons/${logo}.svg`)"
          :alt="alt"
          height="41"
          class="img_lazy single-project__logo"
        >
        <h3
          class="single-project__sub-title"
          v-html="title"
        >
          {{ title }}
        </h3>
        <p class="single-project__paragraph paragraph">
          {{ description }}
        </p>
        <div class="contribution-widget">
          <img
            :data-src="require(`@/assets/img/Home/svg/caseIcons/${mdLogo}.svg`)"
            width="20"
            height="18"
            class="contribution-widget__img img_lazy"
            alt="Mad Devs logo"
          >
          <span
            :class="`contribution-widget__content_${name}`"
            class="contribution-widget__content"
          >
            contribution: {{ contribution }}
          </span>
        </div>
      </div>
      <div
        class="single-project__background"
        :class="`single-project__${background}`"
      >
        <picture>
          <source
            :data-srcset="[
              require(`@/assets/img/Studies/webp/${background}.webp`) + ' ',
              require(`@/assets/img/Studies/webp/${background}.webp`) + ' 2x',
            ]"
            class="multi-image"
            type="image/webp"
          >
          <img
            :data-src="[require(`@/assets/img/Studies/${extension}/${background}.${extension}`)]"
            :data-srcset="[require(`@/assets/img/Studies/${extension}/${background}.${extension}`) + ' 2x']"
            :alt="alt"
            class="img_lazy"
            width="610"
            height="294"
          >
        </picture>
      </div>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  name: 'SingleProject',

  props: {
    name: {
      type: String,
      default: 'Project',
    },

    logo: {
      type: String,
      default: 'godee-icon',
    },

    logoWidth: {
      type: Number,
      default: 121,
    },

    mdLogo: {
      type: String,
      default: 'md-logo-black',
    },

    link: {
      type: String,
      default: '/case-studies/godee/',
    },

    isBlank: {
      type: Boolean,
      default: false,
    },

    background: {
      type: String,
      default: 'godeeBackground',
    },

    extension: {
      type: String,
      default: 'png',
    },

    color: {
      type: String,
      default: '#ff6A01',
    },

    title: {
      type: String,
      default: 'Convenient shuttle bus service',
    },

    description: {
      type: String,
      default: '',
    },

    contribution: {
      type: String,
      default: 'Backend, Infrastructure, Mobile Apps',
    },

    alt: {
      type: String,
      default: 'GoDee Bus Transportation Services Logo.',
    },
  },

  computed: {
    colorTheme() {
      if (this.name === 'sjmc' || this.name === 'yourcast') return 'single-project_white-letters-theme'
      return 'single-project_black-letters-theme'
    },
  },
}
</script>

<style lang="scss" scoped>
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
    @include font('Poppins', 40px, 700);
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
    height: 340px;
    width: 100%;
    position: relative;

    @media screen and (max-width: 1360px) {
      height: 322px;
    }

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

  &__yourcastBackground {
    opacity: 0.5;
  }
}

.contribution-widget {
  @include font('Inter', 16px, 400);
  display: flex;
  align-items: self-start;
  position: relative;
  z-index: 1;
  color: $text-color--grey;
  margin-top: 26px;
  line-height: 24px;
  letter-spacing: -0.02em;

  @media screen and (max-width: 1024px) {
    font-size: 14px;
    line-height: 24px;
  }

  @media screen and (max-width: 768px) {
    margin-top: 14px;
  }

  @media screen and (max-width: 650px) {
    font-size: 12px;
    line-height: 21px;
  }

  @media screen and (max-width: 608px) {
    font-size: 14px;
    line-height: 20px;
  }

  &__img {
    width: 20px;
    height: 18px;
    margin-top: 2px;
  }

  &__content {
    margin-left: 8px;

    &_godee,
    &_nambafood {
      color: $text-color--black;
    }

    &_sjmc,
    &_yourcast {
      color: $text-color--white-darken;
    }
  }
}
</style>
