<template>
  <section id="services-banner" class="services-banner main-parent-item">
    <div class="container">
      <div class="services-banner__container">
        <div class="services-banner__text-content_wrapper">
          <div class="services-banner__text-flex-item">
            <h1 class="services-banner__text-item services-banner__first-child">Your Trusted</h1>
            <h1 class="services-banner__text-item services-banner__last-child">
              <span class="services-banner__media-item">IT</span> Outsourcing Partner
            </h1>
          </div>
          <div class="services-banner__icon-flex-item">
            <img src="../../assets/img/Services/svg/make-partner.svg" alt="make-partner">
          </div>
        </div>
        <nav class="services-banner__navigation-list">
          <a href="#it-outsourcing-content_items" class="services-banner__navigation-item">IT Outsourcing</a>
          <a href="#software-development" class="services-banner__navigation-item">Software Development</a>
          <a href="#infrastructure-optimization" class="services-banner__navigation-item">Infrastructure Optimization</a>
          <a href="#it-consulting" class="services-banner__navigation-item">IT Consulting</a>
        </nav>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Banner',
};
</script>

<style lang="scss" scoped>
  .services-banner {
    position: relative;
    background-color: #000;
    &__container {
      width: 100%;
      height: 100%;
      padding-top: 150px;
      padding-bottom: 60px;
    }

    &__text-content_wrapper {
      display: flex;
      padding-bottom: 130px;
    }

    &__text-item {
      font-family: 'Hoves-Bold';
      font-style: normal;
      font-weight: bold;
      font-size: 165px;
      letter-spacing: -3px;
    }

    &__first-child {
      color: #000;
      text-shadow: -1px 0 #fff, 0 1px #fff, 1px 0 #fff, 0 -1px #fff;
    }

    &__last-child {
      color: #fff;
    }

    &__navigation-item {
      padding-right: 71px;
      padding-left: 20px;
      color: #f2f2f2;
      font-size: 22px;
      font-family: 'Hoves-Regular';
      background: url('../../assets/img/Services/svg/link-arrow.svg') no-repeat;
      background-position-y: 7px;
    }

    &__icon-flex-item {
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
      &__icon-flex-item {
        img {
          margin-bottom: -200px;
          margin-right: 55px;
        }        
      }

      &__text-item {
        font-size: 125px;
      }

      &__navigation-item {
        font-size: 17px;
      }

      &__navigation-item {
        background-position-y: 3px;
      }
    }
  }

  @media only screen and (max-width: 1440px) {
    .services-banner {
      &__icon-flex-item {
        img {
          width: 320px;
          margin-bottom: -179px;
          margin-right: 64px;
        }        
      }

      &__text-item {
        font-size: 125px;
      }
    }
  }

  @media only screen and (max-width: 1366px) {
    .services-banner {
      &__navigation-item {
        padding-right: 50px; 
        font-size: 17px;
      }

      &__icon-flex-item {
        img {
          margin-right: 50px;
        }        
      }

      &__text-item {
        font-size: 115px;
      }
    }
  }

  @media only screen and (max-width: 1270px) {
    .services-banner {
      &__media-item {
        display: none;
      }

      &__navigation-item {
        padding-right: 30px; 
        font-size: 16px;
      }
    }
  }

  @media only screen and (max-width: 1220px) {
    .services-banner {
      &__navigation-item {
        padding-right: 20px; 
        font-size: 15px;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .services-banner {
      &__icon-flex-item {
        min-width: 375px;
        img {
          width: 235px;
          position: absolute;
          top: 55%;
          left: 41%;
        }        
      }

      &__navigation-list {
        display: flex;
        flex-direction: column;
        margin-top: -60px;
      }

      &__navigation-item {
        padding-bottom: 27px;
        font-size: 31px;
        background-size: 12px;
        background-position-y: 9px
      }

      &__text-item {
        font-size: 100px;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .services-banner {
      &__icon-flex-item {
        img {
          left: 55%;
        }        
      }
    }
  }

  @media only screen and (max-width: 610px) {
    .services-banner {
      &__icon-flex-item {
        img {
          width: 185px;
          left: 54%;
          top: 54%;
        }        
      }

      &__navigation-item {
        font-size: 23px;
        background-size: 11px;
        background-position-y: 6px
      }

      &__text-item {
        font-size: 73px;
      }
    }
  }

  @media only screen and (max-width: 440px) {
    .services-banner {
      &__icon-flex-item {
        img {
          width: 150px;
          top: 54%;
        }        
      }

      &__navigation-item {
        font-size: 18px;
        background-size: 9px;
        background-position-y: 4px
      }

      &__text-item {
        font-size: 56px;
      }
    }
  }

  @media only screen and (max-width: 370px) {
    .services-banner {
      &__icon-flex-item {
        img {
          width: 130px;
          left: 53%;
        }        
      }

      &__navigation-item {
        font-size: 15px;
        background-size: 8px;
        background-position-y: 3px
      }

      &__text-item {
        font-size: 46px;
      }
    }
  }
</style>