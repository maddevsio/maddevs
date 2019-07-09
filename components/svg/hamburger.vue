<template>
  <svg class="hamburger" :class="{ 'hamburger--dark': isDark }" width="24" height="21" viewBox="0 0 24 21">
    <g fill-rule="nonzero">
      <rect width="24" height="3" rx="1.5"/>
      <rect width="24" height="3" y="9" rx="1.5"/>
      <rect width="24" height="3" y="18" rx="1.5"/>
    </g>
  </svg>
</template>

<script>
export default {
  name: 'Hamburger',
  props: {
    isDark: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';

  .hamburger {
    g {
      fill: $bgcolor--white;
    }
  }

  .hamburger--dark {
    g {
      fill: $bgcolor--black;
    }
  }
</style>
