<template>
  <button class="show-popup_button">
    {{ buttonInnerText }}
  </button>
</template>

<script>
export default {
  name: 'buttonTrigger',
  props: {
    buttonInnerText: {
      type: String,
      default: 'Button Inner Text'
    }
  }
};
</script>

<style lang="scss" scoped>
  .show-popup_button {
    width: 450px;
    height: 65px;
    border: 1px solid #96969c;
    border-radius: 2px;
    box-shadow: none;
    background-color: transparent;
    font-size: 18px;
    font-family: 'Hoves-Regular';
    cursor: pointer;
  }
</style>