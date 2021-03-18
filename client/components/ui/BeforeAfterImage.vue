<template>
  <div class="comparsion-container" id="comparsion-container">
    <div
      class="comparsion-image_before"
      id="comparsion-before"
      ref="beforeImage"
      :style="`background-image: url(${require(`@/assets/img/${beforeImageSrc}`)});`"
    ></div>
    <img
      loading="lazy"
      class="comparsion-image_after"
      id="comparsion-after"
      :src="require(`@/assets/img/${afterImageSrc}`)"
      :alt="altText"
      :width="baseWidth"
      :height="baseHeight"
    />
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
      imageContainer: null,
      beforeImage: null,
      afterImage: null
    };
  },
  methods: {
    getDomElements() {
      this.imageContainer = document.getElementById('comparsion-container');
      this.beforeImage = document.getElementById('comparsion-before');
      this.afterImage = document.getElementById('comparsion-after');
    },
    trackLocation(e) {
      e.preventDefault();
      e.stopPropagation();
      this.$refs.beforeImage.style.transition = null;
      const rect = this.afterImage.getBoundingClientRect();
      const position = ((e.pageX - rect.left) / this.afterImage.offsetWidth)*100;
      if (position >= 0 && position <= 100) this.$refs.beforeImage.style.width = `${position}%`;
    },
    trackLeave() {
      setTimeout(() => {
        this.$refs.beforeImage.style.transition = '0.5s ease-out';
        this.$refs.beforeImage.style.width = '50%';
      }, 1500);
    },
    addEventListeners() {
      this.imageContainer.addEventListener('mousemove', this.trackLocation);
      this.imageContainer.addEventListener('touchstart', this.trackLocation);
      this.imageContainer.addEventListener('touchmove', this.trackLocation);
      this.imageContainer.addEventListener('mouseleave', this.trackLeave);
    },
    removeEventListeners() {
      this.imageContainer.removeEventListener('mousemove', this.trackLocation);
      this.imageContainer.removeEventListener('touchstart', this.trackLocation);
      this.imageContainer.removeEventListener('touchmove', this.trackLocation);
      this.imageContainer.addEventListener('mouseleave', this.trackLeave);
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
      max-width: 100%;
      cursor: col-resize;
      position: relative;
      font-size: 0;
      -webkit-touch-callout: none;
      -ms-touch-action: none;
      -webkit-user-select: none;
    }

    &-image_before {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 50%;
      background-size: cover;
    }

    &-image_after {
      width: 100%;
      height: auto;      
    }
  }

</style>
