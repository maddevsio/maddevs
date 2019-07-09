<template>
  <svg class="linkedin-icon" :class="{ 'linkedin-icon--dark': isDark }" width="22" height="22" viewBox="0 0 22 22">
    <path fill-rule="nonzero" d="M3.438 0h15.124A3.438 3.438 0 0 1 22 3.438v15.124A3.438 3.438 0 0 1 18.562 22H3.438A3.438 3.438 0 0 1 0 18.562V3.438A3.437 3.437 0 0 1 3.438 0zm6.225 9.476v6.15h1.872v-2.98c0-.998.367-1.633 1.251-1.633.637 0 .888.59.888 1.634v2.978h1.871V12.23c0-1.834-.439-2.833-2.287-2.833-.965 0-1.606.451-1.857.953v-.873H9.663zm-3.208 6.07h1.871v-6.15H6.455v6.15zM8.594 7.39a1.203 1.203 0 1 0-2.407 0 1.203 1.203 0 0 0 2.407 0z"/>
  </svg>
</template>

<script>
export default {
  name: 'Linkedin-icon',
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

  .linkedin-icon {
    path {
      fill: $bgcolor--white;
    }
  }

  .linkedin-icon--dark {
    path {
      fill: $bgcolor--black;
    }
  }
</style>
