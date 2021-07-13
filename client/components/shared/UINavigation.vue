<template>
  <div
    :class="`navigation-wrap-${pageName}`"
    class="navigation-wrap container"
  >
    <nav
      :class="`navigation-list-${pageName}`"
      class="navigation-list"
    >
      <NuxtLink
        v-for="option in navigation"
        :key="option.title"
        :to="option.link"
        class="navigation-item"
      >
        {{ option.title }}
      </NuxtLink>
      <slot />
    </nav>
  </div>
</template>

<script>
export default {
  name: 'UINavigation',

  props: {
    navigation: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      pageName: '',
    }
  },

  mounted() {
    if ($nuxt.$route.name) this.pageName = $nuxt.$route.name
  },
}
</script>

<style lang="scss" scoped>
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

.navigation-item {
  @include font('Inter', 19px, 400);
  margin-right: 48px;
  border-bottom: 1px solid rgba(236, 28, 36, 0.5);
  color: $text-color--grey-light;
  line-height: 24px;
  letter-spacing: -0.04em;
  text-decoration: none;
  transition: 0.3s;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    border-bottom: 1px solid rgba(236, 28, 36, 1);
  }

  @media screen and (max-width: 1090px) {
    margin-right: 15px;
  }

  @media only screen and (max-width: 970px) {
    font-size: 14px;
    line-height: 24px;
    letter-spacing: -0.03em;
    background-position-y: 4px;
  }

  @media screen and (max-width: 690px) {
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 25px;
    max-width: fit-content;

    &:last-child {
      margin-bottom: 0;
    }
  }
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
