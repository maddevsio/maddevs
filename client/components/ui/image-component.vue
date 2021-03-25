<template>
 <picture>
  <source
    class="multi-image" :data-srcset="[require(`@/assets/img/Home/webp/experts/${fileName}.webp`) + ' ', require(`@/assets/img/Home/webp/experts/${fileNameRetina}.webp`) + ' 2x']"
    type='image/webp'>
  <img
    :data-src="[require(`@/assets/img/Home/jpg/experts/${fileName}.jpg`)]"
    :data-srcset="[require(`@/assets/img/Home/jpg/experts/${fileNameRetina}.jpg`) + ' 2x']"
    class="multi-image img_lazy"
    data-testid="test-multi-image"
    :alt="alt"
    :width="width"
    :height="height"
  >
 </picture>
</template>

<script>
export default {
  name: 'ImageComponent',
  props: {
    fileName: {
      type: String,
      default: undefined
    },
    fileNameRetina: {
      type: String,
      default: undefined
    },
    alt: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: 'auto'
    },
    height: {
      type: String,
      default: 'auto'
    }
  }
};
</script>

<style>
  .multi-image {
    width: 100%;
    height: 100%;
  }
</style>
