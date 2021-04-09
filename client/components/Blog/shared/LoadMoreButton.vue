<template>
  <button
    class="load-more-button"
    @click="clickHandler"
  >
    See more
  </button>
</template>

<script>

export default {
  name: 'LoadMoreButton',
  props: {
    clickHandler: {
      type: Function,
      required: true,
    },
  },
}
</script>

<style scoped lang="scss">
@import '../../../assets/styles/_vars';

.load-more-button {
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
