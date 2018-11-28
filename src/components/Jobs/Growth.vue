<template>
  <section id="growth" class="growth">
        <div class="container">
            <div class="growth_content">
                <div class="growth_content-info">
                    <h2 class="sec-title">{{ $t('growth-title') }}</h2>
                    <ul>
                        <li :class="{ 'growth-slide_active': activeSlide == 0 }">{{ $t('growth-listitem1') }}</li>
                        <li :class="{ 'growth-slide_active': activeSlide == 1 }">{{ $t('growth-listitem2') }}</li>
                        <li :class="{ 'growth-slide_active': activeSlide == 2 }">{{ $t('growth-listitem3') }}</li>
                        <li :class="{ 'growth-slide_active': activeSlide == 3 }">{{ $t('growth-listitem4') }}</li>
                        <li :class="{ 'growth-slide_active': activeSlide == 4 }">{{ $t('growth-listitem5') }}</li>
                        <li :class="{ 'growth-slide_active': activeSlide == 5 }">{{ $t('growth-listitem6') }}</li>
                    </ul>
                    <a href="https://blog.maddevs.io/vacancy/home" target="_blank">
                        {{ $t('growth-all-vacancies') }}
                        <img src="../../assets/img/Jobs/svg/Growth/go-to.svg" alt="Go to">
                    </a>
                </div>
                <slick
                    class="growth_content-carousel"
                    ref="slick"
                    @beforeChange="handleBeforeChange"
                    :options="slickOptions">
                    <div @click.prevent="nextSlide" class="growth_content-carousel_slide">
                        <img src="../../assets/img/Jobs/png/Growth/Support.png" srcset="../../assets/img/Jobs/png/Growth/Support@2x.png 2x" alt="Support in development and training">
                    </div>
                    <div @click.prevent="nextSlide" class="growth_content-carousel_slide">
                        <img src="../../assets/img/Jobs/png/Growth/mentorship.png" srcset="../../assets/img/Jobs/png/Growth/mentorship@2x.png 2x" alt="Peer mentorship">
                    </div>
                    <div @click.prevent="nextSlide" class="growth_content-carousel_slide">
                        <img src="../../assets/img/Jobs/jpg/Growth/growth-slide@2x.jpg" alt="Speak at big international conferences 6+ times per year">
                    </div>
                    <div @click.prevent="nextSlide" class="growth_content-carousel_slide">
                        <img src="../../assets/img/Jobs/png/Growth/books.png" srcset="../../assets/img/Jobs/png/Growth/books@2x.png 2x" alt="Office library with 150+ books">
                    </div>
                    <div @click.prevent="nextSlide" class="growth_content-carousel_slide">
                        <img src="../../assets/img/Jobs/png/Growth/Team.png" srcset="../../assets/img/Jobs/png/Growth/Team@2x.png 2x" alt="Team of 60+ specialists">
                    </div>
                    <div @click.prevent="nextSlide" class="growth_content-carousel_slide">
                        <img src="../../assets/img/Jobs/png/Growth/5-interns.png" srcset="../../assets/img/Jobs/png/Growth/5-interns@2x.png 2x"  alt="5 of our interns turned into team leads and seniors">
                    </div>
                </slick>
            </div>
        </div>
  </section>
</template>

<script>
import i18n from 'i18next';
import Slick from 'vue-slick';
import 'slick-carousel/slick/slick.css';

export default {
  name: 'Growth',
  data() {
    return {
      lang: i18n.language,
      activeSlide: 0,
      slickOptions: {
        slidesToShow: 1,
        autoplay: false,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>'
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
    hoverActiveSlide(index) {
      this.activeSlide = index;
      this.$refs.slick.goTo(index);
    },
    handleBeforeChange(event, slick, currentSlide, nextSlide) {
      this.setAtiveSlide(nextSlide);
    },
  }
};
</script>
