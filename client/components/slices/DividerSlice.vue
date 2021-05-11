<template>
  <hr>
</template>

<script>
export default {
  name: 'Divider',
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/_vars.scss';

hr {
  border-bottom: none;
  border-left: none;
  border-right: none;
  border-top: 1px solid $border-color--grey-20-percent;
  margin: 48px 0;
}
</style>
