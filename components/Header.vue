<template>
  <header class="header">
    <div class="container">
      <div class="header__header-content_wrap">
        <div class="header__left-nav_bar">
          <router-link :to="`/`">
            <img src="../assets/img/common/logo.svg" alt="Logotype" class="header__header-logo">
          </router-link>
          <nav class="header__header-routes_links">
            <router-link :to="`/`">About</router-link>
            <router-link :to="`/services`">Services</router-link>
            <router-link :to="`/projects`">Projects</router-link>
            <router-link :to="`/careers`">Careers</router-link>
            <router-link :to="`/blog`">Blog</router-link>
          </nav>
        </div>
        <div class="header__right-content">
          <div class="header__soc-links_wrap">
            <a href="#"></a>
            <a href="#"></a>
            <a href="#"></a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'main-header'
};
</script>

<style lang="scss" scoped>
  @import '../assets/styles/vars';

  .header {
    width: 100%;
    position: absolute;
    z-index: 2;
    padding-top: 30px;

    &__left-nav_bar {
      display: flex;
      align-items: center;
    }

    &__header-routes_links {
      position: relative;
      margin-top: -32px;
      padding-left: 55px;

      a {
        color: $text-color--grey;
        text-decoration: none;
        margin-right: 26px;
        font-size: 18px;
        font-family: 'Hoves-Regular',
        sans-serif;
      }
    }

    &__header-logo {
      width: 40px;
      height: 70px;
    }
  }
</style>
