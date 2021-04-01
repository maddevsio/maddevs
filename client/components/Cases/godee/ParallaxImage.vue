<template>
  <div class="case_parallax-layer">
    <div class="case_parallax-image-wrapper">
      <div
        class="case_parallax-image"
        :style="{ backgroundImage: `url(${getMediaFromS3('/images/Cases/godee/jpg/parallax.jpg')})` }"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ParallaxImage',
}
</script>

<style>

</style>
