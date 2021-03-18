<template>
  <div
    ref="trackContainer"
    class="comparsion-container"
    v-on:mousemove="trackLocation"
    v-on:mousedown="trackLocation"
    v-on:touchstart="trackLocation"
    v-on:touchmove="trackLocation"
    v-on:touchend="trackLeave"
    v-on:mouseleave="trackLeave"
  >
    <div class="comparsion-track-line" ref="trackLine"></div>
    <div class="comparsion-view">
      <div
        ref="beforeImage"
        class="comparsion-image_before"
        :style="`background-image: url(${require(`@/assets/img/${beforeImageSrc}`)});`"
      ></div>
      <img
        ref="afterImage"
        loading="lazy"
        class="comparsion-image_after"
        :src="require(`@/assets/img/${afterImageSrc}`)"
        :alt="altText"
        :width="baseWidth"
        :height="baseHeight"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BeforeAfterImage',
  props: {
    beforeImageSrc: {
      type: String,
      default: ''
    },
    afterImageSrc: {
      type: String,
      default: ''
    },
    altText: {
      type: String,
      default: ''
    },
    baseWidth: String,
    baseHeight: String
  },
  data() {
    return {
      trackLeaveTimeout: null
    };
  },
  methods: {
    trackLocation(e) {
      e.preventDefault();
      e.stopPropagation();
      clearTimeout(this.trackLeaveTimeout);
      this.$refs.beforeImage.style.transition = null;
      this.$refs.trackLine.style.transition = '0.3s ease-out opacity';
      this.$refs.trackLine.style.opacity = '0.3';
      const trackContainerRect = this.$refs.trackContainer.getBoundingClientRect();
      const afterImageRect = this.$refs.afterImage.getBoundingClientRect();
      /**
      *  This calculation is the formula for finding the percentage of the total amount
      *  e.pageX - cursor position from the left edge of the screen
      *  afterImageRect.left - position of the afterImage element from the left edge of the screen
      *  (e.pageX - afterImageRect.left) - this result is a part of the total amount of the picture width (unknown%)
      *  this.$refs.afterImage.offsetWidth - total amount of the picture width (100%)
      */
      const trackLinePosition = ((e.pageX - trackContainerRect.left) / this.$refs.trackContainer.offsetWidth) * 100;
      const beforeImagePosition = ((e.pageX - afterImageRect.left) / this.$refs.afterImage.offsetWidth) * 100;
      if (trackLinePosition >= 0 && trackLinePosition <= 100) {
        this.$refs.trackLine.style.left = `${trackLinePosition}%`;
      }
      if (beforeImagePosition >= 0 && beforeImagePosition <= 100) {
        this.$refs.beforeImage.style.width = `${beforeImagePosition}%`;
      }
    },
    trackLeave() {
      this.trackLeaveTimeout = setTimeout(() => {
        this.$refs.beforeImage.style.transition = '0.3s ease-out width';
        this.$refs.trackLine.style.transition = '0.3s ease-out left, 0.3s ease-in opacity';
        this.$refs.beforeImage.style.width = '50%';
        this.$refs.trackLine.style.left = '50%';
        this.$refs.trackLine.style.opacity = '1';
      }, 5000);
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';

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
        display: block;
      }
    }

    &-track-line {
      z-index: 2;
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
      z-index: 1;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 50%;
      background-size: cover;
    }

    &-image_after {
      z-index: -1;
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
