<template>
  <div class="position-labels">
    <div class="position-labels__item">
      Remote
    </div>
    <div class="position-labels__item">
      Open for relocation
    </div>
  </div>
</template>

<script>
export default {
  name: 'PositionLabels',
}
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/vars';

.position-labels {
  display: flex;
  &__item {
    padding: 2px 10px;
    font-size: 9px;
    line-height: 15px;
    text-transform: uppercase;
    border-radius: 2px;
    color: $text-color--white-primary;
    &:first-child {
      background-color: $bgcolor--blue;
      margin-right: 8px;
    }
    &:last-child {
      background-color: $bgcolor--green;
    }
  }
}
</style>
