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
.case_list-numbered_item {
  @include list-item-box($bgcolor--silver, 16px 17px 16px 40px, 8px);
  @include default-text($text-color--black-oil, 17px, 166%, -0.035em, normal);
  list-style-type: none;

  &::before {
    counter-increment: section;
    content: counter(section) '.';
    position: absolute;
    left: 16px;
  }

  @media screen and (max-width: 768px) {
    @include list-item-box($bgcolor--silver, 8px 16px 8px 40px, 8px);
    @include default-text($text-color--black-oil, 16px, 150%, -0.02em, normal);
    margin-bottom: 10px;
  }
}
</style>
