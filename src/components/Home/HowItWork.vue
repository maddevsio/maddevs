<template>
  <section id="how-it-work" class="how-it-work">
    <div class="how-it-work_wrap">
      <div class="container">
        <h2 class="sec-title">{{ $t('How do we work?') }}</h2>
        <p class="sec-desc">{{ $t('Since we are working remotely we strongly believe in the transparency of work, pay special attention to communication and keep strict compliance to working processes') }}</p>
      </div>
      <div class="how-it-work_wrap-content">
        <div class="container">
          <h3 v-if="lang === 'en'" class="how-it-work_wrap-content-title sec-desc">
            We assemble technical <span @click="setAtiveSlide(0)" :class="{ 'how-it-work_wrap-content-slide_active': activeSlide == 0 }">team</span>,
            <span @click="setAtiveSlide(1)" :class="{ 'how-it-work_wrap-content-slide_active': activeSlide == 1 }">manage</span> it for you and closely
            <span @click="setAtiveSlide(2)" :class="{ 'how-it-work_wrap-content-slide_active': activeSlide == 2 }">communicate</span>
            with our clients and inside the team.
          </h3>
          <h3 v-else class="how-it-work_wrap-content-title sec-desc">
            Посмотрите как мы подходим к работе с
            <span @click="setAtiveSlide(1)" :class="{ 'how-it-work_wrap-content-slide_active': activeSlide == 1 }">командами</span>,
            как мы занимается их <span @click="setAtiveSlide(0)" :class="{ 'how-it-work_wrap-content-slide_active': activeSlide == 0 }">менеджментом</span>,
            и как <span @click="setAtiveSlide(2)" :class="{ 'how-it-work_wrap-content-slide_active': activeSlide == 2 }">коммуницируем</span>
            внутри и с клиентами.
          </h3>
          <div class="how-it-work_wrap-content-slider">
            <carousel
              v-on:pageChange="onPageChange"
              :loop=true
              :autoplayLoop="true"
              :autoplay="true"
              :autoplayTimeout="5000"
              :per-page="1"
              :navigate-to="activeSlide"
              :paginationEnabled="false"
              loop:true
              mouse-drag:false
              autoplayHoverPause
              class="how-it-work_wrap-content-slides"
              ref="carousel"
            >
              <slide class="how-it-work_wrap-content-slide">
                <picture>
                    <source srcset="../../assets/img/png/how-it-work/hiw2.png"
                      media="(max-width: 992px)">
                    <source srcset="../../assets/img/png/how-it-work/hiw2@2x.png 2x"
                      media="(max-width: 992px)">
                    <img @click.prevent="nextSlide" src="../../assets/img/png/how-it-work/hiw2.png" srcset="../../assets/img/png/how-it-work/hiw2@2x.png 2x">
                </picture>
              </slide>
              <slide class="how-it-work_wrap-content-slide">
                <picture>
                    <source srcset="../../assets/img/png/how-it-work/hiw1.png"
                      media="(max-width: 992px)">
                    <source srcset="../../assets/img/png/how-it-work/hiw1@2x.png 2x"
                      media="(max-width: 992px)">
                    <img @click.prevent="nextSlide" ref="image" src="../../assets/img/png/how-it-work/hiw1.png" srcset="../../assets/img/png/how-it-work/hiw1@2x.png 2x">
                </picture>
              </slide>
              <slide class="how-it-work_wrap-content-slide">
                <picture>
                    <source srcset="../../assets/img/png/how-it-work/hiw3.png"
                      media="(max-width: 992px)">
                    <source srcset="../../assets/img/png/how-it-work/hiw3@2x.png 2x"
                      media="(max-width: 992px)">
                    <img @click.prevent="nextSlide" src="../../assets/img/png/how-it-work/hiw3.png" srcset="../../assets/img/png/how-it-work/hiw3@2x.png 2x">
                </picture>
              </slide>
            </carousel>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import i18n from 'i18next';
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: 'banner',
  data() {
    return {
      lang: i18n.language,
      activeSlide: 0
    };
  },
  updated() {
    this.lang = i18n.language;
  },
  components: {
    Carousel,
    Slide
  },
  methods: {
    nextSlide() {
      this.$refs.carousel.goToPage(this.$refs.carousel.getNextPage());
    },
    setAtiveSlide(index) {
      this.activeSlide = index;
    },
    onPageChange: function(index) {
      this.setAtiveSlide(index);
    }
  }
};
</script>
