<template>
  <div class="case_blockquote-big">
    <div class="case_blockquote-big__icon"></div>
    <p class="case_blockquote-big__text">{{text}}</p>
  </div>
</template>

<script>
export default {
  name: 'TextQuoteBig',
  props: {
    text: {
      type: String,
      default: ''
    }
  }
};
</script>

<style scoped lang="scss">
  @import '../../assets/styles/cases/_mixins';

  .case_blockquote-big {
    @include big-quote_container;

    &__text {
      @include big-quote_text($text-color--black-cases);
    }

    &__icon {
      @include big-quote_icon;
    }
  }
</style>
