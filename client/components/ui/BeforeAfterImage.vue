<template>
  <div class="comparsion-container" id="comparsion-container">
    <div class="comparsion-track-line" id="comparsion-line" ref="trackLine"></div>
    <div class="comparsion-view" id="comparsion-view">
      <div
        class="comparsion-image comparsion-image_before"
        id="comparsion-before"
        ref="beforeImage"
        :style="`background-image: url(${require(`@/assets/img/${beforeImageSrc}`)});`"
      ></div>
      <img
        loading="lazy"
        class="comparsion-image comparsion-image_after"
        id="comparsion-after"
        :src="require(`@/assets/img/${afterImageSrc}`)"
        :alt="altText"
        :width="baseWidth"
        :height="baseHeight"
      />
    </div>
  </div>
</template>

<script>
import initImgLazyHelper from '@/helpers/initImgLazy';

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
  mounted() {
    initImgLazyHelper();
    this.getDomElements();
    this.addEventListeners();
  },
  data() {
    return {
      trackContainer: null,
      trackLine: null,
      trackView: null,
      beforeImage: null,
      afterImage: null
    };
  },
  methods: {
    getDomElements() {
      this.trackContainer = document.getElementById('comparsion-container');
      this.trackLine = document.getElementById('comparsion-line');
      this.trackView = document.getElementById('comparsion-view');
      this.beforeImage = document.getElementById('comparsion-before');
      this.afterImage = document.getElementById('comparsion-after');
    },
    trackLocation(e) {
      e.preventDefault();
      e.stopPropagation();
      this.$refs.beforeImage.style.transition = null;
      this.$refs.trackLine.style.transition = '0.3s ease-out opacity';
      this.$refs.trackLine.style.opacity = '0.3';
      const trackContainerRect = this.trackContainer.getBoundingClientRect();
      const afterImageRect = this.afterImage.getBoundingClientRect();
      /**
      *  This calculation is the formula for finding the percentage of the total amount
      *  e.pageX - cursor position from the left edge of the screen
      *  afterImageRect.left - position of the afterImage element from the left edge of the screen
      *  (e.pageX - afterImageRect.left) - this result is a part of the total amount of the picture width (unknown%)
      *  this.trackContainer.offsetWidth - total amount of the picture width (100%)
      */
      const beforeImagePosition = ((e.pageX - afterImageRect.left) / this.afterImage.offsetWidth) * 100;
      const trackLinePosition = ((e.pageX - trackContainerRect.left) / this.trackContainer.offsetWidth) * 100;
      if (beforeImagePosition >= 0 && beforeImagePosition <= 100) {
        this.$refs.beforeImage.style.width = `${beforeImagePosition}%`;
      }
      if (trackLinePosition >= 0 && trackLinePosition <= 100) {
        this.$refs.trackLine.style.left = `${trackLinePosition}%`;
      }
    },
    trackLeave() {
      setTimeout(() => {
        this.$refs.beforeImage.style.transition = '0.3s ease-out width';
        this.$refs.trackLine.style.transition = '0.3s ease-out left, 0.3s ease-in opacity';
        this.$refs.beforeImage.style.width = '50%';
        this.$refs.trackLine.style.left = '50%';
        this.$refs.trackLine.style.opacity = '1';
      }, 5000);
    },
    addEventListeners() {
      this.trackContainer.addEventListener('mousemove', this.trackLocation);
      this.trackContainer.addEventListener('mousedown', this.trackLocation);
      this.trackContainer.addEventListener('touchstart', this.trackLocation);
      this.trackContainer.addEventListener('touchmove', this.trackLocation);
      this.trackContainer.addEventListener('touchend', this.trackLeave);
      this.trackContainer.addEventListener('mouseleave', this.trackLeave);
    },
    removeEventListeners() {
      this.trackContainer.removeEventListener('mousemove', this.trackLocation);
      this.trackContainer.removeEventListener('mousedown', this.trackLocation);
      this.trackContainer.removeEventListener('touchstart', this.trackLocation);
      this.trackContainer.removeEventListener('touchmove', this.trackLocation);
      this.trackContainer.addEventListener('touchend', this.trackLeave);
      this.trackContainer.addEventListener('mouseleave', this.trackLeave);
    }
  },
  beforeDestroy() {
    this.removeEventListeners();
  }
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';

  .comparsion {
    &-container {
      cursor: col-resize;
      position: relative;
      padding: 20px 12px;
      max-width: 100%;
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
  }

</style>
