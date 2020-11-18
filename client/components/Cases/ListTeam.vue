<template>
  <ul class="case_list-team">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: 'ListTeam'
};
</script>

<style scoped lang="scss">
  @import '../../assets/styles/cases/_mixins';

  .case_list-team {
    @include grid(repeat(3, 1fr), auto, 21px, 69px);
  }
</style>
