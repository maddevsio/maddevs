<template>
  <button class="button form-text" @click="callback">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  methods: {
    callback(e) {
      this.$emit('click', e);
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
</style>
