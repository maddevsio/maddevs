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
import Slick from 'vue-slick';
import 'slick-carousel/slick/slick.css';

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
  components: {
    Slick,
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
  },
};
</script>
