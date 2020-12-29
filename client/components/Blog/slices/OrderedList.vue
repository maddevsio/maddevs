<template>
  <list-numbered-box>
    <div v-if="slice.primary.list_introduction && slice.primary.list_introduction.length !== 0" v-html="$prismic.asHtml(slice.primary.list_introduction)"/>
    <list-numbered-item-box v-for="(item, index) in slice.items" :key="index">
      {{$prismic.asText(item.list_item)}}
    </list-numbered-item-box>
  </list-numbered-box>
</template>

<script>
import ListNumberedBox from '@/components/Cases/ListNumberedBox';
import ListNumberedItemBox from '@/components/Cases/ListNumberedItemBox';
export default {
  name: 'OrderedList',
  components: {
    ListNumberedItemBox,
    ListNumberedBox
  },
  props: {
    slice: {
      type: Object,
      required: true
    }
  }
};
</script>
