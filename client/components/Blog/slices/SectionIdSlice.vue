<template>
  <div :id="$prismic.asText(slice.primary.id)" />
</template>

<script>
export default {
  name: 'SectionIdSlice',
  props: {
    slice: {
      type: Object,
      required: true,
    },
  },
}
</script>
