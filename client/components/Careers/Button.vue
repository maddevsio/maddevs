<template>
  <button id="careers-btn" class="button" :class="{ 'is-disabled': disabled }" @click="callback">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    callback(e) {
      if (this.$props.disabled === false) {
        this.$emit('click', e);
      }
    }
  }
};
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
