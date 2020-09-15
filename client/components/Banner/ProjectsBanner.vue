<template>
  <div class="container banner-container">
  <div class="banner-content projects-content">
    <div class="text-content_wrapper">
      <div class="main-title-wrapper">
        <h1 class="banner-main_title">
          Check out<br class="tablet-break"> our<br class="desktop-break">
          <span class="main-title-white_part"> 50+ <br class="tablet-break">implemented projects!</span>
        </h1>
        <navigationList />
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import navigationList from '@/components/ui/navigation-list';

export default {
  name: 'ProjectsBanner',
  components: {
    navigationList
  }
};
</script>

<style lang="scss" scoped>
  .projects-content {
    .container {
      position: relative;

      .main-title-wrapper {
        max-width: 100%;
      }
    }

    .navigation-wrap {
      margin-top: 170px;
    }

    .tablet-break {
      display: none;
    }

    .text-content_wrapper {
      display: flex;
      padding-bottom: 90px;
    }
  }

  @media only screen and (max-width: 1620px) {
    .projects-content {
      .text-content_wrapper {
        display: flex;
      }
    }
  }

  @media only screen and (max-width: 1670px) and (min-width: 1565px) {
    .banner-main_title {
      width: 94%;
    }
  }

  @media only screen and (max-width: 1520px) {
    .projects-content {
      .text-content_wrapper {
        padding-bottom: 40px;
      }
    }
  }

  @media only screen and (max-width: 1280px) {
    .projects-content {
      .text-content_wrapper {
        padding-bottom: 170px;
      }
    }
  }

  @media only screen and (max-width: 1005px) and (min-width: 770px) {
    .projects-content {
      .tablet-break {
        display: block;
      }

      .desktop-break {
        display: none;
      }
    }
  }

  @media only screen and (max-width: 970px) {
    .projects-content {
      .text-content_wrapper {
        padding-bottom: 85px;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .projects-content {
      .text-content_wrapper {
        padding-bottom: 20px;
      }
    }
  }

  @media only screen and (max-width: 714px) {
    .projects-content {
      .tablet-break {
        display: block;
      }

      .desktop-break {
        display: none;
      }
    }
  }

  @media only screen and (max-width: 670px) {
    .banner-main_title {
      font-size: 83px;
    }

    .projects-content {
      .text-content_wrapper {
        padding-bottom: 90px;
      }
    }
  }

  @media only screen and (max-width: 515px) {
    .banner-main_title {
      font-size: 54px;
    }
  }

  @media only screen and (max-width: 455px) {
    .projects-content {
      .text-content_wrapper {
        padding-bottom: 100px;
      }
    }
  }

  @media only screen and (max-width: 355px) {
    .projects-content {
      .text-content_wrapper {
        padding-bottom: 94px;
      }

      .banner-main_title {
        font-size: 48px;
      }
    }
  }
</style>
