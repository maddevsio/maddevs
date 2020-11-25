<template>
  <li class="case_list-numbered_item">
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: 'ListNumberedItemBox'
};
</script>

<style scoped lang="scss">
  @import '../../assets/styles/cases/_mixins';

  .case_list-numbered_item {
    @include list-item_box($bgcolor--silver, $text-color--black-cases, 8px);
    list-style-type: none;

    &::before {
      margin-right: 14px;
      counter-increment: section;
      content: counter(section)'.';
    }
  }
</style>
