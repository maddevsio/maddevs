<template>
  <section id="growth" class="growth">
        <div class="container">
            <div class="growth_content">
                <div class="growth_content-info">
                    <h2 class="sec-title">We strive for the growth</h2>
                    <ul>
                        <li>Support in development and training</li>
                        <li>Peer mentorship</li>
                        <li>Speak at big international conferences 6+ times per year</li>
                        <li>Office library with 150+ books</li>
                        <li>Team of 60+ specialists</li>
                        <li>5 of our interns turned into team leads and seniors</li>
                    </ul>
                    <a href="#">
                        View all open vacancies
                        <img src="../../assets/img/Jobs/svg/Growth/go-to.svg" alt="Go to">
                    </a>
                </div>
                <slick
                    class="growth_content-carousel"
                    ref="slick"
                    @beforeChange="handleBeforeChange"
                    :options="slickOptions">
                    <div @click.prevent="nextSlide" class="growth_content-carousel_slide">
                        <img src="../../assets/img/Jobs/jpg/Growth/growth-slide@2x.jpg" alt="Our achievements">
                    </div>
                    <div @click.prevent="nextSlide" class="growth_content-carousel_slide">
                        <img src="../../assets/img/Jobs/jpg/Growth/growth-slide@2x.jpg" alt="Our achievements">
                    </div>
                    <div @click.prevent="nextSlide" class="growth_content-carousel_slide">
                        <img src="../../assets/img/Jobs/jpg/Growth/growth-slide@2x.jpg" alt="Our achievements">
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
    handleBeforeChange(event, slick, currentSlide, nextSlide) {
      this.setAtiveSlide(nextSlide);
    },
  }
};
</script>
