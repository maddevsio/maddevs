<template>
  <div class="post-part single">
    <PrismicRichText
      :class="className"
      :field="slice.primary.text"
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
  },

  data() {
    return {
      className: '',
    }
  },

  mounted() {
    if (this.slice.primary.text[0] && this.slice.primary.text[0].type === 'heading1') {
      this.className = this.slice.primary.text[0].text.toLowerCase().replace(/\s/g, '-')
    }
  },
}
</script>
