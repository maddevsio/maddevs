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
.employees {
  padding: 120px 0 0;

  p {
    max-width: 710px;
    font-size: 28px;
    color: #000;
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

      .slick-arrow {
        width: 28px;
        height: 28px;
        display: block;
        position: absolute;
        right: 40px;
        bottom: 30px;
        z-index: 1;
        border-radius: 100%;
        box-shadow: 0 4px 10px 0 rgba(38, 36, 32, 0.14);
        background-color: #ffffff;
        border: none;
        background-position: center;
        background-size: 14px;
        background-repeat: no-repeat;
        background-image: url(../img/Jobs/svg/Employees/arrow.svg);
        cursor: pointer;
      }

      .slick-prev {
        right: 80px;
        transform: scale(-1);
      }

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

