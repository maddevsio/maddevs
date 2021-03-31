<template>
  <picture>
    <source
      :class="{ 'box-shadow': boxShadow, 'border-radius': borderRadius, 'grey-background': backgroundColor }"
      :srcset="[
        require(`../../assets/img/Cases/${pictureFolder}/webp/${fileName}.webp`) + ' ',
        require(`../../assets/img/Cases/${pictureFolder}/webp/${fileName}@2x.webp`) + ' 2x',
      ]"
      class="image"
      type="image/webp"
    >
    <img
      :class="{ 'box-shadow': boxShadow, 'border-radius': borderRadius, 'grey-background': backgroundColor }"
      :src="[require(`../../assets/img/Cases/${pictureFolder}/${fileExtension}/${fileName}.${fileExtension}`)]"
      :srcset="[
        require(`../../assets/img/Cases/${pictureFolder}/${fileExtension}/${fileName}@2x.${fileExtension}`) + ' 2x',
      ]"
      :alt="alt"
      :loading="lazyLoading ? 'lazy' : ''"
      :width="width"
      :height="height"
      class="image"
      @load="onImageLoad($event)"
    >
  </picture>
</template>

<script>
export default {
  name: 'Picture',
  props: {
    pictureFolder: {
      type: String,
      default: '',
    },

    fileName: {
      type: String,
      default: '',
    },

    fileExtension: {
      type: String,
      default: '',
    },

    alt: {
      type: String,
      default: '',
    },

    lazyLoading: {
      type: Boolean,
      default: false,
    },

    boxShadow: {
      type: Boolean,
      default: false,
    },

    borderRadius: {
      type: Boolean,
      default: false,
    },

    width: {
      type: Number,
      default: 0,
    },

    height: {
      type: Number,
      default: 0,
    },

    backgroundColor: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    onImageLoad(event) {
      if (event.target.classList.contains('grey-background')) {
        event.target.classList.remove('grey-background')
      }
    },
  },
}
</script>
<style lang="scss" scoped>
@import '../../assets/styles/_vars';

.image {
  width: 100%;
  height: auto;
  display: block;
}

.grey-background {
  background-color: $bgcolor--silver;
}

.box-shadow {
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.05), 0px 5.47001px 41.35px rgba(0, 0, 0, 0.1);
}

.border-radius {
  border-radius: 3px;
}
</style>
