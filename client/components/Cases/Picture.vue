<template>
  <picture>
    <source
      class="image"
      :srcset="[require(`@/assets/img/Cases/${pictureFolder}/webp/${fileName}.webp`) + ' ', require(`@/assets/img/Cases/${pictureFolder}/webp/${fileNameRetina}.webp`) + ' 2x']"
      type='image/webp'>
    <img
      class="image"
      :src="[require(`@/assets/img/Cases/${pictureFolder}/${fileExtension}/${fileName}.${fileExtension}`)]"
      :srcset="[require(`@/assets/img/Cases/${pictureFolder}/${fileExtension}/${fileNameRetina}.${fileExtension}`) + ' 2x']"
      :alt="alt"
      loading="lazy"
    >
  </picture>
</template>


<script>
export default {
  name: 'Picture',
  props: {
    pictureFolder: {
      types: String,
      default: ''
    },
    fileName: {
      type: String,
      default: ''
    },
    fileNameRetina: {
      type: String,
      default: ''
    },
    fileExtension: {
      type: String,
      default: ''
    },
    alt: {
      type: String,
      default: ''
    }
  }
};
</script>
<style lang="scss" scoped>
  .image {
    width: 100%;
    height: 100%;
  }
</style>
