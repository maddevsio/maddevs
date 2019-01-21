<template>
  <section id="reviews" class="reviews">
    <div class="container">
      <div class="reviews_wrap">
        <h2 class="sec-title">{{$t('Сlient feedback ')}}</h2>
        <slick
          class="reviews_wrap-carousel"
          ref="slick"
          :options="slickOptions">
          <div class="reviews_wrap-carousel-slide">
            <p @click.prevent="nextSlide" class="reviews_wrap-carousel-slide_desc">{{$t('Review-2 text')}}</p>
            <div class="sender">
                <img style="margin-bottom: -2px" src="../../assets/img/Home/svg/reviews/teacherly.svg" alt="Teacherly">
                <div class="sender-name">
                    <p>{{$t('Review-2 name')}}</p>
                </div>
            </div>
          </div>
          <div class="reviews_wrap-carousel-slide">
            <p @click.prevent="nextSlide" class="reviews_wrap-carousel-slide_desc">{{$t('Review-3 text')}}</p>
            <div class="sender">
                <img style="margin-top: -2px" src="../../assets/img/Home/svg/reviews/veeqo.svg" alt="Veeqo">
                <div class="sender-name">
                    <p>{{$t('Review-3 name')}}</p>
                </div>
            </div>
          </div>
          <div class="reviews_wrap-carousel-slide">
            <p @click.prevent="nextSlide" class="reviews_wrap-carousel-slide_desc">{{$t('Review-7 text')}}</p>
            <div class="sender">
                <img style="margin-top: -2px" src="../../assets/img/Home/svg/reviews/GuardRails.svg" alt="GuardRails">
                <div class="sender-name">
                    <p>{{$t('Review-7 name')}}</p>
                </div>
            </div>
          </div>
        </slick>
      </div>
    </div>
  </section>
</template>

<script>
import Slick from 'vue-slick';
import 'slick-carousel/slick/slick.css';

export default {
  name: 'reviews',
  data() {
    return {
      slickOptions: {
        slidesToShow: 1,
        autoplay: false,
        arrows: false,
        dots: true
      },
    };
  },
  components: {
    Slick,
  },
  methods: {
    nextSlide() {
      this.$refs.slick.next();
    },
  }
};

</script>
