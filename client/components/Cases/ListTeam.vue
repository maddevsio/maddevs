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
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 21px;
    grid-row-gap: 71px;
  }
</style>
