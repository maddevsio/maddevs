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
    border: 1px solid $border-color--red;
    background-color: $bgcolor--red;
    color: $text-color--white;
    font-size: 21px;
    font-family: 'Hoves-Bold';
    letter-spacing: -0.03em;
    box-shadow: none;
    transition: 0.2s;
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
      opacity: 0.5;
      user-select: none;
    }

    &--transparent-bgc {
      background-color: transparent;
      color: $text-color--red;
    }
  }
</style>
