<template>
  <div class="case_only-ios-video">
    <div
      ref="videoWrap"
      class="case_video-wrapper case_full-screen-video case_video-wrapper--paused"
      data-testid="test-case_sjmc-phone"
      @click="toggleVideoState"
    >
      <video
        ref="video"
        data-testid="test-case_video"
        width="100%"
        height="100%"
        playsinline
        class="media_lazy"
      >
        <source
          :data-src="$getMediaFromS3('/videos/bluetooth-beacons-video.9ca649c.mp4')"
          type="video/mp4"
        >
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</template>

<script>
import mainMixins from '@/mixins/mainMixins'

export default {
  name: 'HardwareVideoOnlyIos',
  mixins: [mainMixins],
  mounted() {
    this.$refs.video.addEventListener('ended', this.onEndedHandler)
  },

  beforeDestroy() {
    this.$refs.video.removeEventListener('ended', this.onEndedHandler)
  },

  methods: {
    onEndedHandler() {
      this.$refs.videoWrap.classList.add('case_video-wrapper--paused')
    },

    toggleVideoState() {
      if (this.$refs.video && this.$refs.video.paused) {
        this.MixinPlayVideo(this.$refs.video)
        this.$refs.videoWrap.classList.remove('case_video-wrapper--paused')
      } else {
        this.$refs.video.pause()
        this.$refs.videoWrap.classList.add('case_video-wrapper--paused')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
  .case {
    &_video-wrapper {
      width: 23%;
      max-width: 460px;
      min-width: 225px;
      position: relative;
      cursor: pointer;

      &--paused {
        &::before {
          content: '';
          width: 8vw;
          height: 8vw;
          max-width: 110px;
          max-height: 110px;
          min-width: 80px;
          min-height: 80px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 1;
          background: url('@/assets/img/Cases/sjmc/play-btn.svg') no-repeat;
        }
      }

      @media screen and (max-width: 360px) {
        min-width: 280px;
      }
    }
  }
</style>
