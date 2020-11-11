<template>
  <ul class="case_team-list">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: 'TeamList'
};
</script>

<style scoped lang="scss">
  @import '../../assets/styles/cases/_mixins';

  .case_team-list {
    @include team_list;
  }
</style>
