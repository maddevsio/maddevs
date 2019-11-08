<template>
  <svg width="14" height="9" viewBox="0 0 14 9" fill="none">
    <path :class="{ 'path-reverce': reverce }" fill-rule="evenodd" clip-rule="evenodd" d="M0.341709 0.341709C0.79732 -0.113903 1.53601 -0.113903 1.99162 0.341709L7 5.35009L12.0084 0.341709C12.464 -0.113903 13.2027 -0.113903 13.6583 0.341709C14.1139 0.797321 14.1139 1.53601 13.6583 1.99163L7.82496 7.82496C7.36935 8.28057 6.63065 8.28057 6.17504 7.82496L0.341709 1.99163C-0.113903 1.53601 -0.113903 0.797321 0.341709 0.341709Z" fill="#ABA4A4"/>
  </svg>
</template>

<script>
export default {
  name: 'SvgArrow',
  props: {
    reverce: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
  svg {
    .path-reverce {
      transform: rotate(180deg) translateX(-14px) translateY(-9px);
    }
  }
</style>