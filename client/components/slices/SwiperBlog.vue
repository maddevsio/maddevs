<template>
  <div class="slider-content">
    <div
      :class="{ 'box-shadow': boxShadow }"
      class="swiper-container thumb-example"
    >
      <Swiper
        ref="swiperTop"
        :options="swiperOptionTop"
        class="swiper gallery-top"
      >
        <SwiperSlide
          v-for="(element, index) in components"
          :key="index"
        >
          <PrismicImage :field="element.gallery_image" />
        </SwiperSlide>
      </Swiper>
    </div>
    <p
      v-if="sliderDescription !== ''"
      class="slider-description"
    >
      {{ sliderDescription }}
    </p>
    <Swiper
      ref="swiperThumbs"
      :options="swiperOptionThumbs"
      class="swiper gallery-thumbs"
    >
      <SwiperSlide
        v-for="element in components"
        :key="element.fileName"
      >
        <PrismicImage
          v-if="element.gallery_image.Mobile"
          :field="element.gallery_image.Mobile"
        />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'SwiperBlog',
  title: 'SwiperBlog',
  components: {
    Swiper,
    SwiperSlide,
  },

  props: {
    components: {
      type: Array,
      required: true,
    },

    boxShadow: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      swiperOptionTop: {
        loop: false,
        loopedSlides: 0, // looped slides should be the same
        spaceBetween: 10,
        grabCursor: true,
      },

      swiperOptionThumbs: {
        loop: false,
        loopedSlides: 0, // looped slides should be the same
        spaceBetween: 8,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.1,
        slideToClickedSlide: true,
      },
    }
  },

  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.$swiper
      const swiperThumbs = this.$refs.swiperThumbs.$swiper
      swiperTop.controller.control = swiperThumbs
      swiperThumbs.controller.control = swiperTop
    })
  },
}
</script>

<style lang="scss">
.thumb-example {
  img {
    display: block;
  }
}

.box-shadow {
  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.05), 0 5.47001px 41.35px rgba(0, 0, 0, 0.1);
}

.swiper {
  &.gallery-thumbs {
    box-sizing: border-box;
    padding: 8px 0;
  }

  &.gallery-thumbs .swiper-slide {
    width: 73px;
    height: 44px;
    opacity: 0.2;
    cursor: pointer;
  }

  &.gallery-thumbs .swiper-slide-active {
    opacity: 1;
  }
}

.slider-description {
  margin: 9px 0;
  padding: 0 24px;
  text-align: center;
  @include default-text($text-color--grey-img-description, 13px, 21.58px, -0.02em, normal);
}
</style>
