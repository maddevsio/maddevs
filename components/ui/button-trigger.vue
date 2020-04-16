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
  .show-button {
    width: 450px;
    height: 65px;
    border: 1px solid #96969C;
    border-radius: 2px;
    box-shadow: none;
    background-color: transparent;
    font-size: 18px;
    cursor: pointer;
  }
</style>