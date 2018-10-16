<template>
  <section id="our-blog" class="our-blog">
    <div class="container">
      <div class="our-blog-wrap">
        <h2 class="sec-title">{{$t('Our blog')}}</h2>
        <div class="our-blog-wrap_list">
          <!-- Item 1 -->
          <a :href="$t('blog1-link')" target="_blank" class="our-blog-wrap_list-item">
            <picture>
              <source media="(max-width: 576px)" srcset="../../assets/img/png/our-blog/1@2x.png">
              <img src="../../assets/img/png/our-blog/1.png" srcset="../../assets/img/png/our-blog/1@2x.png 2x" alt="">
            </picture>
            <div class="our-blog_sender">
              <div class="our-blog_sender-img">
                <img src="../../assets/img/png/our-blog/AndrewM.png" srcset="../../assets/img/png/our-blog/AndrewM@2x.png 2x" alt="">
              </div>
              <div class="our-blog_sender-info">
                <p class="our-blog_sender-name">{{$t('blog1-sender-name')}}</p>
                <p class="our-blog_sender-meta">{{$t('blog1-sender-meta_date')}} <span></span> {{$t('blog1-sender-meta_views')}}</p>
              </div>
              <h5>{{$t('blog1-title')}}</h5>
            </div>
          </a>
          <!-- Item 2 -->
          <a :href="$t('blog2-link')" target="_blank" class="our-blog-wrap_list-item">
            <picture>
              <source media="(max-width: 576px)" srcset="../../assets/img/png/our-blog/2@2x.png">
              <img src="../../assets/img/png/our-blog/2.png" srcset="../../assets/img/png/our-blog/2@2x.png 2x" alt="">
            </picture>
            <div class="our-blog_sender">
              <div class="our-blog_sender-img">
                <img src="../../assets/img/jpg/our-blog/OlegK.jpg" srcset="../../assets/img/jpg/our-blog/OlegK.jpg 2x" alt="">
              </div>
              <div class="our-blog_sender-info">
                <p class="our-blog_sender-name">{{$t('blog2-sender-name')}}</p>
                <p class="our-blog_sender-meta">{{$t('blog2-sender-meta_date')}} <span></span> {{$t('blog2-sender-meta_views')}}</p>
              </div>
              <h5>{{$t('blog2-title')}}</h5>
            </div>
          </a>
          <!-- Item 3 -->
          <a :href="$t('blog3-link')" target="_blank" class="our-blog-wrap_list-item">
            <picture>
              <source media="(max-width: 576px)" srcset="../../assets/img/png/our-blog/3@2x.png">
              <img src="../../assets/img/png/our-blog/3.png" srcset="../../assets/img/png/our-blog/3@2x.png 2x" alt="">
            </picture>
            <div class="our-blog_sender">
              <div class="our-blog_sender-img">
                <img src="../../assets/img/png/our-blog/AlexV.png" srcset="../../assets/img/png/our-blog/AlexV@2x.png 2x" alt="">
              </div>
              <div class="our-blog_sender-info">
                <p class="our-blog_sender-name">{{$t('blog3-sender-name')}}</p>
                <p class="our-blog_sender-meta">{{$t('blog3-sender-meta_date')}} <span></span> {{$t('blog3-sender-meta_views')}}</p>
              </div>
              <h5>{{$t('blog3-title')}}</h5>
            </div>
          </a>
          <!-- Item 4 -->
          <a :href="$t('blog4-link')" target="_blank" class="our-blog-wrap_list-item">
            <picture>
              <source media="(max-width: 576px)" srcset="../../assets/img/png/our-blog/4@2x.png">
              <img src="../../assets/img/png/our-blog/4.png" srcset="../../assets/img/png/our-blog/4@2x.png 2x" alt="">
            </picture>
            <div class="our-blog_sender">
              <div class="our-blog_sender-img">
                <img src="../../assets/img/png/our-blog/AllaK.png" srcset="../../assets/img/png/our-blog/AllaK@2x.png 2x" alt="">
              </div>
              <div class="our-blog_sender-info">
                <p class="our-blog_sender-name">{{$t('blog4-sender-name')}}</p>
                <p class="our-blog_sender-meta">{{$t('blog4-sender-meta_date')}} <span></span> {{$t('blog4-sender-meta_views')}}</p>
              </div>
              <h5>{{$t('blog4-title')}}</h5>
            </div>
          </a>
          <!-- Item 5 -->
          <a :href="$t('blog5-link')" target="_blank" class="our-blog-wrap_list-item">
            <picture>
              <source v-if="language === 'ru'" media="(max-width: 576px)" srcset="../../assets/img/png/our-blog/5@2x.png">
              <source v-else media="(max-width: 576px)" srcset="../../assets/img/png/our-blog/7@2x.png">
              <img v-if="language === 'ru'" src="../../assets/img/png/our-blog/5.png" srcset="../../assets/img/png/our-blog/5@2x.png 2x" alt="">
              <img v-else src="../../assets/img/png/our-blog/7.png" srcset="../../assets/img/png/our-blog/7@2x.png 2x" alt="">
            </picture>
            <div class="our-blog_sender">
              <div class="our-blog_sender-img">
                <img v-if="language === 'ru'" src="../../assets/img/png/our-blog/TimurZ.png" srcset="../../assets/img/png/our-blog/TimurZ@2x.png 2x" alt="">
                <img v-else src="../../assets/img/jpg/our-blog/AlexeyM.jpg" srcset="../../assets/img/jpg/our-blog/AlexeyM.jpg 2x" alt="">
              </div>
              <div class="our-blog_sender-info">
                <p class="our-blog_sender-name">{{$t('blog5-sender-name')}}</p>
                <p class="our-blog_sender-meta">{{$t('blog5-sender-meta_date')}} <span></span> {{$t('blog5-sender-meta_views')}}</p>
              </div>
              <h5>{{$t('blog5-title')}}</h5>
            </div>
          </a>
          <!-- Item 5 -->
          <a :href="$t('blog6-link')" target="_blank" class="our-blog-wrap_list-item">
            <picture>
              <source v-if="language === 'ru'" media="(max-width: 576px)" srcset="../../assets/img/png/our-blog/6@2x.png">
              <source v-else media="(max-width: 576px)" srcset="../../assets/img/png/our-blog/8@2x.png">
              <img v-if="language === 'ru'" src="../../assets/img/png/our-blog/6.png" srcset="../../assets/img/png/our-blog/6@2x.png 2x" alt="">
              <img v-else src="../../assets/img/png/our-blog/8.png" srcset="../../assets/img/png/our-blog/8@2x.png 2x" alt="">
            </picture>
            <div class="our-blog_sender">
              <div class="our-blog_sender-img">
                <img v-if="language === 'ru'" src="../../assets/img/png/our-blog/AndrewS.png" srcset="../../assets/img/png/our-blog/AndrewS@2x.png 2x" alt="">
                <img src="../../assets/img/png/our-blog/AndrewM.png" srcset="../../assets/img/png/our-blog/AndrewM@2x.png 2x" alt="">
              </div>
              <div class="our-blog_sender-info">
                <p class="our-blog_sender-name">{{$t('blog6-sender-name')}}</p>
                <p class="our-blog_sender-meta">{{$t('blog6-sender-meta_date')}} <span></span> {{$t('blog6-sender-meta_views')}}</p>
              </div>
              <h5>{{$t('blog6-title')}}</h5>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import i18n from 'i18next';

export default {
  name: 'our-blog',
  props: ['language'],
  data() {
    return {
      lang: i18n.language,
    };
  }
};
</script>
