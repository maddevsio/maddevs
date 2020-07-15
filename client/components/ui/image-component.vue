<template>
 <picture>
  <source
    class="multi-image"
    v-lazy-load
    :srcset="[require(`@/assets/img/Home/webp/experts/${fileName}.webp`) + ' ', require(`@/assets/img/Home/webp/experts/${fileNameRetina}.webp`) + ' 2x']"
    type='image/webp'>
  <img
    :src="[require(`@/assets/img/Home/png/experts/${fileName}.png`)]"
    v-lazy-load
    :srcset="[require(`@/assets/img/Home/png/experts/${fileNameRetina}.png`) + ' 2x']"
    class="multi-image"
    :alt="fileNameRetina">
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
