<template>
  <section id="employees" class="employees">
      <div class="container">
          <h2 class="sec-title">We care about employees</h2>
          <p>In our team we have flat management system and pay special attention to each employee. We support the initiatives and help to grow through mentorship.</p>
          <slick
              class="employees_content"
              ref="slick"
              @beforeChange="handleBeforeChange"
              :options="slickOptions">
              <div @click.prevent="nextSlide" class="employees_content-item">
                  <img src="../../assets/img/Jobs/jpg/Employees/employees-1.jpg" srcset="
                    ../../assets/img/Jobs/jpg/Employees/employees-1@2x.jpg 2x,
                    ../../assets/img/Jobs/jpg/Employees/employees-1@3x.jpg 3x" alt="Our employees">
              </div>
              <div @click.prevent="nextSlide" class="employees_content-item">
                  <img src="../../assets/img/Jobs/jpg/Employees/employees-2.jpg" srcset="
                    ../../assets/img/Jobs/jpg/Employees/employees-2@2x.jpg 2x,
                    ../../assets/img/Jobs/jpg/Employees/employees-2@3x.jpg 3x" alt="Our employees">
              </div>
              <div @click.prevent="nextSlide" class="employees_content-item">
                  <img src="../../assets/img/Jobs/jpg/Employees/employees-3.jpg" srcset="
                    ../../assets/img/Jobs/jpg/Employees/employees-3@2x.jpg 2x,
                    ../../assets/img/Jobs/jpg/Employees/employees-3@3x.jpg 3x" alt="Our employees">
              </div>
              <div @click.prevent="nextSlide" class="employees_content-item">
                  <img src="../../assets/img/Jobs/jpg/Employees/employees-4.jpg" srcset="
                    ../../assets/img/Jobs/jpg/Employees/employees-4@2x.jpg 2x,
                    ../../assets/img/Jobs/jpg/Employees/employees-4@3x.jpg 3x" alt="Our employees">
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
