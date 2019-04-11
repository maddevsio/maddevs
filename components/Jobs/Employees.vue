<template>
  <section id="employees" class="employees">
      <div class="container">
          <h2 class="sec-title">{{ $t('employees-title') }}</h2>
          <p>{{ $t('employees-desc') }}</p>
          <div class="employees_content">
              <div @click.prevent="nextSlide" class="employees_content-item">
                  <img src="../../assets/img/Jobs/jpg/Employees/photo_1.jpg" srcset="
                    ../../assets/img/Jobs/jpg/Employees/photo_1@2x.jpg 2x" alt="Our employees">
              </div>
              <div @click.prevent="nextSlide" class="employees_content-item">
                  <img src="../../assets/img/Jobs/jpg/Employees/photo_2.jpg" srcset="
                    ../../assets/img/Jobs/jpg/Employees/photo_2@2x.jpg 2x" alt="Our employees">
              </div>
              <div @click.prevent="nextSlide" class="employees_content-item">
                  <img src="../../assets/img/Jobs/jpg/Employees/photo_3.jpg" srcset="
                    ../../assets/img/Jobs/jpg/Employees/photo_3@2x.jpg 2x" alt="Our employees">
              </div>
              <div @click.prevent="nextSlide" class="employees_content-item">
                  <img src="../../assets/img/Jobs/jpg/Employees/photo_4.jpg" srcset="
                    ../../assets/img/Jobs/jpg/Employees/photo_4@2x.jpg 2x" alt="Our employees">
              </div>
          </div>
          <slick
              class="employees_content-slider"
              ref="slick"
              @beforeChange="handleBeforeChange"
              :options="slickOptions">
              <div @click.prevent="nextSlide" class="employees_content-item">
                  <img src="../../assets/img/Jobs/jpg/Employees/photo_1.jpg" srcset="
                    ../../assets/img/Jobs/jpg/Employees/photo_1@2x.jpg 2x" alt="Our employees">
              </div>
              <div @click.prevent="nextSlide" class="employees_content-item">
                  <img src="../../assets/img/Jobs/jpg/Employees/photo_2.jpg" srcset="
                    ../../assets/img/Jobs/jpg/Employees/photo_2@2x.jpg 2x" alt="Our employees">
              </div>
              <div @click.prevent="nextSlide" class="employees_content-item">
                  <img src="../../assets/img/Jobs/jpg/Employees/photo_3.jpg" srcset="
                    ../../assets/img/Jobs/jpg/Employees/photo_3@2x.jpg 2x" alt="Our employees">
              </div>
              <div @click.prevent="nextSlide" class="employees_content-item">
                  <img src="../../assets/img/Jobs/jpg/Employees/photo_4.jpg" srcset="
                    ../../assets/img/Jobs/jpg/Employees/photo_4@2x.jpg 2x" alt="Our employees">
              </div>
          </slick>
      </div>
  </section>
</template>
<script>
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

<style lang="scss" scoped>
  @import '../../assets/styles/vars';

  .employees {
    padding: 120px 0 0;

    p {
      max-width: 710px;
      font-size: 28px;
      color: $text-color--black;
      font-family: 'MADEEvolveSans-regular',
        sans-serif;
      line-height: 1.5;
      margin: 30px auto 0;
      text-align: center;
    }

    &_content {
      display: flex;
      flex-wrap: wrap;
      margin-top: 40px;

      &-slider {
        display: none !important;
      }

      .slick-arrow {
        display: none;
        transition: all .2s ease;

        &:hover {
          box-shadow: 0 4px 10px 0 rgba(38, 36, 32, 0.30);
        }
      }

      &-item {
        width: 50%;
        outline: 1px solid #fff !important;

        img {
          width: 100%;
          height: auto;
          display: block;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .employees {
      position: relative;

      &_content-slider {
        display: block !important;
        margin-top: 40px;

        &-item {
          outline: none;
        }
      }

      &_content {
        display: none;
      }
    }
  }
  @media only screen and (max-width: 480px) {
    .employees_content-slider .slick-prev {
      right: 60px;
      bottom: 20px;
    }
    .employees_content-slider .slick-next {
      right: 20px;
      bottom: 20px;
    }
    .employees {
      padding-top: 80px;

      p {
        font-size: 24px;
      }
    }
  }
</style>

