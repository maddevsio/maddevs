<template>
  <div class="ui-slider">
    <Swiper
      :options="options"
      class="ui-slider_slider"
    >
      <SwiperSlide
        v-for="slide in slides"
        :key="slide.file"
      >
        <picture>
          <source
            :srcset="[$getMediaFromS3(`/images/${slide.page}/webp/${slide.file}.webp`) + ' ', $getMediaFromS3(`/images/${slide.page}/webp/${slide.file}@2x.webp 2x`)]"
            type="image/webp"
            class="ui-slider_slider-img"
          >
          <img
            :src="$getMediaFromS3(`/images/${slide.page}/${slide.extension}/${slide.file}.${slide.extension}`)"
            :srcset="$getMediaFromS3(`/images/${slide.page}/${slide.extension}/${slide.file}@2x.${slide.extension}`)"
            :width="slide.width"
            :height="slide.height"
            :alt="slide.alt"
            class="ui-slider_slider-img"
          >
        </picture>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'UISlider',
  components: {
    Swiper,
    SwiperSlide,
  },

  props: {
    slides: {
      type: Array,
      default: () => [],
    },

    options: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss">
.ui-slider {
  &_slider-img {
    width: 100%;
    height: 100%;
  }
}
</style>
