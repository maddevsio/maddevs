<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide v-for="(testimonial, i) in testimonials" :key="i">
      <div class="mobile-text paragraph">
        {{ testimonial.testimonialText }}
      </div>
      <div class="mobile-info">
        <div class="mobile-profile">
          <img :src="require(`@/assets/img/Home/png/customers/${testimonial.customerImageName}.png`)" class="mobile-customer_image" :alt="testimonial.customerName">
          <p class="mobile-customer_name">
            {{ testimonial.customerName }} <br> {{ testimonial.customerCountry }}
          </p>
        </div>
        <div class="mobile-project">
          <img :src="require(`@/assets/img/Home/svg/customerTestimonials/${testimonial.customerProject}.svg`)" class="mobile-project_image" :class="testimonial.customerProject" :alt="testimonial.customerProject">
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
export default {
  name: 'CustomerTestimonialsMobileSlider',
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    testimonials: {
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
    width: 100%;

    .mobile-info {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 15px;
      padding-bottom: 54px;
    }
  }

  .swiper-slide {
    width: 80%;
  }

  @media only screen and (max-width: 620px) {
    .swiper {
      .veeqo,
      .teacherly {
        width: 95px;
      }

      .guardrails {
        width: 156px;
      }
    }
  }

  @media only screen and (max-width: 440px) {
    .swiper {
      .veeqo,
      .teacherly {
        width: 75px;
      }

      .guardrails {
        width: 126px;
      }
    }
  }
</style>
