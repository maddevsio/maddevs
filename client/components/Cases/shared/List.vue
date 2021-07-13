<template>
  <ul class="case_list">
    <slot />
  </ul>
</template>

<script>
export default {
  name: 'List',
}
</script>

<style lang="scss" scoped>
.case_list {
  display: flex;
  flex-direction: column;
}
</style>
