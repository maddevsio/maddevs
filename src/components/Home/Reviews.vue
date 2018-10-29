<template>
  <section id="reviews" class="reviews">
    <div class="container">
      <div class="reviews_wrap">
        <h2 class="sec-title">{{$t('Сlient feedback ')}}</h2>
         <carousel
            :per-page="1"
            :loop=true
            :autoplayLoop="true"
            :autoplay="true"
            :autoplayTimeout="5000"
            loop:true
            mouse-drag:false
            autoplayHoverPause
            class="reviews_wrap-carousel"
            ref="carousel"
        >
            <slide class="reviews_wrap-carousel-slide">
                <p @click.prevent="nextSlide" class="reviews_wrap-carousel-slide_desc">{{$t('Review-2 text')}}</p>
                <div class="sender">
                    <img style="margin-bottom: -2px" src="../../assets/img/svg/reviews/teacherly.svg" alt="">
                    <div class="sender-name">
                        <p>{{$t('Review-2 name')}}</p>
                    </div>
                </div>
            </slide>
            <slide class="reviews_wrap-carousel-slide">
                <p @click.prevent="nextSlide" class="reviews_wrap-carousel-slide_desc">{{$t('Review-3 text')}}</p>
                <div class="sender">
                    <img style="margin-top: -2px" src="../../assets/img/svg/reviews/veeqo.svg" alt="">
                    <div class="sender-name">
                        <p>{{$t('Review-3 name')}}</p>
                    </div>
                </div>
            </slide>
        </carousel>
      </div>
    </div>
  </section>
</template>

<script>
import {
  Carousel,
  Slide
} from 'vue-carousel';

export default {
  name: 'reviews',
  components: {
    Carousel,
    Slide
  },
  methods: {
    nextSlide() {
      this.$refs.carousel.goToPage(this.$refs.carousel.getNextPage());
    }
  }
};

</script>
