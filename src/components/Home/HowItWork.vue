<template>
  <section id="how-it-work" class="how-it-work">
    <div class="how-it-work_wrap">
      <div class="container">
        <h2 class="sec-title">{{ $t('Working processes') }}</h2>
        <p class="sec-desc">{{ $t('Since we are working remotely we strongly believe in the transparency of work, pay special attention to communication and keep strict compliance to working processes') }}</p>
      </div>
      <div class="how-it-work_wrap-content">
        <div class="container">
          <h3 v-if="lang === 'en'" class="how-it-work_wrap-content-title sec-desc">
            {{ $t('We') }} <span @click="setAtiveSlide(0)" :class="{ 'how-it-work_wrap-content-slide_active': activeSlide == 0 }">{{ $t('design') }}</span> {{ $t('a technical team for you') }},
            <span @click="setAtiveSlide(1)" :class="{ 'how-it-work_wrap-content-slide_active': activeSlide == 1 }">{{ $t('manage') }}</span> {{ $t('it and closely') }}
            <span @click="setAtiveSlide(2)" :class="{ 'how-it-work_wrap-content-slide_active': activeSlide == 2 }">{{ $t('communicate') }}</span>
            {{ $t('with you and inside the team') }}.
          </h3>
          <h3 v-else class="how-it-work_wrap-content-title sec-desc">
            {{ $t('We') }}
            <span @click="setAtiveSlide(0)" :class="{ 'how-it-work_wrap-content-slide_active': activeSlide == 0 }">{{ $t('design') }}</span>,
            {{ $t('a technical team for you') }} <span @click="setAtiveSlide(1)" :class="{ 'how-it-work_wrap-content-slide_active': activeSlide == 1 }">{{ $t('manage') }}</span>,
            {{ $t('it and closely') }} <span @click="setAtiveSlide(2)" :class="{ 'how-it-work_wrap-content-slide_active': activeSlide == 2 }">{{ $t('communicate') }}</span>
            {{ $t('with you and inside the team') }}.
          </h3>
          <div class="how-it-work_wrap-content-slider">
            <slick
                class="how-it-work_wrap-content-slides"
                ref="slick"
                @afterChange="handleAfterChange"
                :options="slickOptions">
                <div class="how-it-work_wrap-content-slide">
                  <picture>
                    <source srcset="../../assets/img/png/how-it-work/hiw2.png, ../../assets/img/png/how-it-work/hiw2@2x.png 2x"
                      media="(max-width: 992px)">
                    <img @click.prevent="nextSlide" src="../../assets/img/png/how-it-work/hiw2.png" srcset="../../assets/img/png/how-it-work/hiw2@2x.png 2x">
                  </picture>
                </div>
                <div class="how-it-work_wrap-content-slide">
                  <picture>
                    <source srcset="../../assets/img/png/how-it-work/hiw1.png, ../../assets/img/png/how-it-work/hiw1@2x.png 2x"
                      media="(max-width: 992px)">
                    <img @click.prevent="nextSlide" ref="image" src="../../assets/img/png/how-it-work/hiw1.png" srcset="../../assets/img/png/how-it-work/hiw1@2x.png 2x">
                  </picture>
                </div>
                <div class="how-it-work_wrap-content-slide">
                  <picture>
                    <source srcset="../../assets/img/png/how-it-work/hiw3.png, ../../assets/img/png/how-it-work/hiw3@2x.png 2x"
                      media="(max-width: 992px)">
                    <img @click.prevent="nextSlide" src="../../assets/img/png/how-it-work/hiw3.png" srcset="../../assets/img/png/how-it-work/hiw3@2x.png 2x">
                  </picture>
                </div>
              </slick>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import i18n from 'i18next';
import Slick from 'vue-slick';
import 'slick-carousel/slick/slick.css';

export default {
  name: 'banner',
  data() {
    return {
      lang: i18n.language,
      activeSlide: 0,
      slickOptions: {
        slidesToShow: 1,
        autoplay: false,
        arrows: false
      },
    };
  },
  updated() {
    this.lang = i18n.language;
  },
  components: {
    Slick
  },
  methods: {
    nextSlide() {
      this.$refs.slick.next();
    },
    setAtiveSlide(index) {
      this.activeSlide = index;
      this.$refs.slick.goTo(index);
    },
    handleAfterChange(event, slick, currentSlide) {
      this.setAtiveSlide(currentSlide);
    },
  }
};
</script>
