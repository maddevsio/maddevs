<template>
  <blockquote class="case_blockquote-box">
    <slot></slot>
  </blockquote>
</template>

<script>
export default {
  name: 'TextQuoteBox',
}
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/cases/_mixins';

.case {
  &_blockquote-box {
    padding-left: 35px;
    border-left: 2px solid $border-color--red;
    @include italic_text($text-color--quote-box, 17px, 166%, -0.035em);

    &_text-modificator {
      color: $text-color--red;
    }

    @media screen and (max-width: 768px) {
      padding-left: 24px;
      @include italic_text($text-color--quote-box, 17px, 153%, -0.035em);
    }
  }
}
</style>
