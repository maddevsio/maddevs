<template>
  <section id="best-practices" class="best-practices">
    <div class="container">
        <div class="best-practices_wrap">
            <div class="best-practices_wrap-preview">
              <slick
                class="best-practices_wrap-preview-slides"
                ref="slick"
                @beforeChange="handleBeforeChange"
                :options="slickOptions">
                <div class="best-practices_wrap-preview-slide">
                  <picture>
                      <source srcset="../../assets/img/Home/png/best-practices/bp1.png, ../../assets/img/Home/png/best-practices/bp1@2x.png 2x"
                              media="(max-width: 992px)">
                      <img @click.prevent="nextSlide" src="../../assets/img/Home/png/best-practices/bp1.png" srcset="../../assets/img/Home/png/best-practices/bp1@2x.png 2x">
                  </picture>
                </div>
                <div class="best-practices_wrap-preview-slide">
                  <picture>
                      <source srcset="../../assets/img/Home/png/best-practices/bp2.png, ../../assets/img/Home/png/best-practices/bp2@2x.png 2x"
                              media="(max-width: 992px)">
                      <img @click.prevent="nextSlide" src="../../assets/img/Home/png/best-practices/bp2.png" srcset="../../assets/img/Home/png/best-practices/bp2@2x.png 2x">
                  </picture>
                </div>
                <div class="best-practices_wrap-preview-slide">
                  <picture>
                      <source srcset="../../assets/img/Home/png/best-practices/bp3.png, ../../assets/img/Home/png/best-practices/bp3@2x.png 2x"
                              media="(max-width: 992px)">
                      <img @click.prevent="nextSlide" src="../../assets/img/Home/png/best-practices/bp3.png" srcset="../../assets/img/Home/png/best-practices/bp3@2x.png 2x">
                  </picture>
                </div>
              </slick>
            </div>
            <div class="best-practices_wrap-title">
                <p>0 func (r *REST) addCommand (c echo.Context,) {</p>
                <div class="line-number_text">
                  <div id="line-number" class="line-number">
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                  </div>
                  <h3 id="text" class="sec-desc">
                    {{ $t('Using the') }} <span @click="setAtiveSlide(0)" :style="activeSlide == 0 && 'color: #D4FEA4;'">{{ $t('best development practices') }}</span>,
                    {{ $t('we take responsibility for') }} <span @click="setAtiveSlide(1)" :style="activeSlide == 1 && 'color: #A1D9FF;'">{{ $t('the quality') }}</span>
                    {{ $t('and') }} <span @click="setAtiveSlide(2)" :style="activeSlide == 2 && 'color: #E8B8FF;'">{{ $t('stability') }}</span>
                    {{ $t('of the product') }}.
                  </h3>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'best-practices',
  props: ['language'],
  data() {
    return {
      activeSlide: 0,
      slickOptions: {
        slidesToShow: 1,
        autoplay: false,
        arrows: false
      },
    };
  },
  methods: {
    calcLineNumber() {
      let lineHeight = 34;
      function calcLine() {
        const text = document.getElementById('text');
        const lineCounts = parseInt(text.offsetHeight / lineHeight);
        const container = document.getElementById('line-number');
        container.innerHTML = '';
        for (var i = 1; i <= lineCounts; i++) {
          var elem = document.createElement('span');
          elem.innerHTML = i;
          container.appendChild(elem);
        }
      }
      window.addEventListener('resize', function() {
        if (window.innerWidth <= 480) {
          lineHeight = 35;
          calcLine();
        } else {
          lineHeight = 38;
          calcLine();
        }
      });

      if (window.innerWidth <= 480) {
        lineHeight = 35;
        calcLine();
        return false;
      };
      if (window.innerWidth > 1024) {
        lineHeight = 39;
        calcLine();
      } else {
        lineHeight = 38;
        calcLine();
      };
    },
    setAtiveSlide(index) {
      this.activeSlide = index;
      this.$refs.slick.goTo(index);
    },
    handleBeforeChange(event, slick, currentSlide, nextSlide) {
      this.setAtiveSlide(nextSlide);
    },
    nextSlide() {
      this.$refs.slick.next();
    },
  },
  mounted() {
    this.calcLineNumber();
  }
};
</script>

<style lang="scss" scoped>
.best-practices {
  background-color: #1e1e1e;
  padding: 60px 0;
  &_wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &-preview {
      width: 660px;
      min-width: 300px;
      height: auto;
      max-height: 375px;
      box-shadow: 10px 10px 20px 0 rgba(0, 0, 0, 0.15);
      background-color: #1e1e1e;
      &-slides {
        height: 100%;
        overflow: hidden;
        border-radius: 5px;
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
    &-title {
      width: 525px;
      margin-left: 30px;
      p {
        color: #3b3b3b;
        font-size: 14px;
        letter-spacing: normal;
        font-family: 'FiraMono', sans-serif;
        margin-bottom: 10px;
      }
      .line-number_text {
        display: flex;
        align-items: flex-start;
        overflow: hidden;
        .line-number {
          display: flex;
          flex-direction: column;
          margin-right: 38px;
          position: relative;
          margin-top: -12px;
          &::before {
            content: '';
            width: 1px;
            height: 85%;
            position: absolute;
            bottom: 25px;
            right: -12px;
            background-color: #3b3b3b;
          }
          span {
            color: #3b3b3b;
            font-size: 14px;
            margin-top: 26px;
            font-family: 'FiraMono', sans-serif;
            @media only screen and (max-width: 480px) {
              margin-top: 21px;
            }
            &:last-child {
              position: relative;
              &::after {
                content: '}';
                position: absolute;
                right: -15px;
              }
            }
          }
        }
        h3 {
          color: #fff;
          span {
            font-family: 'MADEEvolveSans-medium', sans-serif;
            cursor: pointer;
            transition: all .2s ease;
            color: #fff9dd;
          }
        }
      }
    }
  }
}
@media only screen and (max-width: 1024px) {
  .best-practices {
    &_wrap {
      &-preview {
        min-width: 437px;
      }
    }
  }
}
@media only screen and (max-width: 830px) {
  .best-practices {
    &_wrap {
      flex-direction: column;

      &-preview {
        width: 100%;
      }

      &-title {
        width: 100%;
        margin: 0;
        margin-top: 60px;
      }
    }
  }
}
@media only screen and (max-width: 576px) {
  .best-practices {
    &_wrap {
      flex-direction: column;

      &-preview {
        width: 100%;
      }

      &-title {
        font-size: 26px;
      }
    }
  }
}
@media only screen and (max-width: 480px) {
  .best-practices {
    padding: 60px 0;

    &_wrap {
      flex-direction: column;

      &-preview {
        width: 100%;
        min-width: auto;
      }

      &-title {
        margin-top: 40px;

        .line-number_text h3 {
          font-size: 24px;
        }
      }
    }
  }
}
</style>
