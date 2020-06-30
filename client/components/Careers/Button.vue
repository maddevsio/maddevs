<template>
  <button class="button form-text" :class="{ 'is-disabled': disabled }" @click="callback">
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
  padding: 23px 42px;
  background-color: $button-bgcolor--red;
  color: $text-color--white;
  font-weight: bold;
  line-height: 33px;
  cursor: pointer;
  border-radius: $form-border-radius-6;
  border: 0;
  align-self: center;

  &:not(.is-disabled) {
    &:active {
      background-color: $button-active--red;
      border-color: $button-active-border--red;
    }
  }

  @media only screen and (max-width: 768px) {
    border-radius: $form-border-radius-4;
    padding: 18px 31px;
    font-size: 25px;
  }

  @media only screen and (max-width: 670px) {
    font-size: 20px;
    font-weight: normal;
    padding: 15px 30px;
  }

  @media only screen and (max-width: 520px) {
    font-size: 18px;
    border-radius: $form-border-radius-2;
    padding: 12px 66px;
    width: 100%;
  }

  @media only screen and (max-width: 420px) {
    padding: 12px 26px;
  }
}

.is-disabled {
  opacity: 0.7;
  cursor: not-allowed;
}
</style>
