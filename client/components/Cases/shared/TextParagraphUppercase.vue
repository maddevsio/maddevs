<template>
  <p class="case_paragraph-uppercase">
    <slot />
  </p>
</template>

<script>
export default {
  name: 'TextParagraphUppercase',
}
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/cases/_mixins';

.case {
  &_paragraph-uppercase {
    @include default_text($text-color--grey-opacity-40-percent, 16px, 135%, -0.035em, normal);
    text-transform: uppercase;
  }
}
</style>
