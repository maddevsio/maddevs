<template>
  <li class="list-item_box">
    <slot />
  </li>
</template>

<script>
export default {
  name: 'ListHyphenItemBox',
}
</script>

<style scoped lang="scss">
@import '../../../assets/styles/cases/_mixins';

.list-item {
  &_box {
    @include list-item_box($bgcolor--white, 16px 17px 16px 46px, 8px);
    @include default_text($text-color--black-oil, 17px, 166%, -0.035em, normal);

    &::before {
      content: '––';
      width: 24px;
      min-width: 24px;
      height: 24px;
      position: absolute;
      left: 16px;

      @include default_text($text-color--black-oil, 18px, 133%, -0.035em, normal);
    }

    @media screen and (max-width: 768px) {
      @include list-item_box($bgcolor--silver, 8px 16px 8px 46px, 8px);
      @include default_text($text-color--black-oil, 16px, 150%, -0.02em, normal);
      margin-bottom: 10px;
    }
  }
}
</style>
