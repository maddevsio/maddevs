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
  @import '../../assets/styles/vars';

  .show-popup_button {
    height: 65px;
    border: 1px solid $border-color--grey;
    border-radius: 2px;
    box-shadow: none;
    background-color: transparent;
    font-size: 18px;
    font-family: 'Hoves-Regular';
    cursor: pointer;
  }

  @media only screen and (max-width: 520px) {
    .show-popup_button {
      height: 50px;
      font-size: 17px;
    }
  }
</style>
