<template>
  <section class="risks">
    <div class="container">
      <div class="risks_wrap">
        <div class="risks_wrap-preview">
          <slick class="risks_wrap-preview-slides" ref="slick" @beforeChange="handleBeforeChange"
            :options="slickOptions">
            <div class="risks_wrap-preview-slide">
              <picture>
                <source
                  srcset="../../assets/img/Home/jpg/best-practices/bp1.jpg, ../../assets/img/Home/jpg/best-practices/bp1@2x.jpg 2x"
                  media="(max-width: 992px)">
                <img @click.prevent="nextSlide" src="../../assets/img/Home/jpg/best-practices/bp1.jpg"
                  srcset="../../assets/img/Home/jpg/best-practices/bp1@2x.jpg 2x">
              </picture>
            </div>
            <div class="risks_wrap-preview-slide">
              <picture>
                <source
                  srcset="../../assets/img/Home/jpg/best-practices/bp2.jpg, ../../assets/img/Home/jpg/best-practices/bp2@2x.jpg 2x"
                  media="(max-width: 992px)">
                <img @click.prevent="nextSlide" src="../../assets/img/Home/jpg/best-practices/bp2.jpg"
                  srcset="../../assets/img/Home/jpg/best-practices/bp2@2x.jpg 2x">
              </picture>
            </div>
            <div class="risks_wrap-preview-slide">
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
        <div class="risks_wrap-title">
          <p>Мы <span>берем на себя все риски</span>, связанные с организацией процесса, <span>разработки и поставки конечного решения в срок</span>. А значит мы следим за тем, чтобы каждый участник проекта следовал процессам, разработанным и задокументированным нами в соответствии с <span>Agile</span> и <span>Scrum</span> методологиями.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Risks',
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

  .risks {
    background-color: $bgcolor--section-bg;
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
          text-align: left;
          font-size: 24px;
          line-height: 1.46;
          font-family: 'MADEEvolveSans-regular', sans-serif;
          color: $text-color--white;

          span {
            font-family: 'MADEEvolveSans-bold', sans-serif;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .risks {
      &_wrap {
        &-preview {
          min-width: 437px;
        }
      }
    }
  }

  @media only screen and (max-width: 992px) {
    .risks {
      &_wrap {
        flex-direction: column;

        &-preview {
          width: 100%;
          max-height: 100%;
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
    .risks {
      &_wrap {
        flex-direction: column;

        &-preview {
          width: 100%;
        }

        &-title {
          p {
            font-size: 22px;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 480px) {
    .risks {
      padding: 60px 0;

      &_wrap {
        flex-direction: column;

        &-preview {
          width: 100%;
          min-width: auto;
        }

        &-title {
          margin-top: 40px;

          p {
            font-size: 18px;
          }
        }
      }
    }
  }

</style>
