<template>
  <li class="list-item_dot">
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: 'ListItemDot'
};
</script>

<style scoped lang="scss">
  @import '../../assets/styles/cases/_mixins';

  .list-item_dot {
    @include list-item_dot($text-color--black-cases);
  }
</style>
