<template>
  <p class="case_paragraph" :style="`color: ${color}`">
    <slot></slot>
  </p>
</template>

<script>
export default {
  name: 'TextParagraph',
  props: {
    color: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="scss" scoped>
  .case {
    &_paragraph {
      @include default_text($text-color--black-cases, 17px, 166%, -0.035em, normal);

      @media screen and (max-width: 768px) {
        @include default_text($text-color--black-cases, 16px, 150%, -0.02em, normal);
      }
    }
  }
</style>
