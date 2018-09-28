<template>
  <section id="best-practices" class="best-practices">
    <div class="container">
        <div class="best-practices_wrap">
            <div class="best-practices_wrap-preview">
                <carousel :per-page="1" :paginationEnabled="false" mouse-drag:false class="best-practices_wrap-preview-slides">
                  <slide class="best-practices_wrap-preview-slide">
                    <picture>
                        <source srcset="../../assets/img/png/best-practices/bp1.png"
                                media="(max-width: 992px)">
                        <img src="../../assets/img/png/best-practices/bp1@2x.png">
                    </picture>
                  </slide>
                  <slide class="best-practices_wrap-preview-slide">
                    <picture>
                        <source srcset="../../assets/img/png/best-practices/bp2.png"
                                media="(max-width: 992px)">
                        <img src="../../assets/img/png/best-practices/bp2@2x.png">
                    </picture>
                  </slide>
                  <slide class="best-practices_wrap-preview-slide">
                    <picture>
                        <source srcset="../../assets/img/png/best-practices/bp3.png"
                                media="(max-width: 992px)">
                        <img src="../../assets/img/png/best-practices/bp3@2x.png">
                    </picture>
                  </slide>
                </carousel>
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
                    <h3 id="text">
                        Мы применяем лучшие <span>практики разработки</span>, а также несем ответственность за <span style="color: #a1d9ff;">качество</span> и <span style="color: #e8b8ff;">стабильность</span> работы продукта
                    </h3>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: 'best-practices',
  components: {
    Carousel,
    Slide
  },
  methods: {
    calcLineNumber() {
      let lineHeight = 38;
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
          lineHeight = 28;
          calcLine();
        } else {
          lineHeight = 38;
          calcLine();
        }
      });

      if (window.innerWidth <= 480) {
        lineHeight = 28;
        calcLine();
      }
      if (window.innerWidth > 1024) {
        lineHeight = 45;
        calcLine();
      } else {
        lineHeight = 38;
        calcLine();
      }
    }
  },
  mounted() {
    this.calcLineNumber();
  }
};
</script>
