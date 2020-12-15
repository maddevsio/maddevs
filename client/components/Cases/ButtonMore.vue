<template>
  <button type="button" class="case_more-button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Header'
};
</script>

<style scoped lang="scss">
@import "../../assets/styles/cases/mixins";

.case {
  &_more-button {
    position: absolute;
    bottom: 0;
    max-width: 1104px;
    height: 55px;
    width: 100%;
    border: 0;
    z-index: 1;
    cursor: pointer;

    @include default_text($text-color--white, 18px, 30px, -0.035em, normal);

    @media screen and (max-width: 768px) {
      @include default_text($text-color--white, 16px, 150%, -0.02em, normal);
    }
  }
}
</style>
