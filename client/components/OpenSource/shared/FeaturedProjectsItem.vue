<template>
  <li class="featured-projects__item">
    <NuxtLink>
      <img
        src=""
        alt=""
        class="featured-projects__item-logo"
      >
      <p class="featured-projects__item-description">
        ff
      </p>
      <button
        type="button"
        class="featured-projects__item-button"
      >
        <span v-html="'↓'" />
      </button>
    </NuxtLink>
  </li>
</template>

<script>
export default {
  name: 'FeaturedProjectsItem',
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_vars';

</style>
