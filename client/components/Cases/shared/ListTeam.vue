<template>
  <ul class="case_list-team">
    <slot />
  </ul>
</template>

<script>
export default {
  name: 'ListTeam',
}
</script>

<style scoped lang="scss">
.case_list-team {
  @include grid(repeat(3, 1fr), auto, 21px, 69px);

  @media screen and (max-width: 935px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-row-gap: 19px;
  }
}
</style>
