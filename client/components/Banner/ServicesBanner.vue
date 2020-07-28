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
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;

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
    width: 74%;
  }

  @media only screen and (max-width: 755px) {
    .icon-item {
      display: none;
    }
  }

  @media only screen and (max-width: 440px) {
    .phone-screen-br {
      display: block;
    }

    .text-content_wrapper {
      display: flex;
      align-items: flex-end;
      position: relative;
    }

    .icon-item {
      min-height: initial;
      display: flex;
      justify-content: flex-end;
      align-items: flex-start;
      height: 40%;
      position: absolute;
      bottom: -12vw;
      right: 12vw;

      .default-image {
        display: flex;
        align-items: flex-end;
        img {
          width: 24%;
        }
      }
    }
  }
</style>
