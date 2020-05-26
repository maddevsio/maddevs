<template>
  <swiper class="swiper" :option="swiperOption">
    <swiper-slide v-for="(expert, i) in experts" :key="i">
      <div class="mobile-expert-item">
        <img :src="require(`@/assets/img/Home/png/experts/${expert.image}.png`)" class="mobile-expert-img" :alt="expert.name">
        <div class="mobile-expert-bottom_content">
          <div class="mobile-expert-info">
            <div class="mobile-expert-name">{{ expert.name }}</div>
            <div class="mobile-expert-position">{{ expert.position }}</div>
          </div>
          <a :href="expert.linkedin" class="mobile-expert-linkedin_link" target="blank">
            <img src="../../assets/img/Home/svg/experts/linkedin.svg" class="mobile-expert-linkedin_icon" alt="Linkedin">
          </a>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';

export default {
  name: 'MeetOurExpertsMobile',
  components: {
    Swiper,
    SwiperSlide
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
        spaceBetween: 30
      }
    };
  }
};
</script>

<style lang="scss" scoped>
  .swiper {
    display: none;

    .swiper-slide {
      width: 100%;
    }
  }
</style>
