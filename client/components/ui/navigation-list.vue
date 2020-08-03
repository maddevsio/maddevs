<template>
  <div class="navigation-wrap" v-if="currentPageName !== 'careers'" >
    <nav class="navigation-list" v-if="currentPageName === 'services'">
      <a href="#remote-tech-staff" class="navigation-item">Remote Tech Staff</a>
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
      <router-link to="services/#remote-tech-staff" class="navigation-item">Remote Tech Staff</router-link>
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
  @import '../../assets/styles/get-vw';

  .navigation-list {
    display: flex;
    flex-direction: row;

    .navigation-item {
      padding-right: 5vw;
      color: $text-color--grey-light;
      font-size: 1.4vw;
      font-family: 'Hoves-Regular';
      letter-spacing: -0.045em;
      &::before {
        content: '';
        border: solid red;
        border-width: 0 get-vw(2.5px) get-vw(2.5px) 0;
        display: inline-block;
        padding: get-vw(4px);
        transform: rotate(-45deg);
        -webkit-transform: rotate(-45deg);
        margin-right: get-vw(18px);
        vertical-align: middle;
      }
    }
  }

  @media only screen and (max-width: 970px) {
    .navigation-list {
      display: grid;
      grid-template-columns: repeat(2, 35vw);
      grid-row-gap: 1.5vw;
    }
  }

  @media only screen and (max-width: 730px) {
    .navigation-list {
      grid-template-columns: repeat(2, 50vw);
      grid-row-gap: 3.5vw;

      .navigation-item {
        font-size: 3vw;

        &::before {
          border-width: 0 get-vw(3px, 730) get-vw(3px, 730) 0;
          padding: get-vw(5px, 730);
          margin-right: get-vw(18px, 730);
        }
      }
    }
  }

  @media only screen and (max-width: 530px) {
    .navigation-list {
      grid-template-columns: repeat(1, 1fr);
      grid-row-gap: 7.5vw;

      .navigation-item {
        font-size: 5vw;

        &::before {
          border-width: 0 get-vw(3px, 530) get-vw(3px, 530) 0;
          padding: get-vw(5px, 530);
          margin-right: get-vw(18px, 530);
        }
      }
    }
  }
</style>
