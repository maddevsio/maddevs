<template>
  <div class="case_card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Card'
};
</script>

<style scoped lang="scss">
  @import '../../assets/styles/cases/_mixins';

  .case_card {
    position: relative;
    overflow: hidden;
    @include card(auto, auto, 35px 32px, 8px);
  }
</style>
