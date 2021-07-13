<template>
  <picture>
    <source
      :class="{ 'box-shadow': shadow, 'border-radius': radius, 'grey-background': background, 'media_lazy': lazy }"
      v-bind="attrsSource"
      class="image"
      type="image/webp"
    >
    <img
      :class="{ 'box-shadow': shadow, 'border-radius': radius, 'grey-background': background, 'media_lazy': lazy }"
      v-bind="attrsImg"
      :alt="alt"
      :width="width"
      :height="height"
      data-testid="test-picture-img"
      class="image"
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
      default: true,
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

  computed: {
    attrsImg() {
      const path = `/images/Cases/${this.folder}/${this.extension}/${this.file}.${this.extension}`
      if (this.lazy) {
        return {
          'data-src': [this.$getMediaFromS3(path)],
          'data-srcset': [this.$getMediaFromS3(path)],
        }
      }
      return {
        src: [this.$getMediaFromS3(path)],
        srcset: [this.$getMediaFromS3(path)],
      }
    },

    attrsSource() {
      const path = `/images/Cases/${this.folder}/webp/${this.file}.webp `
      const path2x = `/images/Cases/${this.folder}/webp/${this.file}@2x.webp 2x`
      if (this.lazy) {
        return {
          'data-srcset': [this.$getMediaFromS3(path), this.$getMediaFromS3(path2x)],
        }
      }
      return {
        srcset: [this.$getMediaFromS3(path), this.$getMediaFromS3(path2x)],
      }
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
