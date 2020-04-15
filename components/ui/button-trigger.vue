<template>
  <button class="show-button">
    {{ buttonInnerText }}
  </button>
</template>

<script>
export default {
  props: ['buttonInnerText'],
  name: 'buttonTrigger',
};
</script>

<style lang="scss" scoped>
  
</style>