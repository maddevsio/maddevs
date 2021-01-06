<template>
  <div>
    <div class='post-part single'>
      <p class="block-img" :class="size">
        <silent-box v-if="zoomEnabled" :gallery="[lightBoxImage]"/>
        <prismic-image v-else :field="img"/>
      </p>
      <p class="image-label" v-if="caption">{{ caption }}</p>
    </div>
  </div>
</template>

<script>
// import VueSilentbox from 'vue-silentbox';

export default {
  props: {
    slice: {
      type: Object,
      required: true
    }
  },
  // components: {
  //   VueSilentbox
  // },
  name: 'image-caption-slice',
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
        src: this.img.url
      };
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

/deep/ .silentbox-item {
  img {
    max-width: 100%;
    max-height: 70vh;
    height: auto;
    width: auto;
  }
}

/deep/ #silentbox-overlay {
  &__embed {
    width: 98%;
    height: 96%;
  }
}
</style>
