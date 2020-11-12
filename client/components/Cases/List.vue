<template>
  <ul class="case_list">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: 'List'
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/cases/_mixins';

  .case {
    &_list {
      @include list;
    }
  }
</style>
