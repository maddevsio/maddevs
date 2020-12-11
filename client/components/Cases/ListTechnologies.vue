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

    @media screen and (max-width: 768px) {
      @include grid(repeat(6, 1fr), auto, 5px, 33px);
    }

    @media screen and (max-width: 360px) {
      @include grid(repeat(5, 1fr), auto, 5px, 33px);
    }
  }
</style>
