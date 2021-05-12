<template>
  <div
    v-if="labels.remote || labels.relocation"
    class="position-labels"
  >
    <div
      v-if="labels.remote"
      class="position-labels__item"
    >
      Remote
    </div>
    <div
      v-if="labels.relocation"
      class="position-labels__item"
    >
      Open for relocation
    </div>
  </div>
</template>

<script>
export default {
  name: 'PositionLabels',
  props: {
    labels: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/vars';

.position-labels {
  display: flex;
  &__item {
    margin-right: 8px;
    padding: 2px 10px;
    font-size: 9px;
    line-height: 15px;
    text-transform: uppercase;
    border-radius: 2px;
    color: $text-color--white-primary;
    &:first-child {
      background-color: $bgcolor--blue;
    }
    &:last-child {
      background-color: $bgcolor--green;
      margin-right: 0;
    }
  }
}
</style>
