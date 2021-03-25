<template>
  <div :class="`navigation-wrap-${currentPageName}`" class="navigation-wrap container">
    <nav :class="`navigation-list-${currentPageName}`" class="navigation-list">
      <slot />
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavigationList',
  data() {
    return {
      currentPageName: '',
    }
  },

  mounted() {
    if ($nuxt.$route.name) {
      this.currentPageName = $nuxt.$route.name
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/vars';

.navigation-wrap {
  margin-top: 30px;
  margin-bottom: 60px;
}

.navigation-wrap-projects {
  @media screen and (max-width: 480px) {
    margin-bottom: 40px;
  }

  @media screen and (max-width: 420px) {
    margin-bottom: 20px;
  }
}

.navigation-list {
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 690px) {
    flex-direction: column;
  }
}

.navigation-list-projects {
  justify-content: flex-start;
}

@media screen and (max-width: 1090px) {
  .navigation-list {
    justify-content: space-between;
  }

  .navigation-list-projects {
    justify-content: flex-start;

    /deep/.navigation-item {
      margin-right: 35px;
    }
  }
}

@media only screen and (max-width: 970px) {
  .navigation-list-projects {
    /deep/.navigation-item {
      margin-right: 25px;
    }
  }
}
</style>
