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
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-row-gap: 57px;
  }
</style>
