<template>
  <section id="reviews" class="reviews">
    <div class="container">
      <div class="reviews_wrap">
        <h2 class="sec-title">{{$t('Сlient feedback ')}}</h2>
        <slick
          class="reviews_wrap-carousel"
          ref="slick"
          :options="slickOptions">
          <div class="reviews_wrap-carousel-slide">
            <p @click.prevent="nextSlide" class="reviews_wrap-carousel-slide_desc">{{$t('Review-2 text')}}</p>
            <div class="sender">
                <img style="margin-bottom: -2px" src="../../assets/img/Home/svg/reviews/teacherly.svg" alt="Teacherly">
                <div class="sender-name">
                    <p>{{$t('Review-2 name')}}</p>
                </div>
            </div>
          </div>
          <div class="reviews_wrap-carousel-slide">
            <p @click.prevent="nextSlide" class="reviews_wrap-carousel-slide_desc">{{$t('Review-3 text')}}</p>
            <div class="sender">
                <img style="margin-top: -2px" src="../../assets/img/Home/svg/reviews/veeqo.svg" alt="Veeqo">
                <div class="sender-name">
                    <p>{{$t('Review-3 name')}}</p>
                </div>
            </div>
          </div>
          <div class="reviews_wrap-carousel-slide">
            <p @click.prevent="nextSlide" class="reviews_wrap-carousel-slide_desc">{{$t('Review-7 text')}}</p>
            <div class="sender">
                <img src="../../assets/img/Home/svg/reviews/GuardRails.svg" alt="GuardRails">
                <div class="sender-name">
                    <p>{{$t('Review-7 name')}}</p>
                </div>
            </div>
          </div>
        </slick>
      </div>
      <div class="clutch-widget" data-url="https://widget.clutch.co" data-widget-type="2" data-height="50" data-darkbg="1" data-clutchcompany-id="258762"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'reviews',
  data() {
    return {
      slickOptions: {
        slidesToShow: 1,
        autoplay: false,
        arrows: false,
        dots: true
      },
    };
  },
  methods: {
    nextSlide() {
      this.$refs.slick.next();
    },
  }
};

</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';

  .reviews {
    width: 100%;
    background-image: $gradient--red-orange;
    padding: 60px 0;
    &_wrap {
      h2 {
        color: $text-color--white;
      }
      .VueCarousel-dot-container .VueCarousel-dot:last-child {
        margin-top: 0 !important;
      }
      &-carousel {
        &-slide {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          width: 100%;
          &_desc {
            max-width: 870px;
            font-size: 28px;
            font-family: 'MADEEvolveSans-regular', sans-serif;
            line-height: 1.6;
            padding: 40px 0 43px;
            margin: 0 auto;
            color: $text-color--white;
            user-select: none;
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          }
          .sender {
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            img {
              height: 28px;
              margin-right: 15px;
            }
            &-name {
              display: flex;
              p {
                color: $text-color--white;
                font-family: 'MADEEvolveSans-bold', sans-serif;
                font-size: 18px;
                line-height: 1.43;
                margin-top: -2px;
                white-space: nowrap;
              }
            }
          }
        }
      }
    }
    .clutch-widget {
      width: 200px;
      background-color: rgba(255, 255, 255, 0.1);
      padding: 12px 0px 7px 20px;
      border-radius: 5px;        
      margin: 50px auto 0;
      margin-top: 50px;
    }
  }
  @media only screen and (max-width: 480px) {
    .reviews {
      padding: 60px 0;

      &_wrap {
        &-carousel {
          .VueCarousel-pagination {
            margin-top: 30px;

            .VueCarousel-dot-container {
              li {
                button {
                  width: 28px !important;
                }
              }
            }
          }

          &-slide {
            &_desc {
              font-size: 20px;
              padding: 30px 0;
            }

            .sender {
              height: auto;
              flex-direction: column;

              img {
                margin: 0 !important;
                margin-bottom: 10px !important;
              }

              &-name {
                margin: 0;
              }
            }
          }
        }
      }
    }
  }
</style>

