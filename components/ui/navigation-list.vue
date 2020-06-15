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
      padding-right: 81px;
      padding-left: 20px;
      color: $text-color--grey-light;
      font-size: 22px;
      font-family: 'Hoves-Regular';
      background: url('../../assets/img/common/link-arrow.svg') no-repeat;
      background-position-y: 7px;
      letter-spacing: -0.04em;
    }
  }

  @media only screen and (max-width: 1290px) {
    .navigation-list {
      .navigation-item {
        padding-right: 50px;
      }
    }
  }

  @media only screen and (max-width: 1270px) {
    .navigation-list {
      .navigation-item {
        padding-right: 44px;
        font-size: 16px;
        letter-spacing: -0.03em;
        background-position-y: 4px;
      }
    }
  }

   @media only screen and (max-width: 970px) {
    .navigation-list {
      display: grid;
      grid-template-columns: repeat(2, 300px);
      grid-row-gap: 17px;

      .navigation-item {
        font-size: 17px;

        &:nth-child(2) {
          grid-row-start: 2;
        }
      }
    }
  }

  @media only screen and (max-width: 730px) {
    .navigation-list {
      grid-template-columns: repeat(2, 240px);

      .navigation-item {
        padding-right: 25px;
      }
    }
  }

  @media only screen and (max-width: 530px) {
    .navigation-list {
      grid-template-columns: repeat(1, 1fr);
      grid-row-gap: 22px;

      .navigation-item {
        font-size: 18px;
      }
    }
  }
</style>
