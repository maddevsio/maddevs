<template>
  <section
    id="case-header"
    class="case_header"
  >
    <video
      v-if="!isIphone"
      class="case_main-video"
      loop="true"
      muted="true"
      autoplay="true"
    >
      <source
        :src="video"
        type="video/mp4"
      >
      Your browser does not support the video tag.
    </video>
    <div class="case_header-content">
      <div class="case_header-text">
        <div class="case_case-study-item">
          Case Study
        </div>
        <slot name="title" />
        <slot name="description" />
        <slot name="actions" />
      </div>
      <img
        :width="logo.width"
        :height="logo.height"
        :src="require(`@/assets/img/Cases/${logo.folder}/svg/${logo.file}.svg`)"
        :alt="logo.alt"
        :class="`case_${logo.file}`"
        class="case_header-logo"
      >
    </div>
  </section>
</template>

<script>
export default {
  name: 'Header',

  props: {
    logo: {
      type: Object,
      default: () => {},

      width: {
        type: Number,
        default: 0,
      },

      height: {
        type: Number,
        default: 0,
      },

      folder: {
        type: String,
        default: '',
      },

      file: {
        type: String,
        default: '',
      },

      alt: {
        type: String,
        default: '',
      },
    },

    videoName: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      isIphone: false,
      video: '',
    }
  },

  created() {
    this.video = `${process.env.awsUrl}/${this.$props.videoName}`
  },

  mounted() {
    if (navigator.userAgent.match(/(iPhone)/i)) {
      this.isIphone = true
    } else {
      this.isIphone = false
    }
  },
}
</script>

<style scoped lang="scss">
@import '../../../assets/styles/cases/header';
@import '../../../assets/styles/cases/mixins';

.case {
  &_header {
    display: flex;

    &:after {
      display: none;
    }
  }

  &_header-content {
    max-width: calc(100% - 48px);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    z-index: 1;
  }

  &_header-text {
    @include default_text($text-color--white, 17px, 166%, -0.035em, normal);
  }

  &_header-title {
    @include title($text-color--white, 67.88px, -2px);
    line-height: 112%;
    text-align: left;
  }

  &_header-description {
    margin-top: 10px;
    text-align: left;
  }

  &_case-study-item {
    max-width: 88px;
    margin-bottom: 24px;
    padding: 4px 8px;
    letter-spacing: -0.035em;
    text-align: center;
    background-color: $bgcolor--red;
  }

  @media screen and (max-width: 1170px) {
    &_header-content {
      flex-direction: column-reverse;
      align-items: flex-start;
    }
  }

  @media screen and (max-width: 655px) {
    &_header-content {
      max-width: 327px;

      br {
        display: none;
      }
    }

    &_header-title {
      @include title($text-color--white, 35px, -1px);
      line-height: 130%;
    }

    &_header-info,
    &_case-study-item {
      @include default_text($text-color--white, 16px, 150%, -0.02em, normal);
    }

    &_case-study-item {
      max-width: 85px;
      margin-bottom: 20px;
    }
  }

  @media screen and (max-width: 370px) {
    &_header-content {
      max-width: 270px;
    }

    &_header-title {
      font-size: 30px;
    }

    &_header-text,
    &_case-study-item {
      font-size: 13px;
    }
  }
}
</style>
