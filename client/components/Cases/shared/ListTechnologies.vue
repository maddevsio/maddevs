<template>
  <ul class="case_list-technologies">
    <slot />
  </ul>
</template>

<script>
export default {
  name: 'ListTechnologies',
}
</script>

<style scoped lang="scss">
.case_list-technologies {
  @include grid(repeat(5, 1fr), auto, 0, 57px);
  padding: 48px 18px 45px;
  background-color: $bgcolor--silver;
  border-radius: 8px;

  @media screen and (max-width: 768px) {
    @include grid(repeat(6, 1fr), auto, 5px, 33px);
    padding: 28px 8px 25px;
  }

  @media screen and (max-width: 360px) {
    @include grid(repeat(5, 1fr), auto, 5px, 33px);
  }
}

.case_list-technologies-godee {
  @media screen and (max-width: 768px) {
    @include grid(repeat(5, 1fr), auto, 5px, 33px);
  }
}
</style>
