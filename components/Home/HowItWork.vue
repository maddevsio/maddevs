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
                @beforeChange="handleBeforeChange"
                :options="slickOptions">
                <div class="how-it-work_wrap-content-slide">
                  <picture>
                    <source srcset="../../assets/img/Home/png/how-it-work/hiw2.png, ../../assets/img/Home/png/how-it-work/hiw2@2x.png 2x"
                      media="(max-width: 992px)">
                    <img @click.prevent="nextSlide" src="../../assets/img/Home/png/how-it-work/hiw2.png" srcset="../../assets/img/Home/png/how-it-work/hiw2@2x.png 2x" alt="Slide 1">
                  </picture>
                </div>
                <div class="how-it-work_wrap-content-slide">
                  <picture>
                    <source srcset="../../assets/img/Home/png/how-it-work/hiw1.png, ../../assets/img/Home/png/how-it-work/hiw1@2x.png 2x"
                      media="(max-width: 992px)">
                    <img @click.prevent="nextSlide" ref="image" src="../../assets/img/Home/png/how-it-work/hiw1.png" srcset="../../assets/img/Home/png/how-it-work/hiw1@2x.png 2x" alt="Slide 2">
                  </picture>
                </div>
                <div class="how-it-work_wrap-content-slide">
                  <picture>
                    <source srcset="../../assets/img/Home/png/how-it-work/hiw3.png, ../../assets/img/Home/png/how-it-work/hiw3@2x.png 2x"
                      media="(max-width: 992px)">
                    <img @click.prevent="nextSlide" src="../../assets/img/Home/png/how-it-work/hiw3.png" srcset="../../assets/img/Home/png/how-it-work/hiw3@2x.png 2x" alt="Slide 3">
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
export default {
  name: 'banner',
  data() {
    return {
      lang: 'en',
      activeSlide: 0,
      slickOptions: {
        slidesToShow: 1,
        autoplay: false,
        arrows: false
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
    handleBeforeChange(event, slick, currentSlide, nextSlide) {
      this.setAtiveSlide(nextSlide);
    },
  }
};
</script>

<style lang="scss" scoped>
.how-it-work {
  padding-top: 60px;
  &_wrap {
    p {
      text-align: center;
      max-width: 635px;
      margin: 0 auto;
      margin-top: 30px;
    }
    &-content {
      background-color: #fff8e9;
      padding: 60px 0;
      margin-top: 120px;
      .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      &-title {
        width: 525px;
        margin-right: 30px;
        span {
          font-family: 'MADEEvolveSans-medium', sans-serif;
          cursor: pointer;
          padding: 0 5px;
          transition: all .2s ease;
        }
        .how-it-work_wrap-content-slide_active {
          border-radius: 3px;
          background-color: #fff9dd;
          box-shadow: 0px 0px 0px 1px rgba(255, 241, 177, 1);
          padding-bottom: 3px;
        }
      }
      &-slider {
        width: 660px;
        min-width: 300px;
        height: auto;
        max-height: 375px;
        overflow: hidden;
        border-radius: 5px;
        box-shadow: 0 10px 20px 0 rgba(20, 44, 56, 0.27), 0 3px 10px 0 rgba(20, 44, 56, 0.08);
      }
      &-slide {
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
  }
}
@media only screen and (max-width: 1024px) {
  .how-it-work {
    &_wrap {
      &-content {
        &-slider {
          min-width: 437px;
        }
      }
    }
  }
}
@media only screen and (max-width: 830px) {
  .how-it-work {
    &_wrap {
      &-content {
        .container {
          flex-direction: column;
        }

        &-slider {
          width: 100%;
          order: 0;
        }

        &-title {
          width: 100%;
          margin: 0;
          order: 1;
          margin-top: 80px;
        }
      }
    }
  }
}
@media only screen and (max-width: 768px) {
  .how-it-work {
    padding: 80px 0 0;

    &_wrap {
      &-content {
        margin-top: 80px;
      }

      p {
        font-size: 24px;
        line-height: 1.5;
        margin-top: 10px;
      }
    }
  }
}
@media only screen and (max-width: 576px) {
  .how-it-work {
    &_wrap {
      &-content {
        flex-direction: column;

        &-slider {
          width: 100%;
          order: 0;
        }

        &-title {
          font-size: 26px;
        }
      }
    }
  }
}
@media only screen and (max-width: 480px) {
  .how-it-work {
    padding: 80px 0 0;

    &_wrap {
      &-content {
        padding: 60px 0;
        margin-top: 60px;

        &-slider {
          width: 100%;
          min-width: auto;
        }

        &-title {
          font-size: 24px;
          margin-top: 40px;
        }
      }
    }
  }
}
</style>

