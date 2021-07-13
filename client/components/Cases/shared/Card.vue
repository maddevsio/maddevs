<template>
  <div
    :style="`padding: ${padding}`"
    class="case_card"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    padding: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped lang="scss">
.case_card {
  position: relative;
  overflow: hidden;
  @include card(auto, auto, 32px, 8px);

  @media screen and (max-width: 768px) {
    @include card(auto, auto, 20px, 8px);
  }
}
</style>
