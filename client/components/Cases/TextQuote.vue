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
    padding-left: 81px;
    @include default_text($text-color--black-cases, 38px, 155%, -0.02em, normal);

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 68px;
      height: 68px;
      @include red-quote;
    }
  }
</style>
