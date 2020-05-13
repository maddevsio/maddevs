<template>
  <button class="button-default" @click="$modal.show(modalWindowName)">
    {{ buttonInnerText }}
  </button>
</template>

<script>
export default {
  name: 'buttonTrigger',
  props: {
    buttonInnerText: {
      type: String,
      default: 'Button Inner Text'
    },
    modalWindowName: {
      type: String,
      default: ''
    }
  }
};
</script>
