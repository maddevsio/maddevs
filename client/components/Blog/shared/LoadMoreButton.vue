<template>
  <button
    class="load-more-button"
    @click="click"
  >
    See more
  </button>
</template>

<script>
export default {
  name: 'LoadMoreButton',
  props: {
    click: {
      type: Function,
      default: () => {},
    },
  },
}
</script>

<style scoped lang="scss">
@import '../../../assets/styles/_vars';

.load-more-button {
  display: block;
  margin: 0 auto;
  padding: 12px 156px;
  border: 1px solid $border-color--black;
  font-size: 16px;
  line-height: 26px;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    color: $text-color--red;
  }
  @media only screen and (max-width: 991px) {
    width: 100%;
    padding: 12px 0;
  }
}
</style>
