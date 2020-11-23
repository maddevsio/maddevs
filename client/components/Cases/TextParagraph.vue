<template>
  <p class="case_paragraph" :style="`color: ${color}`">
    <slot></slot>
  </p>
</template>

<script>
export default {
  name: 'TextParagraph',
  props: {
    color: {
      type: String,
      default: ''
    }
  }
};
</script>
