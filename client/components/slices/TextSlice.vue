<template>
  <div class="post-part single">
    <PrismicRichText
      :field="slice.primary.text"
      :html-serializer="htmlSerializer"
      class="textslice"
    />
  </div>
</template>

<script>
export default {
  name: 'TextSlice',
  props: {
    slice: {
      type: Object,
      default: null,
    },

    htmlSerializer: {
      type: Function,
      default: () => null,
    },
  },
}
</script>

<style lang="scss" scoped>
.textslice {
  word-break: break-word;
}
</style>
