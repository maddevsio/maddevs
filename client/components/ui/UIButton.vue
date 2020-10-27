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
    height: 64px;
    border: 1px solid $border-color--red-opacity;
    background-color: $bgcolor--red;
    border-radius: 4px;
    color: $text-color--white;
    font-size: 21px;
    font-family: 'Poppins-Bold', sans-serif;
    font-weight: 700;
    letter-spacing: -0.02em;
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
      cursor: not-allowed;
      user-select: none;
    }

    &--transparent-bgc {
      background-color: transparent;
      color: $text-color--red;
    }
  }
</style>
