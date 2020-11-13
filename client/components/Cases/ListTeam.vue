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
    @include list_team;
  }
</style>
