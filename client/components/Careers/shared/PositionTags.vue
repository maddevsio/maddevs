<template>
  <div class="position-tags">
    <span class="position-tags__item">HR</span>
    <span class="position-tags__item">Marketing</span>
    <span class="position-tags__item">DevOps</span>
  </div>
</template>

<script>
export default {
  name: 'PositionTags',
}
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/vars';

.position-tags {
  display: flex;
  align-items: center;
  &__item {
    font-size: 15px;
    line-height: 166%;
    letter-spacing: -0.009em;
    display: flex;
    align-items: center;
    color: $text-color--grey-opacity-40-percent;
    &::before {
      content: "";
      display: block;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: $text-color--grey-opacity-40-percent;
      margin: 2px 8.5px 0;
    }
    &:first-child::before {
      display: none;
    }
  }
}
</style>
