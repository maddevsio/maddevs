<template>
  <button class="button-default" @click="showModal()">
    {{ buttonInnerText }}
  </button>
</template>

<script>
export default {
  name: 'ButtonTrigger',
  props: {
    buttonInnerText: {
      type: String,
      default: 'Button Inner Text'
    },
    modalWindowName: {
      type: String,
      default: ''
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
