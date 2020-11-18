<template>
  <div class="case_usage-scenarios">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ListUsageScenarios'
};
</script>

<style scoped lang="scss">
  @import '../../../assets/styles/cases/_mixins';

  .case_usage-scenarios {
    @include grid(repeat(2, 1fr), auto, 24px, 25px);
  }
</style>
