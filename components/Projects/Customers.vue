<template>
  <section id="customers" class="customers">
    <div class="container">
      <div class="customers__title-wrap">
        <h2 class="customers__main-title main-title">
          Our valued customers
        </h2>
        <p class="customers__main-description paragraph">
          Due to our NDAs and confidentiality requirements, we cannot disclose
          details for all of our customers. These are a few of the companies we
          work with.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
import SingleProject from '@/components/About/SingleProject';

export default {
  name: 'Customers',
  mounted() {
    if ($nuxt.$route.name) {
      this.currentPageName = $nuxt.$route.name;
    }
  },
  data() {
    return {
      currentPageName: ''
    };
  }
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/vars';

.customers {
  margin-top: 170px;

  &__title-wrap {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }

  &__main-title {
    color: $text-color--red;
    max-width: 700px;
    margin-right: 58px;
  }

  &__main-description {
    color: $text-color--grey;
    line-height: 25px;
    letter-spacing: -0.03em;
    max-width: 740px;
  }
}
</style>
