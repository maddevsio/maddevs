<template>
  <section id="services-banner" class="services-banner banner main-parent-item">
    <div class="container">
      <div class="services-banner__banner-content-container banner-content-container">
        <div class="services-banner__text-content_wrapper text-content_wrapper">
          <div class="services-banner__main-title-wrapper">
            <h1 class="services-banner__banner-main_title banner-main_title">
              Your Trusted <br> <span class="services-banner__media-item">IT</span>
              <span class="services-banner__main-title-white_part main-title-white_part">Outsourcing Partner</span>
            </h1>
          </div>
          <div class="services-banner__icon-item">
            <img src="../../assets/img/Services/svg/make-partner.svg" alt="make-partner">
          </div>
        </div>
        <nav class="services-banner__navigation-list navigation-list">
          <a href="#it-outsourcing" class="services-banner__navigation-item navigation-item">IT Outsourcing</a>
          <a href="#software-development" class="services-banner__navigation-item navigation-item">Software Development</a>
          <a href="#infrastructure-optimisation" class="services-banner__navigation-item navigation-item">Infrastructure Optimization</a>
          <a href="#it-consulting" class="services-banner__navigation-item navigation-item">IT Consulting</a>
        </nav>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Banner'
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';

  .services-banner {
    &__media-item {
      color: $text-color--white;
      text-shadow: none;
    }

    &__icon-item {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;

      img {
        margin-bottom: -180px;
        margin-right: 20px;
      }
    }
  }

  @media only screen and (max-width: 1620px) {
    .services-banner {
      &__icon-item {
        img {
          margin-bottom: -200px;
          margin-right: 55px;
        }
      }
    }
  }

  @media only screen and (max-width: 1440px) {
    .services-banner {
      &__icon-item {
        img {
          width: 320px;
          margin-bottom: -179px;
          margin-right: 64px;
        }
      }
    }
  }

  @media only screen and (max-width: 1366px) {
    .services-banner {
      &__icon-item {
        img {
          margin-right: 50px;
        }
      }
    }
  }

  @media only screen and (max-width: 1270px) {
    .services-banner {
      &__media-item {
        display: none;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .services-banner {
      &__icon-item {
       min-width: 375px;

       img {
         width: 235px;
         position: absolute;
         top: 55%;
         left: 41%;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .services-banner {
      &__icon-item {
        img {
          left: 55%;
        }
      }
    }
  }

  @media only screen and (max-width: 610px) {
    .services-banner {
      &__icon-item {
        img {
          width: 185px;
          left: 54%;
          top: 54%;
        }
      }
    }
  }

  @media only screen and (max-width: 440px) {
    .services-banner {
      &__icon-item {
        img {
          width: 150px;
          top: 54%;
        }
      }
    }
  }

  @media only screen and (max-width: 370px) {
    .services-banner {
      &__icon-item {
        img {
          width: 130px;
          left: 53%;
        }
      }
    }
  }
</style>
