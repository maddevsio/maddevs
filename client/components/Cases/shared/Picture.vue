<template>
  <picture>
    <source
      :class="{ 'box-shadow': shadow, 'border-radius': radius, 'grey-background': background }"
      :data-srcset="[
        $getMediaFromS3(`/images/Cases/${folder}/webp/${file}.webp`) + ' ',
        $getMediaFromS3(`/images/Cases/${folder}/webp/${file}@2x.webp`) + ' 2x',
      ]"
      class="image"
      type="image/webp"
    >
    <img
      :class="{ 'box-shadow': shadow, 'border-radius': radius, 'grey-background': background }"
      :data-src="[$getMediaFromS3(`/images/Cases/${folder}/${extension}/${file}.${extension}`)]"
      :data-srcset="[
        $getMediaFromS3(`/images/Cases/${folder}/${extension}/${file}@2x.${extension}`) + ' 2x',
      ]"
      :alt="alt"
      :width="width"
      :height="height"
      data-testid="test-picture-img"
      class="image img_lazy"
      @load="onImageLoad($event)"
    >
  </picture>
</template>

<script>
export default {
  name: 'Picture',
  props: {
    folder: {
      type: String,
      default: '',
    },

    file: {
      type: String,
      default: '',
    },

    extension: {
      type: String,
      default: '',
    },

    alt: {
      type: String,
      default: '',
    },

    lazy: {
      type: Boolean,
      default: false,
    },

    shadow: {
      type: Boolean,
      default: false,
    },

    radius: {
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

    background: {
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
@import '../../../assets/styles/_vars';

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
