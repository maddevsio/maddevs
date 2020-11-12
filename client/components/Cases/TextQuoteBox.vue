<template>
  <blockquote class="case_blockquote__box">
    <slot></slot>
  </blockquote>
</template>

<script>
export default {
  name: 'TextQuoteBox'
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/cases/_mixins';

  .case_blockquote__box {
    @include text-quot_box($text-color--quote-box, $border-color--red);
  }
</style>
