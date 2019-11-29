<template>
  <button class="ui-button" @click="handleClick">{{ text }}</button>
</template>

<script>
export default {
  name: 'UIButton',
  props: {
    text: {
      type: String,
      default: 'Button'
    }
  },
  methods: {
    handleClick() {
      this.$emit('UIButtonClick', true);
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';

  .ui-button {
    width: 340px;
    max-height: 70px;
    min-height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $accent-color--red;
    border-radius: 5px;
    color: $text-color--white;
    font-size: 24px;
    font-family: 'MADEEvolveSans-medium', sans-serif;
    font-weight: normal;
    text-decoration: none;
    padding: 20px 40px;
    box-sizing: border-box;
    transition: all .2s ease;
    border: 0;
    cursor: pointer;

    &:hover {
      background-color: darken($accent-color--red, 8);
    }
  }
</style>
