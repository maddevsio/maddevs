<template>
  <li class="list-item">
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: 'ListGreyItem'
};
</script>

<style scoped lang="scss">
  @import '../../assets/styles/cases/_mixins';

  .list-item {
    @include list-grey-item_container($bgcolor--white);

    &__text {
      @include list-grey-item_text($text-color--black-cases);
    }

    &__checkmark {
      @include list-grey-item_checkmark($text-color--black-cases);
    }
  }
</style>
