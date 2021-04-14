<template>
  <blockquote class="case_blockquote">
    <img
      :data-src="require(`@/assets/img/Studies/svg/qmark.svg`)"
      alt="blockquote"
      class="case_blockquote-mark img_lazy"
    >
    <slot />
  </blockquote>
</template>

<script>
export default {
  name: 'TextQuote',
}
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/cases/_mixins';

.case_blockquote {
  display: flex;
  position: relative;
  padding-left: 62px;
  @include default_text($text-color--black-oil, 30px, 166%, -0.02em, normal);

  &-mark {
    content: '';
    width: 50px;
    height: 50px;
    position: absolute;
    top: -5px;
    left: 0;
    display: block;
  }

  @media screen and (max-width: 768px) {
    padding-left: 37px;
    @include default_text($text-color--black-oil, 24px, 150%, -0.02em, normal);

    &-mark {
      width: 32px;
      height: 33px;
      top: 4px;
    }
  }
}
</style>
