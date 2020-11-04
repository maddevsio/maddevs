<template>
  <button
    class="ui-button"
    :class="{ 'ui-button--disabled': disabled }"
    @click="onClick"
    v-WaveAnimation="!disabled"
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
    border: 1px solid $border-color--red-opacity;
    background-color: $bgcolor--red;
    border-radius: 4px;
    color: $text-color--white;
    font-size: 16px;
    font-family: 'Poppins-Regular', sans-serif;
    font-weight: 700;
    letter-spacing: -0.02em;
    line-height: 24px;
    box-shadow: none;
    transition: 0.4s;
    cursor: pointer;

    &:not(.ui-button--disabled) {
      &:hover {
        background-color: $bgcolor--red;
        color: $text-color--white;
      }

      &:active {
        background-color: $button-active--red;
        border-color: $button-active-border--red;
      }
    }

    &--disabled {
      opacity: 0.5;
      cursor: not-allowed;
      user-select: none;
    }

    &--transparent-bgc {
      background-color: transparent;
      color: $text-color--red;
    }

    @media only screen and (max-width: 360px) {
      font-size: 14px;
    }
  }
</style>
