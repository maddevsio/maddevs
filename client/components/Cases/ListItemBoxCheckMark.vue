<template>
  <li class="list-item_box">
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: 'ListItemBoxCheckMark'
};
</script>

<style scoped lang="scss">
  @import '../../assets/styles/cases/_mixins';

  .list-item {
    &_box {
      @include list-item_box($bgcolor--white, $text-color--black-cases);

      &::before {
        @include list-item-box_checkmark($text-color--black-cases);
      }
    }
  }
</style>
