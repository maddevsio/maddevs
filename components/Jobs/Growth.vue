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
                    <a href="https://blog.maddevs.io/vacancy/home" target="_blank" rel="noreferrer">
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
                        <img src="../../assets/img/Jobs/png/Growth/Speak@2x.png" srcset="../../assets/img/Jobs/png/Growth/Speak@2x.png" alt="Speak at big international conferences 6+ times per year">
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
export default {
  name: 'Growth',
  data() {
    return {
      lang: 'en',
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
    this.lang = 'en';
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

<style lang="scss" scoped>
  @import '../../assets/styles/vars';

  .growth {
    padding: 120px 0 0;
    &_content {
      display: flex;
      align-items: center;
      &-info {
        width: 50%;
        h2 {
          text-align: left;
        }
        ul {
          margin: 20px 0;
          padding-left: 60px;
          li {
            font-size: 20px;
            line-height: 1.2;
            font-family: 'MADEEvolveSans-regular', sans-serif;
            color: #595959;
            list-style: none;
            padding: 8px 0;
            position: relative;
            &::before {
              content: '';
              width: 42px;
              height: 1px;
              position: absolute;
              left: -60px;
              top: 20px;
              background-color: $accent-color--red !important;
            }
          }
          .growth-slide_active {
            color: $text-color--black;
          }
        }
        a {
          display: block;
          text-align: left;
          color: $accent-color--red;
          line-height: 1.85;
          letter-spacing: 0.2px;
          font-family: 'MADEEvolveSans-bold', sans-serif;
          font-weight: normal;
          text-decoration: none;
          img {
            width: 10px;
            height: 10px;
            display: inline-block;
            margin-left: 2px;
          }
        }
      }
      &-carousel {
        width: 50%;
        max-height: 410px;
        height: auto;
        position: relative;
        margin-left: 15px;
        &_slide {
          width: 100%;
          height: 100%;
          display: block !important;
          img {
              display: block;
              width: 100%;
              height: 100%;
          }
        }
      }
      :global(.slick-arrow) {
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
        // background-image: url(../../img/Jobs/svg/Employees/arrow.svg);
        cursor: pointer;
        transition: all .2s ease;
      
        &:hover {
          box-shadow: 0 4px 10px 0 rgba(38, 36, 32, 0.30);
        }
      }
      .slick-prev {
        right: 80px;
        transform: scale(-1);
      }
    }
  }

  @media only screen and (max-width: 992px) {
    .growth {
      position: relative;

      &_content {
        flex-direction: column-reverse;

        &-info {
          width: 100%;
        }

        &-carousel {
          width: 100%;
          max-height: none;
          margin-bottom: 30px;
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .growth {
      h2 {
        text-align: center;
      }

      &_content-info {
        width: 100%;

        ul {
          margin: 40px 0;

          li {
            color: $text-color--black;
          }
        }

        a {
          display: block;
          text-align: center;
        }
      }

      &_content-carousel {
        display: none !important;
      }
    }
  }
  @media only screen and (max-width: 480px) {
    .growth {
      padding: 80px 0 0;

      &_content-info {
        width: 100%;

        ul {
          margin: 20px 0;
        }

        a {
          display: block;
          text-align: center;
        }
      }
    }
  }
</style>

