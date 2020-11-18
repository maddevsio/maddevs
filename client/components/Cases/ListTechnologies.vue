<template>
  <ul class="case_list-technologies">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: 'ListTechnologies'
};
</script>

<style scoped lang="scss">
  @import '../../assets/styles/cases/_mixins';

  .case_list-technologies {
    @include grid(repeat(5, 1fr), auto, 0, 57px);
  }
</style>
