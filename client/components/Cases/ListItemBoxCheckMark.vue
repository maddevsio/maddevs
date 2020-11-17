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
        content: '✓';
        width: 24px;
        min-width: 24px;
        height: 24px;
        margin-right: 14px;

        @include default_text($text-color--black-cases, 18px, 133%, -0.035em);
      }
    }
  }
</style>
