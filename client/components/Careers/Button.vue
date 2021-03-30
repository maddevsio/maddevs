<template>
  <button id="careers-btn" :class="{ 'is-disabled': disabled }" class="button" @click="handleClick">
    <span v-if="loading === true">Waiting...</span>
    <slot v-else></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
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
    handleClick(e) {
      if (!this.disabled) this.$emit('click', e)
    },
  },
}
</script>
<style lang="scss" scoped>
@import '../../assets/styles/vars';

.button {
  height: 56px;
  width: 401px;
  background-color: $button-bgcolor--red;
  color: $text-color--white;
  font-size: 16px;
  font-family: 'Poppins-Regular', sans-serif;
  line-height: 24px;
  letter-spacing: -0.02em;
  border-radius: 2px;
  border: 0;
  align-self: self-start;
  cursor: pointer;

  &:not(.is-disabled) {
    &:active {
      background-color: $button-active--red;
      border-color: $button-active-border--red;
    }
  }

  @media only screen and (max-width: 860px) {
    width: 100%;
  }

  @media only screen and (max-width: 550px) {
    height: 48px;
    font-size: 14px;
  }
}

.is-disabled {
  opacity: 0.7;
  cursor: not-allowed;
}
</style>
