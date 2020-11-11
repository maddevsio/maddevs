<template>
  <div class="case_blockquote__big">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TextQuoteBig'
};
</script>

<style scoped lang="scss">
  @import '../../assets/styles/cases/_mixins';

  .case_blockquote {
    &__container {
      @include big-quote_container;
    }

    &__text {
      @include big-quote_text($text-color--black-cases);
    }

    &__icon {
      @include big-quote_icon;
    }
  }
</style>
