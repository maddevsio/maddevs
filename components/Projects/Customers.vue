<template>
  <section id="customers" class="customers">
    <div class="container">
      <div class="customers__title-wrap">
        <h2 class="customers__main-title main-title">
          Our valued customers
        </h2>
        <p class="customers__main-description paragraph">
          Due to our NDAs and confidentiality requirements, we cannot disclose
          details for all of our customers. These are a few of the companies we
          work with.
        </p>
      </div>
      <div class="valued-customers">
        <div class="valued-customers__wrapper">
          <img class="valued-customers__logo" src="../../assets/img/Projects/svg/godee.svg" alt="admitad">
          <span class="valued-customers__industry">Transportation</span>
        </div>
        <div class="valued-customers__wrapper">
          <img class="valued-customers__logo" src="../../assets/img/Projects/svg/guardrails.svg" alt="admitad">
          <span class="valued-customers__industry">Security</span>
        </div>
        <div class="valued-customers__wrapper">
          <img class="valued-customers__logo" src="../../assets/img/Projects/svg/teacherly.svg" alt="admitad">
          <span class="valued-customers__industry">EdTech</span>
        </div>
        <div class="valued-customers__wrapper">
          <img class="valued-customers__logo" src="../../assets/img/Projects/svg/triggermesh.svg" alt="admitad">
          <span class="valued-customers__industry">CloudTech</span>
        </div>
        <div class="valued-customers__wrapper">
          <img class="valued-customers__logo" src="../../assets/img/Projects/svg/clutch.svg" alt="admitad">
          <span class="valued-customers__industry">AdTech</span>
        </div>
        <div class="valued-customers__wrapper">
          <img class="valued-customers__logo" src="../../assets/img/Projects/svg/eatigo.svg" alt="admitad">
          <span class="valued-customers__industry">Logistics</span>
        </div>
        <div class="valued-customers__wrapper">
          <img class="valued-customers__logo" src="../../assets/img/Projects/svg/veeqo.svg" alt="admitad">
          <span class="valued-customers__industry">Ecommerce</span>
        </div>
        <div class="valued-customers__wrapper">
          <img class="valued-customers__logo" src="../../assets/img/Projects/svg/admitad.svg" alt="admitad">
          <span class="valued-customers__industry">AdTech</span>
        </div>
        <div class="valued-customers__wrapper">
          <img class="valued-customers__logo" src="../../assets/img/Projects/svg/iotsploit.svg" alt="admitad">
          <span class="valued-customers__industry">IoT</span>
        </div>
        <div class="valued-customers__wrapper">
          <img class="valued-customers__logo" src="../../assets/img/Projects/svg/sir_jonas.svg" alt="admitad">
          <span class="valued-customers__industry">Tourism</span>
        </div>
        <div class="valued-customers__wrapper">
          <img class="valued-customers__logo" src="../../assets/img/Projects/svg/progressay.svg" alt="admitad">
          <span class="valued-customers__industry">EdTech</span>
        </div>
        <div class="valued-customers__wrapper">
          <img class="valued-customers__logo" src="../../assets/img/Projects/svg/kickoico.svg" alt="admitad">
          <span class="valued-customers__industry">Blockchain</span>
        </div>
        <div class="valued-customers__wrapper">
          <img class="valued-customers__logo" src="../../assets/img/Projects/svg/namba_food.svg" alt="admitad">
          <span class="valued-customers__industry">Logistics</span>
        </div>
        <div class="valued-customers__wrapper">
          <img class="valued-customers__logo" src="../../assets/img/Projects/svg/showmebishkek.svg" alt="admitad">
          <span class="valued-customers__industry">Tourism</span>
        </div>
        <div class="valued-customers__wrapper">
          <img class="valued-customers__logo" src="../../assets/img/Projects/svg/mythril.svg" alt="admitad">
          <span class="valued-customers__industry">Blockchain</span>
        </div>
        <div class="valued-customers__wrapper">
          <img class="valued-customers__logo" src="../../assets/img/Projects/svg/seso.svg" alt="admitad">
          <span class="valued-customers__industry">Entertainment</span>
        </div>
        <div class="valued-customers__wrapper">
          <img class="valued-customers__logo" src="../../assets/img/Projects/svg/tengri.svg" alt="admitad">
          <span class="valued-customers__industry">FinTech</span>
        </div>
        <div class="valued-customers__wrapper">
          <img class="valued-customers__logo" src="../../assets/img/Projects/svg/peklo.svg" alt="admitad">
          <span class="valued-customers__industry">AdTech</span>
        </div>
      </div>
      <buttonTrigger :buttonInnerText="buttonInnerText" class="red-text-and-border"/>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
import buttonTrigger from '@/components/ui/button-trigger';

export default {
  name: 'Customers',
  components: {
    buttonTrigger
  },
  mounted() {
    if ($nuxt.$route.name) {
      this.currentPageName = $nuxt.$route.name;
    }
  },
  data() {
    return {
      currentPageName: '',
      buttonInnerText: 'Order a project from us'
    };
  }
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/vars';

.customers {
  margin-top: 170px;

  &__title-wrap {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }

  &__main-title {
    color: $text-color--red;
    max-width: 700px;
    min-width: 575px;
    margin-right: 58px;
  }

  &__main-description {
    color: $text-color--grey;
    line-height: 25px;
    letter-spacing: -0.03em;
    max-width: 575px;
    padding-bottom: 19px;
  }

  .valued-customers {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(166px, 1fr));
    align-items: center;
    margin: 80px 0 40px;
    grid-row-gap: 100px;
    grid-column-gap: 80px;

    &__wrapper {
      justify-self: center;
      align-self: center;
      position: relative;
    }

    &__wrapper:hover .valued-customers__industry {
      display: block;
    }

    &__industry {
      font-size: 12px;
      color: #ccc;
      align-items: center;
      justify-self: center;
      position: absolute;
      bottom: -24%;
      text-align: center;
      display: none;
    }
  }
}

@media only screen and (max-width: 1024px), only screen and (min-width: 1024px) {
  .customers {
    &__title-wrap {
      flex-wrap: wrap;
    }

    &__main-description {
      padding-top: 17px;
    }

    .valued-customers {
      grid-template-columns: repeat(auto-fit, minmax(125px, 1fr));

      &__wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      &__logo {
        width: 90%;
      }
    }
  }
}

@media only screen and (max-width: 860px) {
  .customers {
    .valued-customers {
      grid-template-columns: repeat(auto-fit, minmax(115px, 1fr));

      &__logo {
        width: 80%;
      }

      &__industry {
        font-size: 10px;
      }
    }
  }
}

@media only screen and (max-width: 615px) {
  .customers {
    &__main-title {
      min-width: 0;
    }

    .valued-customers {
      grid-template-columns: repeat(auto-fit, minmax(105px, 1fr));
      grid-row-gap: 50px;
      grid-column-gap: 0;
      margin-top: 47px;

      &__logo {
        width: 80%;
      }

      &__industry {
        font-size: 8px;
      }
    }
  }
}

@media only screen and (max-width: 350px) {
  .customers {
    .valued-customers {
      grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));

      &__logo {
        width: 70%;
      }
    }
  }
}

</style>
