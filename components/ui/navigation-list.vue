<template>
  <div class="navigation-wrap" v-if="currentPageName !== 'careers'" >
    <nav class="navigation-list" v-if="currentPageName === 'services'">
      <a href="#it-outsourcing" class="navigation-item">IT Outsourcing</a>
      <a href="#software-development" class="navigation-item">Software Development</a>
      <a href="#infrastructure-optimisation" class="navigation-item">Infrastructure Optimization</a>
      <a href="#it-consulting" class="navigation-item">IT Consulting</a>
    </nav>
    <nav class="navigation-list" v-else-if="currentPageName === 'projects'">
      <a href="#case-studies" class="navigation-item">Case studies</a>
      <a href="#customers" class="navigation-item">Our customers</a>
      <a href="#open-source" class="navigation-item">Open-source pet projects</a>
    </nav>
    <nav class="navigation-list" v-else>
      <router-link to="services/#it-outsourcing" class="navigation-item">IT Outsourcing</router-link>
      <router-link to="services/#software-development" class="navigation-item">Software Development</router-link>
      <router-link to="services/#infrastructure-optimisation" class="navigation-item">Infrastructure Optimization</router-link>
      <router-link to="services/#it-consulting" class="navigation-item">IT Consulting</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'navigationList',
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

  .navigation-list {
    display: flex;
    flex-direction: row;
    margin-top: -60px;

    .navigation-item {
      padding-right: 71px;
      padding-left: 20px;
      color: $text-color--grey-light;
      font-size: 22px;
      font-family: 'Hoves-Regular';
      background: url('../../assets/img/common/link-arrow.svg') no-repeat;
      background-position-y: 7px;
      letter-spacing: -0.04em;
    }
  }

  @media only screen and (max-width: 1270px) {
    .navigation-list {
      .navigation-item {
        padding-right: 30px;
        font-size: 16px;
      }
    }
  }

  @media only screen and (max-width: 1220px) {
    .navigation-list {
      .navigation-item {
        padding-right: 20px;
        font-size: 15px;
      }
    }
  }

   @media only screen and (max-width: 1024px) {
    .navigation-list {
      flex-direction: column;

      .navigation-item {
        padding-bottom: 27px;
        font-size: 31px;
        background-size: 12px;
        background-position-y: 9px;
      }
    }
  }

  @media only screen and (max-width: 610px) {
    .navigation-list {
      .navigation-item {
        font-size: 23px;
        background-size: 11px;
        background-position-y: 6px;
      }
    }
  }

  @media only screen and (max-width: 440px) {
    .navigation-list {
      .navigation-item {
        font-size: 18px;
        background-size: 9px;
        background-position-y: 4px;
      }
    }
  }

  @media only screen and (max-width: 370px) {
    .navigation-list {
      .navigation-item {
        font-size: 15px;
        background-size: 8px;
        background-position-y: 3px;
      }
    }
  }
</style>
