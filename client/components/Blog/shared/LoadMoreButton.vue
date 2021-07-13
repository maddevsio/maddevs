<template>
  <button
    class="load-more-button"
    data-testid="test-load-more-button"
    @click="handleClick"
  >
    See more
  </button>
</template>

<script>
export default {
  name: 'LoadMoreButton',
  methods: {
    handleClick(event) {
      this.$emit('click', event)
    },
  },
}
</script>

<style scoped lang="scss">
.load-more-button {
  display: block;
  margin: 0 auto;
  padding: 12px 156px;
  border: 1px solid $border-color--black;
  font-size: 16px;
  line-height: 26px;
  background-color: transparent;
  cursor: pointer;
  font-family: inherit;
  &:hover {
    color: $text-color--red;
  }
  @media only screen and (max-width: 991px) {
    width: 100%;
    padding: 12px 0;
  }
}
</style>
