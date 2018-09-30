<template>
  <section id="reviews" class="reviews">
    <div class="container">
      <div class="reviews_wrap" >
        <h2 class="sec-title">{{$t('Сlient feedback ')}}</h2>
         <carousel :per-page="1" :navigate-to="someLocalProperty" mouse-drag:false class="reviews_wrap-carousel">
            <slide class="reviews_wrap-carousel-slide">
                <p class="reviews_wrap-carousel-slide_desc">{{$t('Review-1 text')}}</p>
                <div class="sender">
                    <p>{{$t('Review-1 name')}}</p>
                </div>
            </slide>
            <slide class="reviews_wrap-carousel-slide">
                <p class="reviews_wrap-carousel-slide_desc">{{$t('Review-2 text')}}</p>
                <div class="sender">
                    <p>{{$t('Review-2 name')}}</p>
                </div>
            </slide>
            <slide class="reviews_wrap-carousel-slide">
                <p class="reviews_wrap-carousel-slide_desc">{{$t('Review-3 text')}}</p>
                <div class="sender">
                    <p>{{$t('Review-3 name')}}</p>
                </div>
            </slide>
            <slide class="reviews_wrap-carousel-slide">
                <p class="reviews_wrap-carousel-slide_desc">{{$t('Review-4 text')}}</p>
                <div class="sender">
                    <p>{{$t('Review-4 name')}}</p>
                </div>
            </slide>
            <slide class="reviews_wrap-carousel-slide">
                <p class="reviews_wrap-carousel-slide_desc">{{$t('Review-5 text')}}</p>
                <div class="sender">
                    <p>{{$t('Review-5 name')}}</p>
                </div>
            </slide>
            <slide class="reviews_wrap-carousel-slide">
                <p class="reviews_wrap-carousel-slide_desc">{{$t('Review-6 text')}}</p>
                <div class="sender">
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
