<template>
  <blockquote class="case_blockquote">
    <slot />
  </blockquote>
</template>

<script>
export default {
  name: 'TextQuote',
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/cases/_mixins';

.case_blockquote {
  display: flex;
  position: relative;
  padding-left: 62px;
  @include default_text($text-color--black-cases, 30px, 166%, -0.02em, normal);

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50px;
    height: 50px;
    @include red-quote;
  }

  @media screen and (max-width: 768px) {
    padding-left: 37px;
    @include default_text($text-color--black-cases, 24px, 150%, -0.02em, normal);

    &:before {
      width: 32px;
      height: 33px;
      top: 4px;
    }
  }
}
</style>
