<template>
  <blockquote class="case_blockquote">
    <slot></slot>
  </blockquote>
</template>

<script>
export default {
  name: 'TextQuote'
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/cases/_mixins';

  .case_blockquote {
    display: flex;
    position: relative;
    margin: 0;
    padding-left: 81px;
    @include quote_text($text-color--black-cases);

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      @include quote_icon;
    }
  }
</style>
