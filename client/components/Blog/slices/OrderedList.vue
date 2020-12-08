<template>
  <list-numbered-box>
    <list-numbered-item-box v-for="(item, index) in slice.items" :key="index">
      {{$prismic.asText(item.list_item)}}
    </list-numbered-item-box>
  </list-numbered-box>
</template>

<script>
import ListNumberedBox from '../../Cases/ListNumberedBox';
import ListNumberedItemBox from '../../Cases/ListNumberedItemBox';
export default {
  name: 'OrderedList',
  components: {ListNumberedItemBox, ListNumberedBox},
  props: ['slice']
};
</script>

<style scoped>

</style>
