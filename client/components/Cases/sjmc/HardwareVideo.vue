<template>
  <div class="case_default-video">
    <div
      class="case_sound-control"
      @click="toggleSound"
    >
      <div
        ref="soundIcon"
        class="case_sound-icon"
        data-testid="test-case_sound-icon"
        :class="soundMode"
      />
      <p class="case_sound-control-desc">
        Enable sound to the best expirience
      </p>
    </div>
    <div class="case_video-wrapper case_full-screen-video">
      <video
        id="iphone-video"
        ref="video"
        width="100%"
        height="100%"
        muted
        playsinline
        loop
      >
        <source
          :src="getMediaFromS3('/videos/bluetooth-beacons-video.9ca649c.mp4')"
          type="video/mp4"
        >
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</template>

<script>
import autoplayVideoMixin from '@/mixins/autoplayVideoMixin'

export default {
  name: 'HardwareVideo',

  mixins: [autoplayVideoMixin(['iphone-video'])],

  data() {
    return {
      isActiveSound: false,
    }
  },

  computed: {
    soundMode() {
      return this.isActiveSound ? 'case_sound-icon--sound-on' : 'case_sound-icon--sound-off'
    },
  },

  methods: {
    toggleSound() {
      this.isActiveSound = this.$refs.video.muted
    },
  },
}
</script>

<style lang="scss" scoped>
  @import '../../../assets/styles/vars';

  .case {
    &_video-wrapper {
      width: 23%;
      max-width: 460px;
      min-width: 270px;
      position: relative;
      cursor: pointer;
    }

    &_sound-control {
      width: max-content;
      display: flex;
      margin: auto auto 28px auto;
      border-radius: 26px;
      background-color: $bgcolor--sound-control;
      cursor: pointer;
    }

    &_sound-icon {
      height: 30px;
      width: 33px;
      position: relative;
      margin: 3px 0 3px 3px;
      border: none;
      border-radius: 100%;
      background-color: $bgcolor--black-oil;
      cursor: pointer;

      &--sound-off,
      &--sound-on {
         &::before {
          content: '';
          width: 17px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }

      &--sound-off::before {
        height: 17px;
        background: url('@/assets/img/Cases/sjmc/sound-off.svg') no-repeat;
      }

      &--sound-on::before {
        height: 14px;
        background: url('@/assets/img/Cases/sjmc/sound-on.svg') no-repeat;
      }
    }

    &_sound-control-desc {
      padding: 8px 20px;
      font-size: 17px;
      line-height: 20px;
      letter-spacing: -0.41px;
      color: $text-color--grey-opacity-40-percent;
    }

    @media only screen and (max-width: 1180px) {
      &_sound-icon {
        width: 29px;
        height: 26px;
      }

      &_sound-control-desc {
        padding: 6px 12px;
        font-size: 14px;
      }
    }
  }
</style>
