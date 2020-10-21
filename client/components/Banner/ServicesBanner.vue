<template>
  <section class="banner__banner-container banner-container">
    <div class="banner__banner-content banner-content">
      <div class="banner__title-wrapper container">
        <h1 class="banner__banner-main_title banner-main_title">
          Your Trusted <br> <span class="banner__main-title-white_part main-title-white_part">IT Partner</span>
        </h1>
        <div class="banner__order-a-project-icon"></div>
      </div>
      <navigationList/>
    </div>
  </section>
</template>

<script>
import navigationList from '@/components/ui/navigation-list';

export default {
  name: 'ServicesBanner',
  components: {
    navigationList
  }
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/_servicesBannerIcons';

  .banner {
    &__title-wrapper {
      display: flex;
      justify-content: space-between;
      margin-bottom: 28px;
    }
  
    &__order-a-project-icon {
      width: 295px;
      height: 312px;
      display: block;
      position: relative;
      right: 30px;
      @include order-a-project-icon;
    }
  }
</style>
