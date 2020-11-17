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

  .case_blockquote {
    &__box {
      padding-left: 35px;
      border-left: 2px solid $border-color--red;
      @include italic_text($text-color--quote-box, 18px, 33px, -0.035em);
    }

    &__text-modificator {
      color: $text-color--red;
    }
  }
</style>
