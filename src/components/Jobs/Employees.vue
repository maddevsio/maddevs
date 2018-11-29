<template>
  <section id="employees" class="employees">
      <div class="container">
          <h2 class="sec-title">{{ $t('employees-title') }}</h2>
          <p>{{ $t('employees-desc') }}</p>
          <div class="employees_content">
              <div @click.prevent="nextSlide" class="employees_content-item">
                  <img src="../../assets/img/Jobs/png/Employees/photo_1.png" srcset="
                    ../../assets/img/Jobs/png/Employees/photo_1@2x.png 2x" alt="Our employees">
              </div>
              <div @click.prevent="nextSlide" class="employees_content-item">
                  <img src="../../assets/img/Jobs/png/Employees/photo_2.png" srcset="
                    ../../assets/img/Jobs/png/Employees/photo_2@2x.png 2x" alt="Our employees">
              </div>
              <div @click.prevent="nextSlide" class="employees_content-item">
                  <img src="../../assets/img/Jobs/png/Employees/photo_3.png" srcset="
                    ../../assets/img/Jobs/png/Employees/photo_3@2x.png 2x" alt="Our employees">
              </div>
              <div @click.prevent="nextSlide" class="employees_content-item">
                  <img src="../../assets/img/Jobs/png/Employees/photo_4.png" srcset="
                    ../../assets/img/Jobs/png/Employees/photo_4@2x.png 2x" alt="Our employees">
              </div>
          </div>
          <slick
              class="employees_content-slider"
              ref="slick"
              @beforeChange="handleBeforeChange"
              :options="slickOptions">
              <div @click.prevent="nextSlide" class="employees_content-item">
                  <img src="../../assets/img/Jobs/png/Employees/photo_1.png" srcset="
                    ../../assets/img/Jobs/png/Employees/photo_1@2x.png 2x" alt="Our employees">
              </div>
              <div @click.prevent="nextSlide" class="employees_content-item">
                  <img src="../../assets/img/Jobs/png/Employees/photo_2.png" srcset="
                    ../../assets/img/Jobs/png/Employees/photo_2@2x.png 2x" alt="Our employees">
              </div>
              <div @click.prevent="nextSlide" class="employees_content-item">
                  <img src="../../assets/img/Jobs/png/Employees/photo_3.png" srcset="
                    ../../assets/img/Jobs/png/Employees/photo_3@2x.png 2x" alt="Our employees">
              </div>
              <div @click.prevent="nextSlide" class="employees_content-item">
                  <img src="../../assets/img/Jobs/png/Employees/photo_4.png" srcset="
                    ../../assets/img/Jobs/png/Employees/photo_4@2x.png 2x" alt="Our employees">
              </div>
          </slick>
      </div>
  </section>
</template>
<script>
import Slick from 'vue-slick';
import 'slick-carousel/slick/slick.css';

export default {
  name: 'Employees',
  data() {
    return {
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
