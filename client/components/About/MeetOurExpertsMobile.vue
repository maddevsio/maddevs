<template>
  <div class="experts-slider-wrapper">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="(expert, i) in experts" :key="i">
        <div class="mobile-expert-item">
          <image-component :fileName="`${expert.image}`" :fileNameRetina="`${expert.image}@2x`"/>
          <div class="mobile-expert-bottom_content">
            <div class="mobile-expert-info">
              <div class="mobile-expert-name">{{ expert.name }}</div>
              <div class="mobile-expert-position">{{ expert.position }}</div>
            </div>
            <a :href="expert.linkedin" class="mobile-expert-linkedin_link" target="blank">
              <img loading="lazy" src="@/assets/img/Home/svg/experts/linkedin.svg" class="mobile-expert-linkedin_icon" alt="Linkedin">
            </a>
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <div class="swiper-pagination swiper-pagination--black" slot="pagination"/>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import ImageComponent from '@/components/ui/image-component';

export default {
  name: 'MeetOurExpertsMobile',
  components: {
    Swiper,
    SwiperSlide,
    ImageComponent
  },
  props: {
    experts: {
      type: Array,
      default: Function
    }
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        pagination: {
          el: '.swiper-pagination--black'
        }
      }
    };
  }
};
</script>

<style lang="scss" scoped>
  .swiper {
    display: none;

    .swiper-container {
      width: 100%;
      height: 100%;
    }

    .swiper-slide {
      width: 347px;
    }

    .mobile-expert-item {
      position: relative;
    }
  }

  @media only screen and (max-width: 1000px) {
    .swiper {
      display: block;
    }
  }
</style>
