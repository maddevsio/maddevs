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
          width="632"
          height="170"
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
.block-img {
  margin-bottom: 10px;
  text-align: center;
  &-zoom {
    cursor: pointer;
  }
}

.image-label {
  @include font('Inter', 14px, 400);
  display: block;
  text-align: center;
  line-height: 129%;
  letter-spacing: -0.02em;
  color: $text-color--grey;
  margin-bottom: 12px;
}
</style>
