<template>
  <section id="how-it-work" class="how-it-work">
    <div class="how-it-work_wrap">
      <h2 class="sec-title">{{ $t('How do we work?') }}</h2>
      <p>{{ $t('Since we are working remotely we strongly believe in the transparency of work, pay special attention to communication and keep strict compliance to working processes') }}</p>
      <div class="how-it-work_wrap-content">
        <div class="container">
          <h3 v-if="lang === 'en'" class="how-it-work_wrap-content-title">
            We assemble and <span>manage</span> technical <span>team</span> for you and closely <span>communicate</span> with our clients and inside the team.
          </h3>
          <h3 v-else class="how-it-work_wrap-content-title">
            Посмотрите как мы подходим к работе с <span>командами</span>, как мы занимается их <span>менеджментом</span>, и как <span>коммуницируем</span> внутри и с клиентами.
          </h3>
          <div class="how-it-work_wrap-content-slider">
            <carousel :per-page="1" :paginationEnabled="false" mouse-drag:false class="how-it-work_wrap-content-slides">
              <slide class="how-it-work_wrap-content-slide">
                <picture>
                    <source srcset="../../assets/img/png/how-it-work/hiw1.png"
                            media="(max-width: 992px)">
                    <img src="../../assets/img/png/how-it-work/hiw1@2x.png">
                </picture>
              </slide>
              <slide class="how-it-work_wrap-content-slide">
                <picture>
                    <source srcset="../../assets/img/png/how-it-work/hiw2.png"
                            media="(max-width: 992px)">
                    <img src="../../assets/img/png/how-it-work/hiw2@2x.png">
                </picture>
              </slide>
              <slide class="how-it-work_wrap-content-slide">
                <picture>
                    <source srcset="../../assets/img/png/how-it-work/hiw3.png"
                            media="(max-width: 992px)">
                    <img src="../../assets/img/png/how-it-work/hiw3@2x.png">
                </picture>
              </slide>
            </carousel>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import i18n from 'i18next';
import { Carousel, Slide } from 'vue-carousel';
export default {
  name: 'banner',
  components: {
    Carousel,
    Slide
  },
  data() {
    return {
      lang: i18n.language
    };
  },
  updated() {
    this.lang = i18n.language;
  },
};
</script>
