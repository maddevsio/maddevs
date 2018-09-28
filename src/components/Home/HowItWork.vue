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
            <div class="how-it-work_wrap-content-slider_header">
              <div class="s-close"></div>
              <div class="s-hide"></div>
              <div class="s-full"></div>
            </div>
            <carousel :per-page="1" :paginationEnabled="false" mouse-drag:false class="how-it-work_wrap-content-slides">
              <slide class="how-it-work_wrap-content-slide">Hello 1</slide>
              <slide class="how-it-work_wrap-content-slide">Hello 2</slide>
              <slide class="how-it-work_wrap-content-slide">Hello 3</slide>
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
