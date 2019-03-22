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
                <img style="margin-top: -2px" src="../../assets/img/Home/svg/reviews/GuardRails.svg" alt="GuardRails">
                <div class="sender-name">
                    <p>{{$t('Review-7 name')}}</p>
                </div>
            </div>
          </div>
        </slick>
      </div>
    </div>
  </section>
</template>

<script>
const Slick = process.BROWSER_BUILD ? require('vue-slick') : null;
import 'slick-carousel/slick/slick.css';

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
  components: {
    Slick,
  },
  methods: {
    nextSlide() {
      this.$refs.slick.next();
    },
  }
};

</script>

<style lang="scss" scoped>
.reviews {
  width: 100%;
  background-image: linear-gradient(112deg, #f34f53, #fc944e);
  padding: 60px 0;
  &_wrap {
    h2 {
      color: #fff;
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
          color: #fff;
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
              color: #fff;
              font-family: 'MADEEvolveSans-bold', sans-serif;
              font-size: 18px;
              line-height: 1.43;
              margin-top: -2px;
              white-space: nowrap;
            }
          }
        }
      }
      .slick-dots {
        display: flex;
        padding-left: 0;
        justify-content: center;
        margin-top: 30px;
        margin-bottom: 0;
        button {
          display: none;
        }
        li {
          width: 36px !important;
          height: 3px !important;
          border-radius: 3px;
          background-color: rgba(255, 255, 255, 0.2) !important;
          overflow: hidden;
          margin: 10px;
        }
        .slick-active {
          background: #fff !important;
          outline: none;
        }
      }
    }
  }
}
</style>

