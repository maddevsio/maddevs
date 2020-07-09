<template>
  <div class="banner-content">
    <div class="text-content_wrapper">
      <div class="main-title-wrapper">
        <h1 class="banner-main_title">
          Your <br class="phone-screen-br"> Trusted <br> <span class="main-title-white_part">IT Partner</span>
        </h1>
      </div>
      <div class="icon-item">
        <img src="@/assets/img/Services/svg/order-a-project.svg" alt="Order a Project Logotype" class="default-image" v-if="!showGreenBannerImage">
        <img src="@/assets/img/Services/svg/order-a-project-hover.svg"  alt="Order a Project Logotype" class="hover-image" v-if="!showGreenBannerImage" @click="switchImage">
        <img src="@/assets/img/Services/svg/order-a-project-green.svg" alt="Order a Project Logotype" class="green-image" v-if="showGreenBannerImage" @click="switchImage">
      </div> 
    </div>
    <navigationList/>
  </div>
</template>

<script>
import navigationList from '@/components/ui/navigation-list';

export default {
  name: 'Banner',
  components: {
    navigationList
  },
  mounted() {
    window.addEventListener('click', this.setInitialStateForImage);
  },
  destroyed() {
    window.removeEventListener('click', this.setInitialStateForImage);
  },
  data() {
    return {
      showGreenBannerImage: false
    };
  },
  methods: {
    switchImage() {
      this.showGreenBannerImage = !this.showGreenBannerImage;
      this.$modal.show('order-project-from-us-modal');
    },
    setInitialStateForImage() {
      if (event.target.className === 'close-modal') {
        this.showGreenBannerImage = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '../assets/styles/vars';
  .phone-screen-br {
    display: none;
  }

  .icon-item {
    min-height: 415px;
    margin-top: 23px;
    margin-bottom: -36px;

    &:hover {
      .hover-image {
        display: block;
      }

      .default-image {
        display: none;
      }
    }
  }

  .text-content_wrapper {
    justify-content: space-between;
  }

  .hover-image {
    display: none;
  }

  .green-image {
    margin-top: -121px;
    margin-right: 1px;
  }

  @media only screen and (max-width: 1520px) {
    .hover-image,
    .default-image {
      width: 296px;
    }

    .green-image {
      width: 219px;
      margin-top: -91px;
    }
  }

  @media only screen and (max-width: 1440px) {
    /deep/.navigation-list {
      /deep/.navigation-item {
        padding-right: 54px;
      }
    }
  }

  @media only screen and (max-width: 1280px) {
    .icon-item {
      min-height: 243px;
    }

    .hover-image,
    .default-image {
      width: 231px;
    }

    .green-image {
      width: 170px;
      margin-top: -71px;
    }
  }

  @media only screen and (max-width: 1010px) {
    /deep/.navigation-list {
      /deep/.navigation-item {
        padding-right: 41px;
      }
    }

    .hover-image,
    .default-image {
      width: 210px;
    }

    .green-image {
      width: 155px;
      margin-top: -65px;
    }
  }

  @media only screen and (max-width: 970px) {
    /deep/.navigation-list {
      /deep/.navigation-item {
        padding-right: 0;
      }
    }

    .hover-image,
    .default-image {
      width: 188px;
    }

    .green-image {
      width: 140px;
      margin-top: -58px;
    }
  }

  @media only screen and (max-width: 670px) {
    .hover-image,
    .default-image {
      width: 167px;
    }

    .green-image {
      width: 125px;
      margin-top: -50px;
      margin-right: 0;
    }
  }

  @media only screen and (max-width: 455px) {
    .text-content_wrapper {
      padding-bottom: 172px;
    }
  }

  @media only screen and (max-width: 440px) {
    .phone-screen-br {
      display: block;
    }

    .icon-item {
      min-height: initial;
      display: block;
    }

    .default-image,
    .green-image {
      display: block;
      position: absolute;
    }

    .default-image {
      width: 142px;
      top: 44%;
      left: 55%;
    }

    .green-image {
      width: 105px;
      top: 55.5%;
      left: 63.2%;
    }
  }

  @media only screen and (max-width: 400px) {
    .default-image {
      top: 42.5%;
      left: 61%;
    }

    .green-image {
      top: 54%;
      left: 70%;
    }
  }

  @media only screen and (max-width: 384px) {
    .default-image {
      left: 58%;
    }

    .green-image {
      left: 67.5%;
    }
  }

  @media only screen and (max-width: 375px) {
    .default-image {
      top: 40%;
      left: 59%;
    }

    .green-image {
      top: 51.5%;
      left: 68.5%;
    }
  }

  @media only screen and (max-width: 360px) {
    .default-image {
      width: 125px;
      top: 56%;
      left: 62%;
    }

    .green-image {
      width: 93px;
      top: 56%;
      left: 70.5%;
    }
  }

  @media only screen and (max-width: 355px) {
    .default-image {
      top: 38%;
      left: 61%;
    }

    .green-image {
      top: 52%;
      left: 70%;
    }
  }

  @media only screen and (max-width: 320px) {
    .default-image {
      width: 105px;
      top: 40%;
      left: 63%;
    }

    .green-image {
      width: 78px;
      top: 54%;
      left: 71.5%;
    }
  }
</style>
