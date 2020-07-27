<template>
  <div class="container banner-container">
  <div class="banner-content">
    <div class="text-content_wrapper">
      <div class="main-title-wrapper">
        <h1 class="banner-main_title">
          Your <br class="phone-screen-br"> Trusted <br> <span class="main-title-white_part">IT Partner</span>
        </h1>
      </div>
      <div class="icon-item">
        <img src="@/assets/img/Services/svg/order-a-project.svg" alt="Order a Project Logotype" class="default-image" v-if="!$store.state.modalWindowIsOpen">
        <img src="@/assets/img/Services/svg/order-a-project-hover.svg"  alt="Order a Project Logotype" class="hover-image" v-if="!$store.state.modalWindowIsOpen" @click="showModal">
        <img src="@/assets/img/Services/svg/order-a-project-green.svg" alt="Order a Project Logotype" class="green-image" v-if="$store.state.modalWindowIsOpen" @click="showModal">
      </div>
    </div>
    <navigationList/>
  </div>
  </div>
</template>

<script>
import navigationList from '@/components/ui/navigation-list';

export default {
  name: 'ServicesBanner',
  components: {
    navigationList
  },
  data() {
    return {
      scrollYPosition: null
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    showModal() {
      this.$modal.show('order-project-from-us-modal');
      this.$store.commit('SET_DISPLAY_STATE_FOR_MODAL_WINDOW', true);
      this.disableScrollOnBody();
    },
    disableScrollOnBody() {
      document.body.style.overflow = 'hidden';
      document.body.style.top = `-${this.scrollYPosition}`;
    },
    handleScroll() {
      this.scrollYPosition = `${window.scrollY}px`;
    }
  }
};
</script>

<style lang="scss" scoped>
  .phone-screen-br {
    display: none;
  }

  .icon-item {
    padding-left: 3.5vw;
    padding-top: 1vw;

    .default-image {
      width: 100%;
    }

    &:hover {
      .hover-image {
        display: block;
        width: 100%;
      }

      .default-image {
        display: none;
        width: 100%;
      }
    }
  }

  .hover-image {
    display: none;
  }

  .green-image {
    margin-top: -121px;
    margin-right: 1px;
  }


  @media only screen and (max-width: 1010px) {
    /deep/.navigation-list {
      /deep/.navigation-item {
        padding-right: 41px;
      }
    }

    .green-image {
      width: 155px;
      margin-top: -65px;
    }
  }

  @media only screen and (max-width: 970px) {

    .green-image {
      width: 140px;
      margin-top: -58px;
    }
  }

  @media only screen and (max-width: 755px) {
    .icon-item {
      display: none;
    }
  }

  @media only screen and (max-width: 670px) {
    .green-image {
      width: 125px;
      margin-top: -50px;
      margin-right: 0;
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

    .green-image {
      display: block;
      position: absolute;
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
