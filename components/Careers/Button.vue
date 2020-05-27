<template>
  <button class="button form-text" @click="callback($event)">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    buttonText: {
      type: String,
      default: 'Button Text'
    }
  },
  methods: {
    callback: function(e) {
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
}
</style>
