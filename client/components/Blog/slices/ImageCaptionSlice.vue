<template>
  <div>
    <div class='post-part single'>
      <div class="block-img" :class="size">
        <prismic-image
          :field="img"
          @click="openModal"
          :class="{ 'block-img-zoom': zoomEnabled }"
        />
        <SimpleModal v-if="zoomEnabled" ref="zoom">
          <prismic-image :field="img"/>
        </SimpleModal>
      </div>
      <p class="image-label" v-if="caption">{{ caption }}</p>
    </div>
  </div>
</template>

<script>
import SimpleModal from '@/containers/SimpleModal';

export default {
  name: 'image-caption-slice',
  components: { SimpleModal },
  props: {
    slice: {
      type: Object,
      required: true
    }
  },
  data: function() {
    return {
      img: '',
      caption: '',
      size: ''
    };
  },
  created() {
    this.img = this.slice.primary.image;
    this.caption = this.$prismic.asText(this.slice.primary.caption);
    this.size = this.slice.slice_label;
  },
  computed: {
    zoomEnabled: function () {
      return this.slice.primary.enable_zoom === 'enable';
    },
    lightBoxImage: function () {
      return {
        src: this.img.url,
        alt: this.img.alt
      };
    }
  },
  methods: {
    openModal() {
      if (this.slice && this.slice.primary.enable_zoom === 'enable') {
        this.$refs.zoom.show();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/_vars';

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
