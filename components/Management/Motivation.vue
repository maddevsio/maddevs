<template>
  <section class="motivation">
    <div class="container">
      <div class="motivation_wrap">
        <div class="motivation_wrap-title">
          <p>Мы отвечаем за мотивацию, комфорт и развитие команды, работающей над проектом. Так, вы можете быть уверены, что навыки и знания команды всегда актуальны и соответствуют текущим трендам в сфере разработки. <span>Вам</span> также <span>не надо тратить ресурсы на организацию рабочего пространства</span> сотрудников <span>и платить им за неэффективные часы</span>, проведенные в офисе.</p>
        </div>
        <div class="motivation_wrap-preview">
          <div class="motivation_wrap-preview_head"><span></span></div>
          <slick class="motivation_wrap-preview-slides" ref="slick" @beforeChange="handleBeforeChange"
            :options="slickOptions">
            <div class="motivation_wrap-preview-slide">
              <picture>
                <source
                  srcset="../../assets/img/Home/jpg/best-practices/bp1.jpg, ../../assets/img/Home/jpg/best-practices/bp1@2x.jpg 2x"
                  media="(max-width: 992px)">
                <img @click.prevent="nextSlide" src="../../assets/img/Home/jpg/best-practices/bp1.jpg"
                  srcset="../../assets/img/Home/jpg/best-practices/bp1@2x.jpg 2x">
              </picture>
            </div>
            <div class="motivation_wrap-preview-slide">
              <picture>
                <source
                  srcset="../../assets/img/Home/jpg/best-practices/bp2.jpg, ../../assets/img/Home/jpg/best-practices/bp2@2x.jpg 2x"
                  media="(max-width: 992px)">
                <img @click.prevent="nextSlide" src="../../assets/img/Home/jpg/best-practices/bp2.jpg"
                  srcset="../../assets/img/Home/jpg/best-practices/bp2@2x.jpg 2x">
              </picture>
            </div>
            <div class="motivation_wrap-preview-slide">
              <picture>
                <source
                  srcset="../../assets/img/Home/jpg/best-practices/bp3.jpg, ../../assets/img/Home/jpg/best-practices/bp3@2x.jpg 2x"
                  media="(max-width: 992px)">
                <img @click.prevent="nextSlide" src="../../assets/img/Home/jpg/best-practices/bp3.jpg"
                  srcset="../../assets/img/Home/jpg/best-practices/bp3@2x.jpg 2x">
              </picture>
            </div>
          </slick>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Motivation',
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
    }
  };

</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';

  .motivation {
    background-color: $bgcolor--yellow-light;
    padding: 60px 0;

    &_wrap {
      display: flex;
      justify-content: space-between;
      align-items: center;

      &-preview {
        width: 660px;
        min-width: 300px;
        height: auto;
        max-height: 410px;
        box-shadow: 10px 10px 20px 0 rgba(0, 0, 0, 0.15);
        background-color: #1e1e1e;

        &_head {
          width: 100%;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          background-color: $bgcolor--white;

          span {
            position: relative;
            display: block;
            width: 8px;
            height: 8px;
            border-radius: $border-radius-100;
            background-color: #fdbc40;
            margin-left: 24px;

            &::before {
              content: '';
              display: block;
              width: 8px;
              height: 8px;
              position: absolute;
              top: 0;
              left: -14px;
              border-radius: $border-radius-100;
              background-color: #fc605c;
            }

            &::after {
              content: '';
              display: block;
              width: 8px;
              height: 8px;
              position: absolute;
              top: 0;
              right: -14px;
              border-radius: $border-radius-100;
              background-color: #34c749;
            }
          }
        }

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
        margin-right: 30px;

        p {
          text-align: left;
          font-size: 24px;
          line-height: 1.46;
          font-family: 'MADEEvolveSans-regular', sans-serif;

          span {
            font-family: 'MADEEvolveSans-bold', sans-serif;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .motivation {
      &_wrap {
        &-preview {
          min-width: 437px;
        }
      }
    }
  }

  @media only screen and (max-width: 830px) {
    .motivation {
      &_wrap {
        flex-direction: column;

        &-preview {
          width: 100%;
        }

        &-title {
          width: 100%;
          margin: 0;
          margin-bottom: 60px;
        }
      }
    }
  }

  @media only screen and (max-width: 576px) {
    .motivation {
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
    .motivation {
      padding: 60px 0;

      &_wrap {
        flex-direction: column;

        &-preview {
          width: 100%;
          min-width: auto;
        }

        &-title {
          margin-bottom: 40px;
        }
      }
    }
  }

</style>
