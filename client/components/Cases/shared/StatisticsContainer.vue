<template>
  <div class="case_statistics-container">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'StatisticsContainer',
}
</script>

<style lang="scss" scoped>
.case {
  &_statistics-container {
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 880px) {
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>
