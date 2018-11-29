<template>
  <section id="our-blog" class="our-blog">
    <div class="container">
      <div class="our-blog-wrap">
        <h2 class="sec-title">{{$t('Our blog')}}</h2>
        <div class="our-blog-wrap_list">
          <!-- Item 1 -->
          <a :href="$t('blog1-link')" target="_blank" class="our-blog-wrap_list-item">
            <picture>
              <source media="(max-width: 576px)" srcset="../../assets/img/Home/png/our-blog/Uber@2x.png">
              <img src="../../assets/img/Home/png/our-blog/Uber.png" srcset="../../assets/img/Home/png/our-blog/Uber@2x.png 2x" alt="">
            </picture>
            <div class="our-blog_sender">
              <div class="our-blog_sender-img">
                <img src="../../assets/img/Home/png/our-blog/AndrewM.png" srcset="../../assets/img/Home/png/our-blog/AndrewM@2x.png 2x" alt="">
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
              <source media="(max-width: 576px)" srcset="../../assets/img/Home/png/our-blog/docker@2x.png">
              <img src="../../assets/img/Home/png/our-blog/docker.png" srcset="../../assets/img/Home/png/our-blog/docker@2x.png 2x" alt="">
            </picture>
            <div class="our-blog_sender">
              <div class="our-blog_sender-img">
                <img src="../../assets/img/Home/png/our-blog/AndrewS.png" srcset="../../assets/img/Home/png/our-blog/AndrewS@2x.png 2x" alt="">
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
              <source media="(max-width: 576px)" srcset="../../assets/img/Home/png/our-blog/mlm@2x.png">
              <img src="../../assets/img/Home/png/our-blog/mlm.png" srcset="../../assets/img/Home/png/our-blog/mlm@2x.png 2x" alt="">
            </picture>
            <div class="our-blog_sender">
              <div class="our-blog_sender-img">
                <img src="../../assets/img/Home/jpg/our-blog/OlegK.jpg" alt="">
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
              <source media="(max-width: 576px)" srcset="../../assets/img/Home/png/our-blog/gprc@2x.png">
              <img src="../../assets/img/Home/png/our-blog/gprc.png" srcset="../../assets/img/Home/png/our-blog/gprc@2x.png 2x" alt="">
            </picture>
            <div class="our-blog_sender">
              <div class="our-blog_sender-img">
                <img src="../../assets/img/Home/jpg/our-blog/GennadyK.jpg" alt="">
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
              <source media="(max-width: 576px)" srcset="../../assets/img/Home/png/our-blog/docker-wp@2x.png">
              <img src="../../assets/img/Home/png/our-blog/docker-wp.png" srcset="../../assets/img/Home/png/our-blog/docker-wp@2x.png 2x" alt="">
            </picture>
            <div class="our-blog_sender">
              <div class="our-blog_sender-img">
                <img src="../../assets/img/Home/png/our-blog/AndrewS.png" srcset="../../assets/img/Home/png/our-blog/AndrewS@2x.png 2x" alt="">
              </div>
              <div class="our-blog_sender-info">
                <p class="our-blog_sender-name">{{$t('blog5-sender-name')}}</p>
                <p class="our-blog_sender-meta">{{$t('blog5-sender-meta_date')}} <span></span> {{$t('blog5-sender-meta_views')}}</p>
              </div>
              <h5>{{$t('blog5-title')}}</h5>
            </div>
          </a>
          <!-- Item 6 -->
          <a :href="$t('blog6-link')" target="_blank" class="our-blog-wrap_list-item">
            <picture>
              <source media="(max-width: 576px)" srcset="../../assets/img/Home/png/our-blog/mysql-go@2x.png">
              <img src="../../assets/img/Home/png/our-blog/mysql-go.png" srcset="../../assets/img/Home/png/our-blog/mysql-go@2x.png 2x" alt="">
            </picture>
            <div class="our-blog_sender">
              <div class="our-blog_sender-img">
                <img src="../../assets/img/Home/png/our-blog/AndrewM.png" srcset="../../assets/img/Home/png/our-blog/AndrewM@2x.png 2x" alt="">
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
