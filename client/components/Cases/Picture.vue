<template>
  <picture>
    <source
      class="image"
      :class="{'box-shadow': boxShadow, 'border-radius': borderRadius, 'lazy-image': lazyLoading}"
      :srcset="[require(`../../assets/img/Cases/${pictureFolder}/webp/${fileName}.webp`) + ' ', require(`../../assets/img/Cases/${pictureFolder}/webp/${fileName}@2x.webp`) + ' 2x']"
      type='image/webp'>
    <img
      class="image"
      :class="{'box-shadow': boxShadow, 'border-radius': borderRadius, 'lazy-image': lazyLoading}"
      :src="[require(`../../assets/img/Cases/${pictureFolder}/${fileExtension}/${fileName}.${fileExtension}`)]"
      :srcset="[require(`../../assets/img/Cases/${pictureFolder}/${fileExtension}/${fileName}@2x.${fileExtension}`) + ' 2x']"
      :alt="alt"
      :loading="lazyLoading ? 'lazy' : ''"
      :width="width"
      :height="height"
      @load="onImageLoad($event)"
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
    lazyLoading: {
      type: Boolean,
      default: false
    },
    boxShadow: {
      type: Boolean,
      default: false
    },
    borderRadius: {
      type: Boolean,
      default: false
    },
    width: {
      type: Number,
      default: 0
    },
    height: {
      type: Number,
      default: 0
    }
  },
  methods: {
    onImageLoad(event) {
      if (event.target.classList.contains('lazy-image')) {
        event.target.classList.remove('lazy-image');
      }
    }
  }
};
</script>
<style lang="scss" scoped>
  @import '../../assets/styles/_vars';

  .image {
    width: 100%;
    height: auto;
    display: block;
  }

  .lazy-image {
    background-color: $bgcolor--silver;
  }

  .box-shadow {
    box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.05), 0px 5.47001px 41.35px rgba(0, 0, 0, 0.1);
  }

  .border-radius {
    border-radius: 3px;
  }
</style>
