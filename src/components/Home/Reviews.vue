<template>
  <section id="reviews" class="reviews">
    <div class="container">
      <div class="reviews_wrap" >
        <h2 class="sec-title">{{$t('Сlient feedback ')}}</h2>
         <carousel :per-page="1" :navigate-to="someLocalProperty" mouse-drag:false class="reviews_wrap-carousel">
            <slide class="reviews_wrap-carousel-slide">
                <p class="reviews_wrap-carousel-slide_desc">{{$t('Review-1 text')}}</p>
                <div class="sender">
                    <img style="margin-bottom: -5px" src="../../assets/img/png/reviews/socialshopwave.png" alt="">
                    <span>Name,</span>
                    <p>{{$t('Review-1 name')}}</p>
                </div>
            </slide>
            <slide class="reviews_wrap-carousel-slide">
                <p class="reviews_wrap-carousel-slide_desc">{{$t('Review-2 text')}}</p>
                <div class="sender">
                    <img style="margin-bottom: -2px" src="../../assets/img/svg/reviews/teacherly.svg" alt="">
                    <span>Name,</span>
                    <p>{{$t('Review-2 name')}}</p>
                </div>
            </slide>
            <slide class="reviews_wrap-carousel-slide">
                <p class="reviews_wrap-carousel-slide_desc">{{$t('Review-3 text')}}</p>
                <div class="sender">
                    <img style="margin-top: -2px" src="../../assets/img/svg/reviews/veeqo.svg" alt="">
                    <span>Name,</span>
                    <p>{{$t('Review-3 name')}}</p>
                </div>
            </slide>
            <slide class="reviews_wrap-carousel-slide">
                <p class="reviews_wrap-carousel-slide_desc">{{$t('Review-4 text')}}</p>
                <div class="sender">
                    <img style="margin-top: -5px; height: 32px;" src="../../assets/img/svg/reviews/nambafood.svg" alt="">
                    <span>Name,</span>
                    <p>{{$t('Review-4 name')}}</p>
                </div>
            </slide>
            <slide class="reviews_wrap-carousel-slide">
                <p class="reviews_wrap-carousel-slide_desc">{{$t('Review-5 text')}}</p>
                <div class="sender">
                    <img src="../../assets/img/svg/reviews/diesel.svg" alt="">
                    <span>Name,</span>
                    <p>{{$t('Review-5 name')}}</p>
                </div>
            </slide>
            <slide class="reviews_wrap-carousel-slide">
                <p class="reviews_wrap-carousel-slide_desc">{{$t('Review-6 text')}}</p>
                <div class="sender">
                    <img style="margin-top: -2px; height: 24px;" src="../../assets/img/svg/reviews/inn-4-pet.svg" alt="">
                    <span>Name,</span>
                    <p>{{$t('Review-6 name')}}</p>
                </div>
            </slide>
        </carousel>
      </div>
    </div>
  </section>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: 'reviews',
  data() {
    return {
      someLocalProperty: 1
    };
  },
  components: {
    Carousel,
    Slide
  }
};
</script>
