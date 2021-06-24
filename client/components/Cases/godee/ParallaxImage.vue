<template>
  <div class="case_parallax-layer m-48_top media-m-24_top m-48_bottom media-m-24_bottom m-auto">
    <div
      v-parallax="0.4"
      class="case_parallax-wrapper"
    >
      <div
        class="case_parallax"
        data-testid="test-case_parallax-image"
        :style="{ backgroundImage: `url(${$getMediaFromS3('/images/Cases/godee/jpg/parallax.jpg')})` }"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ParallaxImage',
}
</script>

<style lang="scss" scoped>
  .case {
    &_parallax-layer {
      height: 576px;
      max-width: 1440px;
      position: relative;
      transform-style: preserve-3d;
      overflow: hidden;
    }

    &_parallax-wrapper {
      position: relative;
      height: 100vh;
      transform-style: preserve-3d;
    }

    &_parallax {
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: 50%;
    }
  }
</style>
