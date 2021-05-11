<template>
  <div>
    <div class="post-part single">
      <div
        :class="size"
        class="block-img"
      >
        <img
          class="img_lazy"
          :class="{ 'block-img-zoom': zoomEnabled }"
          :data-src="img.url"
          :alt="img.alt"
          @click="openModal"
        >
        <SimpleModal
          v-if="zoomEnabled"
          ref="zoom"
        >
          <img
            :src="img.url"
            :alt="img.alt"
          >
        </SimpleModal>
      </div>
      <p
        v-if="caption"
        data-testid="test-image-label"
        class="image-label"
      >
        {{ caption }}
      </p>
    </div>
  </div>
</template>

<script>
import SimpleModal from '@/components/slices/SimpleModal'

export default {
  name: 'ImageCaptionSlice',
  components: { SimpleModal },
  props: {
    slice: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      img: '',
      caption: '',
      size: '',
    }
  },

  computed: {
    zoomEnabled() {
      return this.slice.primary.enable_zoom === 'enable'
    },
  },

  created() {
    this.img = this.slice.primary.image
    this.caption = this.$prismic.asText(this.slice.primary.caption)
    this.size = this.slice.slice_label
  },

  methods: {
    openModal() {
      if (this.slice && this.slice.primary.enable_zoom === 'enable') {
        this.$refs.zoom.show()
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_vars.scss';

img {
  max-width: 100%;
  height: auto;
  vertical-align: middle;
}

.block-img {
  margin-bottom: 10px;
  text-align: center;

  &-zoom {
    cursor: pointer;
  }
}

.image-label {
  display: block;
  text-align: center;
  font-size: 14px;
  line-height: 129%;
  letter-spacing: -0.02em;
  font-family: 'Poppins-Regular', sans-serif;
  color: $text-color--grey;
  margin-bottom: 12px;
}
</style>
