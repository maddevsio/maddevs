<template>
  <div class="slider-content">
    <div :class="{ 'box-shadow': boxShadow }" class="swiper-container thumb-example">
      <Picture
        v-if="safariTopBar"
        :file-name="safariTopBarImage"
        :alt="safariTopBarAlt"
        :lazy-loading="true"
        picture-folder="common"
        file-extension="jpg"
      />
      <swiper ref="swiperTop" :options="swiperOptionTop" class="swiper gallery-top">
        <swiper-slide v-for="element in components" :key="element.fileName">
          <Picture
            :picture-folder="element.pictureFolder"
            :file-name="element.fileName"
            :file-extension="element.fileExtension"
            :lazy-loading="true"
            :alt="element.alt"
          />
        </swiper-slide>
      </swiper>
    </div>
    <p v-if="sliderDescription !== ''" class="slider-description">
      {{ sliderDescription }}
    </p>
    <swiper ref="swiperThumbs" :options="swiperOptionThumbs" class="swiper gallery-thumbs">
      <swiper-slide v-for="element in components" :key="element.fileName">
        <Picture
          :picture-folder="element.pictureFolder"
          :file-name="element.fileName"
          :file-extension="element.fileExtension"
          :lazy-loading="true"
          :alt="element.alt"
        />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import Picture from '@/components/Cases/Picture'

export default {
  name: 'SwiperExampleDefault',
  title: 'Swiper',
  components: {
    Swiper,
    SwiperSlide,
    Picture,
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

    sliderDescription: {
      type: String,
      default: '',
    },

    safariTopBar: {
      type: Boolean,
      default: false,
    },

    safariTopBarImage: {
      type: String,
      default: '',
    },

    safariTopBarAlt: {
      type: String,
      default: '',
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
@import '../../assets/styles/cases/icons';
@import '../../assets/styles/cases/mixins';

.thumb-example {
  img {
    display: block;
  }
}

.box-shadow {
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.05), 0px 5.47001px 41.35px rgba(0, 0, 0, 0.1);
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
  @include default_text($text-color--grey-img-description, 13px, 21.58px, -0.02em, normal);
}
</style>
