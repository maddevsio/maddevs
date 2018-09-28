<template>
  <section id="reviews" class="reviews">
    <div class="container">
      <div class="reviews_wrap" >
        <h2 class="sec-title">{{$t('Сlient feedback ')}}</h2>
         <carousel :per-page="1" :navigate-to="someLocalProperty" mouse-drag:false class="reviews_wrap-carousel">
            <slide class="reviews_wrap-carousel-slide">
                <p class="reviews_wrap-carousel-slide_desc">I have not had an issue with any of MadDevs team.  I have had a couple of project managers already, and various dev. teams.  The team are so knowledgeable, I feel very safe and secure these days as I spec. in my next bit of work.</p>
                <div class="sender">
                    <img src="" alt="Sender">
                    <p><span>Mr. Kirk Duncan,</span> CEO of The Mobile App Man, Sydney, Australia</p>
                </div>
            </slide>
            <slide class="reviews_wrap-carousel-slide">
                <p class="reviews_wrap-carousel-slide_desc">I have not had an issue with any of MadDevs team.  I have had a couple of project managers already, and various dev. teams.  The team are so knowledgeable, I feel very safe and secure these days as I spec. in my next bit of work.</p>
                <div class="sender">
                    <img src="" alt="Sender">
                    <p><span>Mr. Kirk Duncan,</span> CEO of The Mobile App Man, Sydney, Australia</p>
                </div>
            </slide>
            <slide class="reviews_wrap-carousel-slide">
                <p class="reviews_wrap-carousel-slide_desc">I have not had an issue with any of MadDevs team.  I have had a couple of project managers already, and various dev. teams.  The team are so knowledgeable, I feel very safe and secure these days as I spec. in my next bit of work.</p>
                <div class="sender">
                    <img src="" alt="Sender">
                    <p><span>Mr. Kirk Duncan,</span> CEO of The Mobile App Man, Sydney, Australia</p>
                </div>
            </slide>
            <slide class="reviews_wrap-carousel-slide">
                <p class="reviews_wrap-carousel-slide_desc">I have not had an issue with any of MadDevs team.  I have had a couple of project managers already, and various dev. teams.  The team are so knowledgeable, I feel very safe and secure these days as I spec. in my next bit of work.</p>
                <div class="sender">
                    <img src="" alt="Sender">
                    <p><span>Mr. Kirk Duncan,</span> CEO of The Mobile App Man, Sydney, Australia</p>
                </div>
            </slide>
            <slide class="reviews_wrap-carousel-slide">
                <p class="reviews_wrap-carousel-slide_desc">I have not had an issue with any of MadDevs team.  I have had a couple of project managers already, and various dev. teams.  The team are so knowledgeable, I feel very safe and secure these days as I spec. in my next bit of work.</p>
                <div class="sender">
                    <img src="" alt="Sender">
                    <p><span>Mr. Kirk Duncan,</span> CEO of The Mobile App Man, Sydney, Australia</p>
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
