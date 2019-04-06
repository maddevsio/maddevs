<template>
  <section id="our-blog" class="our-blog">
    <div class="container">
      <div class="our-blog-wrap">
        <h2 class="sec-title">{{$t('Our blog')}}</h2>
        <div class="our-blog-wrap_list">
          <!-- Item 1 -->
          <a :href="$t('blog1-link')" target="_blank" rel="noreferrer" class="our-blog-wrap_list-item">
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
          <a :href="$t('blog2-link')" target="_blank" rel="noreferrer" class="our-blog-wrap_list-item">
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
          <a :href="$t('blog3-link')" target="_blank" rel="noreferrer" class="our-blog-wrap_list-item">
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
          <a :href="$t('blog4-link')" target="_blank" rel="noreferrer" class="our-blog-wrap_list-item">
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
          <a :href="$t('blog5-link')" target="_blank" rel="noreferrer" class="our-blog-wrap_list-item">
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
          <a :href="$t('blog6-link')" target="_blank" rel="noreferrer" class="our-blog-wrap_list-item">
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
export default {
  name: 'our-blog',
  props: ['language'],
  data() {
    return {
      lang: 'en',
    };
  }
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/variables';

  .our-blog {
    background-color: #fff8e9;
    padding: 60px 0;
    &-wrap {
      &_list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 60px;
        &-item {
          width: 31%;
          text-decoration: none;
          margin-bottom: 48px;
          &:hover {
            .our-blog_sender h5 {
              color: $accent-color--red;
            }
          }
          img {
            width: 100%;
          }
          .our-blog_sender {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            margin-top: 24px;
            &-img {
              width: 34px;
              max-width: 34px;
              height: 34px;
              max-height: 34px;
              border-radius: 100%;
              overflow: hidden;
              margin-right: 8px;
              img {
                height: 100%;
                object-fit: cover;
              }
            }
            &-name, &-meta {
              color: #000;
              font-family: 'MADEEvolveSans-regular', sans-serif;
              line-height: 1.08;
              letter-spacing: 0.1px;
              font-size: 13px;
            }
            &-name {
              letter-spacing: .4;
            }
            &-meta {
              display: flex;
              align-items: center;
              justify-content: flex-start;;
              color: #8e8e8e;
              margin-top: 6px;
              span {
                width: 2px;
                height: 2px;
                background-color: #8e8e8e;
                display: inline-block;
                margin: 0 4px;
                border-radius: 100%;
              }
            }
            h5 {
              width: 100%;
              color: #000;
              font-size: 24px;
              line-height: 1.25;
              font-family: 'MADEEvolveSans-medium', sans-serif;
              font-weight: normal;
              margin-top: 12px;
              transition: all .2s ease;
            }
          }
        }
      }
    }
  }
  @media only screen and (max-width: 992px) {
    .our-blog {
      &-wrap_list-item {
        .our-blog_sender h5 {
          font-size: 18px;
        }
      }
    }
  }
  @media only screen and (max-width: 830px) {
    .our-blog {
      &-wrap_list-item {
        width: 49%;
      }
    }
  }
  @media only screen and (max-width: 680px) {
    .our-blog {
      padding: 60px 0;
    }
  }
  @media only screen and (max-width: 576px) {
    .our-blog {
      &-wrap_list-item {
        width: 100%;
      }
    }
  }
</style>

