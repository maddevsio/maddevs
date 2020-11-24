<template>
  <picture>
    <source
      class="image"
      :class="{'box-shadow': boxShadow}"
      :srcset="[require(`@/assets/img/Cases/${pictureFolder}/webp/${fileName}.webp`) + ' ', require(`@/assets/img/Cases/${pictureFolder}/webp/${fileName}@2x.webp`) + ' 2x']"
      type='image/webp'>
    <img
      class="image"
      :class="{'box-shadow': boxShadow}"
      :src="[require(`@/assets/img/Cases/${pictureFolder}/${fileExtension}/${fileName}.${fileExtension}`)]"
      :srcset="[require(`@/assets/img/Cases/${pictureFolder}/${fileExtension}/${fileName}@2x.${fileExtension}`) + ' 2x']"
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
    fileExtension: {
      type: String,
      default: ''
    },
    alt: {
      type: String,
      default: ''
    },
    boxShadow: {
      type: Boolean,
      default: false
    }
  }
};
</script>
<style lang="scss" scoped>
  .image {
    width: 100%;
    height: 100%;
  }

  .box-shadow {
    box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.05), 0px 5.47001px 41.35px rgba(0, 0, 0, 0.1);
  }
</style>
