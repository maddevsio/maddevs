<template>
  <div class="gallery-slice">
    <h3 v-if="galleryTitle">{{ galleryTitle }}</h3>
    <swiper-blog :components="slice.items"/>
  </div>
</template>

<script>
import SwiperBlog from '@/components/Blog/SwiperBlog';

export default {
  name: 'GallerySlice',
  components: {
    SwiperBlog
  },
  props: {
    slice: {
      type: Object,
      required: true
    }
  },
  computed: {
    galleryTitle: function() {
      return this.$prismic.asText(this.slice.primary.name_of_the_gallery);
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '../../../assets/styles/_vars';
  @import '../../../assets/styles/cases/mixins';

  h1 {
    margin: 72px 0 48px;
    @include title($text-color--black-cases, 52px, -0.04em);
  }

  h2 {
    @include title($text-color--black-cases, 41.5px, -0.04em);
  }

  h3 {
    @include title($text-color--black-cases, 33.2px, -0.04em);
  }

  h4 {
    @include title($text-color--black-cases, 26.56px, -0.03em);
  }

  h5 {
    @include title($text-color--black-cases, 21.25px, -0.02em);
  }

  .gallery-slice {
    margin-bottom: 48px;
  }

</style>
