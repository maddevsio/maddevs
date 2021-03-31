<template>
  <li class="case_list-numbered_item">
    <slot />
  </li>
</template>

<script>
export default {
  name: 'ListNumberedItemBox',
}
</script>

<style scoped lang="scss">
@import '../../assets/styles/cases/_mixins';

.case_list-numbered_item {
  @include list-item_box($bgcolor--silver, 16px 17px 16px 40px, 8px);
  @include default_text($text-color--black-cases, 17px, 166%, -0.035em, normal);
  list-style-type: none;

  &::before {
    counter-increment: section;
    content: counter(section) '.';
    position: absolute;
    left: 16px;
  }

  @media screen and (max-width: 768px) {
    @include list-item_box($bgcolor--silver, 8px 16px 8px 40px, 8px);
    @include default_text($text-color--black-cases, 16px, 150%, -0.02em, normal);
    margin-bottom: 10px;
  }
}
</style>
