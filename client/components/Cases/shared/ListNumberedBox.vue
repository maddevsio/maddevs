<template>
  <ol class="case-list_numbered">
    <slot />
  </ol>
</template>

<script>
export default {
  name: 'ListNumberedBox',
}
</script>

<style scoped lang="scss">
.case-list_numbered {
  padding: 0;
  counter-reset: section;
  list-style-type: none;
  display: flex;
  flex-direction: column;
}
</style>
