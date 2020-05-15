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
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
import SingleProject from '@/components/About/SingleProject';

export default {
  name: 'Customers',
  mounted() {
    if ($nuxt.$route.name) {
      this.currentPageName = $nuxt.$route.name;
    }
  },
  data() {
    return {
      currentPageName: ''
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
    margin-right: 58px;
  }

  &__main-description {
    color: $text-color--grey;
    line-height: 25px;
    letter-spacing: -0.03em;
    max-width: 740px;
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
      display: inline-grid;
      position: absolute;
      bottom: -6px;
      left: 50%;
      margin-left: -20px;
      display: none;
    }
  }
}
</style>
