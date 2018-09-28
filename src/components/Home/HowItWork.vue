<template>
  <section id="how-it-work" class="how-it-work">
    <div class="how-it-work_wrap">
      <h2 class="sec-title">Как мы это делаем?</h2>
      <p>Мы верим в полную прозрачность работы, профессионализм и в наличие четких процессов</p>
      <div class="how-it-work_wrap-content">
        <div class="container">
          <h3 class="how-it-work_wrap-content-title">
            Посмотрите как мы подходим к работе с  <span>командами</span> , как мы занимается их <span>менеджментом</span> , и как <span>коммуницируем</span> внутри и с клиентами
          </h3>
          <div class="how-it-work_wrap-content-slider">
            <carousel :per-page="1" :paginationEnabled="false" loop:true mouse-drag:false class="how-it-work_wrap-content-slides">
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
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: 'banner',
  components: {
    Carousel,
    Slide
  }
};
</script>
