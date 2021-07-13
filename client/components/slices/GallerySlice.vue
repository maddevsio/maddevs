<template>
  <div class="gallery-slice">
    <h3 v-if="galleryTitle">
      {{ galleryTitle }}
    </h3>
    <SwiperBlog :components="slice.items" />
  </div>
</template>

<script>
import SwiperBlog from '@/components/slices/SwiperBlog'

export default {
  name: 'GallerySlice',
  components: {
    SwiperBlog,
  },

  props: {
    slice: {
      type: Object,
      required: true,
    },
  },

  computed: {
    galleryTitle() {
      return this.$prismic.asText(this.slice.primary.name_of_the_gallery)
    },
  },
}
</script>

<style lang="scss" scoped>
.gallery-slice {
  margin-bottom: 48px;
}
</style>
