<template>
  <ListNumberedBox>
    <div
      v-if="hasListIntroduction"
      v-html="$prismic.asHtml(slice.primary.list_introduction)"
    />
    <ListNumberedItemBox
      v-for="(item, index) in slice.items"
      :key="index"
    >
      {{ $prismic.asText(item.list_item) }}
    </ListNumberedItemBox>
  </ListNumberedBox>
</template>

<script>
import ListNumberedBox from '@/components/Cases/shared/ListNumberedBox'
import ListNumberedItemBox from '@/components/Cases/shared/ListNumberedItemBox'

export default {
  name: 'OrderedList',
  components: {
    ListNumberedItemBox,
    ListNumberedBox,
  },

  props: {
    slice: {
      type: Object,
      required: true,
    },
  },

  computed: {
    hasListIntroduction() {
      return this.slice.primary.list_introduction && this.slice.primary.list_introduction.length !== 0
    },
  },
}
</script>
