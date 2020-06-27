<template>
  <button class="ui-button-modal-trigger" :class="{'ui-button-modal-trigger--red' : buttonIsRed}" @click="showModal()">
    {{ buttonInnerText }}
  </button>
</template>

<script>
export default {
  name: 'UIButtonModalTrigger',
  props: {
    buttonInnerText: {
      type: String,
      default: 'Button Inner Text'
    },
    modalWindowName: {
      type: String,
      default: ''
    },
    buttonIsRed: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    showModal() {
      this.$modal.show(this.$props.modalWindowName);
      this.$nuxt.$emit('tooglePageScrollBar', true);
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';

  .ui-button-modal-trigger {
    height: 65px;
    border: 1px solid $border-color--grey;
    border-radius: 2px;
    box-shadow: none;
    background-color: transparent;
    font-size: 18px;
    font-family: 'Hoves-Regular';
    cursor: pointer;

    &--red {
      color: $text-color--red;
      border: 1px solid $border-color--red;
    }
  }
</style>
