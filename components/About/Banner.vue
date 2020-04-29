<template>
  <section id="about-banner" class="about-banner banner">
    <div class="container">
      <div class="about-banner__banner-content-container banner-content-container">
        <div class="about-banner__text-content_wrapper text-content_wrapper">
          <div class="about-banner__main-title-wrapper">
            <h1 class="about-banner__banner-main_title banner-main_title">
              Mad Devs
              <span class="about-banner__main-title-white_part main-title-white_part"><br>Engineering<br>Your Growth</span>
            </h1>
          </div>
          <div class="about-banner__icon-item">
            <!-- <img src="../../assets/img/about/svg/make-partner.svg" alt="Banner Logotype"> -->
          </div>
        </div>
        <nav class="about-banner__navigation-list navigation-list">
          <router-link to="services/#it-outsourcing" class="about-banner__navigation-item navigation-item">IT Outsourcing</router-link>
          <router-link to="services/#software-development" class="about-banner__navigation-item navigation-item">Software Development</router-link>
          <router-link to="services/#infrastructure-optimisation" class="about-banner__navigation-item navigation-item">Infrastructure Optimization</router-link>
          <router-link to="services/#it-consulting" class="about-banner__navigation-item navigation-item">IT Consulting</router-link>
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

  @media only screen and (max-width: 1620px) {
    .about-banner {
      &__icon-item {
      }
    }
  }

  @media only screen and (max-width: 1440px) {
    .about-banner {
      &__icon-item {
      }
    }
  }

  @media only screen and (max-width: 1366px) {
    .about-banner {
      &__icon-item {
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .about-banner {
      &__icon-item {
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .about-banner {
      &__icon-item {
      }
    }
  }

  @media only screen and (max-width: 610px) {
    .about-banner {
      &__icon-item {
      }
    }
  }

  @media only screen and (max-width: 440px) {
    .about-banner {
      &__icon-item {
      }
    }
  }

  @media only screen and (max-width: 370px) {
    .about-banner {
      &__icon-item {
      }
    }
  }
</style>
