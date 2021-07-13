<template>
  <section
    id="transparent-header-area"
    class="case_header"
    :class="`case_header-${project}`"
  >
    <!-- Image placeholder fallback for Video -->
    <div
      class="case_main-video_fallback"
      :style="{ backgroundImage: `url(${$getMediaFromS3(videoFallbackPath)})` }"
    />
    <!-- End Image placeholder fallback for Video -->
    <video
      v-if="!isIphone"
      class="case_main-video media_lazy"
      data-testid="test-case_main-video"
      loop="true"
      muted="true"
      autoplay="true"
    >
      <source
        :data-src="$getMediaFromS3(videoName)"
        type="video/mp4"
      >
      Your browser does not support the video tag.
    </video>
    <div class="case_header-content">
      <!-- sectionTextOpacity - value from changeOpacityOnScrollMixin mixin -->
      <div
        ref="sectionText"
        :style="{opacity: sectionTextOpacity}"
        class="case_header-text"
      >
        <div class="case_case-study-item">
          Case Study
        </div>
        <slot name="title" />
        <slot name="description" />
        <slot name="actions" />
      </div>
      <img
        :style="{opacity: sectionTextOpacity}"
        :width="logo.width"
        :height="logo.height"
        :src="$getMediaFromS3(`/images/Cases/${logo.folder}/svg/${logo.file}.svg`)"
        :alt="logo.alt"
        :class="`case_${logo.file}`"
        class="case_header-logo"
      >
    </div>
  </section>
</template>

<script>
import changeSectionTextOpacityMixin from '@/mixins/changeSectionTextOpacityMixin'

export default {
  name: 'Header',

  mixins: [changeSectionTextOpacityMixin('sectionText')],

  props: {
    logo: {
      type: Object,
      required: true,

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

    videoFallbackPath: {
      type: String,
      default: '',
    },

    project: {
      type: String,
      default: '',
    },

    scrollContainer: {
      type: Object,
      default: null,
    },
  },

  data() {
    return {
      isIphone: false,
    }
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
.case {
  &_header {
    display: flex;

    &::before {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
    }

    &:after {
      display: none;
    }
  }

  &_header-yourcast {
    background-color: rgba(0, 0, 0, 0.5);
  }

  &_header-content {
    max-width: calc(100% - 48px);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    z-index: 1;
  }

  &_header-logo {
    color: $text-color--white;
    transition: none;
  }

  &_header-text {
    @include default-text($text-color--white, 17px, 166%, -0.035em, normal);
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

  &_main-video_fallback {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    z-index: -1;
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
      @include default-text($text-color--white, 16px, 150%, -0.02em, normal);
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
