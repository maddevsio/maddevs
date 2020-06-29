<template>
  <button
    class="ui-button"
    :class="{ 'ui-button--disabled': disabled }"
    @click="onClick"
    v-WaveAnimation
  >{{ name }}</button>
</template>

<script>
import WaveAnimation from '@/directives/WaveAnimation';

export default {
  name: 'UIButton',
  directives: {
    WaveAnimation
  },
  props: {
    name: {
      type: String,
      default: 'Button'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClick() {
      if (this.$props.disabled === false) {
        this.$emit('click');
      }
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';

  .ui-button {
    height: 55px;
    border-radius: 2px;
    box-shadow: none;
    background-color: transparent;
    font-size: 18px;
    font-family: 'Hoves-Regular';
    cursor: pointer;
    transition: 0.2s;
    background-color: $bgcolor--red;
    border: 1px solid $border-color--red;
    color: $text-color--white;

    &:not(.ui-button--disabled) {
      &:active {
        background-color: $button-active--red;
        border-color: $button-active-border--red;
      }

      &:hover {
        background-color: $bgcolor--red;
        color: $text-color--white;
      }
    }

    &--disabled {
      cursor: not-allowed;
      opacity: 0.5;
      user-select: none;
    }

    &--bold-text {
      font-size: 21px;
      font-family: 'Hoves-Bold';
      letter-spacing: -1px;
    }

    &--transparent-bgc {
      background-color: transparent;
      color: $text-color--red;
    }
  }
</style>
