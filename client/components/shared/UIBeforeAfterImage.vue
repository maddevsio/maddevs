<template>
  <div
    ref="trackContainer"
    data-testid="track-img"
    class="comparsion-container"
    @mousemove="trackLocation"
    @mousedown="trackLocation"
    @touchstart="trackLocation"
    @touchmove="trackLocation"
    @touchend="trackLeave"
    @mouseleave="trackLeave"
  >
    <div
      ref="trackLine"
      data-testid="test-comparsion-track-line"
      class="comparsion-track-line"
    />
    <div class="comparsion-view">
      <div
        ref="beforeImage"
        data-testid="test-comparsion-image_before"
        :style="beforeImageStyle"
        class="comparsion-image_before"
      />
      <img
        ref="afterImage"
        data-testid="test-comparsion-image_after"
        :src="afterImageSrc"
        :alt="afterImageAlt"
        :width="baseWidth"
        :height="baseHeight"
        loading="lazy"
        class="comparsion-image_after"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'BeforeAfterImage',
  props: {
    baseWidth: {
      type: String,
      default: '',
    },

    baseHeight: {
      type: String,
      default: '',
    },

    beforeImage: {
      type: String,
      default: '',
    },

    afterImage: {
      type: String,
      default: '',
    },

    alt: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      beforeImageWidth: 50, // %
      trackLinePosition: 50, // %
      trackLeaveTimeout: null,
    }
  },

  computed: {
    beforeImageStyle() {
      return this.beforeImage
        ? `background-image: url(${this.$getMediaFromS3(this.beforeImage)});`
        : null
    },

    afterImageSrc() {
      return this.afterImage ? this.$getMediaFromS3(this.afterImage) : null
    },

    afterImageAlt() {
      return this.alt || null
    },
  },

  methods: {
    trackLocation(event) {
      if (this.$refs.beforeImage && this.$refs.trackContainer && this.$refs.trackLine && this.$refs.afterImage) {
        const cursorPositionX = event.pageX || (event.targetTouches && event.targetTouches[0].pageX)
        event.preventDefault()
        event.stopPropagation()
        clearTimeout(this.trackLeaveTimeout)
        this.$refs.beforeImage.style.transition = null
        this.$refs.trackLine.style.transition = '0.3s ease-out opacity'
        this.$refs.trackLine.style.opacity = '0.25'
        const trackContainerRect = this.$refs.trackContainer.getBoundingClientRect()
        const afterImageRect = this.$refs.afterImage.getBoundingClientRect()
        /**
         *  This calculation is the formula for finding the percentage of the total amount
         *  cursorPositionX - cursor position from the left edge of the screen
         *  afterImageRect.left - position of the afterImage element from the left edge of the screen
         *  (cursorPositionX - afterImageRect.left) - this result is a part of the total amount of the picture width (unknown%)
         *  this.$refs.afterImage.offsetWidth - total amount of the picture width (100%)
         */
        this.beforeImageWidth = ((cursorPositionX - afterImageRect.left) / this.$refs.afterImage.offsetWidth) * 100
        this.trackLinePosition = ((cursorPositionX - trackContainerRect.left) / this.$refs.trackContainer.offsetWidth) * 100
        this.$refs.beforeImage.style.width = `${this.beforeImageWidth}%`
        this.$refs.trackLine.style.left = `${this.trackLinePosition}%`
        if (this.beforeImageWidth > 100) this.$refs.beforeImage.style.width = '100%'
        if (this.beforeImageWidth < 0) this.$refs.beforeImage.style.width = '0%'
        if (this.trackLinePosition > 100) this.$refs.trackLine.style.left = '100%'
        if (this.trackLinePosition < 0) this.$refs.trackLine.style.left = '0%'
      }
    },

    trackLeave() {
      this.trackLeaveTimeout = setTimeout(() => {
        if (this.$refs.beforeImage && this.$refs.trackLine) {
          this.beforeImageWidth = 50
          this.trackLinePosition = 50
          this.$refs.beforeImage.style.transition = '0.3s ease-out width'
          this.$refs.trackLine.style.transition = '0.3s ease-out left, 0.3s ease-in opacity'
          this.$refs.beforeImage.style.width = '50%'
          this.$refs.trackLine.style.left = '50%'
          this.$refs.trackLine.style.opacity = '1'
        }
      }, 2500)
    },
  },
}
</script>

<style lang="scss" scoped>
.comparsion {
  &-container {
    cursor: col-resize;
    position: relative;
    max-width: 100%;
    width: calc(100% + 48px);
    margin-left: -24px;
    padding: 20px 24px;
    -webkit-touch-callout: none;
    -ms-touch-action: none;
    -webkit-user-select: none;
    img {
      width: 100%;
      height: auto;
      display: block;
      margin: 0 auto;
    }
  }

  &-track-line {
    z-index: 3;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 2px;
    height: 100%;
    background-color: $bgcolor--red;
  }

  &-view {
    position: relative;
  }

  &-image_before {
    z-index: 2;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 50%;
    max-width: calc(100% - 0.6px); // 0.6px - so that image_before does not jump on the 100% width size
    background-size: cover;
  }

  &-image_after {
    z-index: 1;
    width: 100%;
    height: auto;
  }

  @media screen and (max-width: 768px) {
    &-container {
      width: calc(100% + 24px);
      margin-left: -12px;
      padding: 20px 12px;
    }
  }

  @media screen and (max-width: 420px) {
    &-container {
      width: calc(100% + 12px);
      margin-left: -6px;
      padding: 20px 6px;
    }
  }

  @media screen and (max-width: 370px) {
    &-container {
      width: calc(100% + 6px);
      margin-left: -3px;
      padding: 20px 3px;
    }
  }
}
</style>
