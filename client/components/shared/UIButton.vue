<template>
  <button
    v-WaveAnimation="!disabled"
    :class="{ 'ui-button--disabled': disabled }"
    class="ui-button"
    @click="handleClick"
  >
    <span v-if="loading">Waiting...</span>
    <slot v-else />
  </button>
</template>

<script>
import WaveAnimation from '@/directives/WaveAnimation'

export default {
  name: 'UIButton',
  directives: {
    WaveAnimation,
  },

  props: {
    loading: {
      type: Boolean,
      default: false,
    },

    disabled: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    handleClick() {
      if (!this.disabled) this.$emit('click')
    },
  },
}
</script>

<style lang="scss" scoped>
.ui-button {
  @include font('Inter', 16px, 700);
  border: 1px solid $border-color--red-opacity;
  background-color: $bgcolor--red;
  border-radius: 4px;
  color: $text-color--white;
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

  &_submit-button-footer {
    @include font('Inter', 16px, 400);
    width: 100%;
    height: 54px;
    line-height: 27px;
    letter-spacing: -0.1px;
    font-weight: 400;
  }

  @media only screen and (max-width: 360px) {
    font-size: 14px;
  }
}
</style>
