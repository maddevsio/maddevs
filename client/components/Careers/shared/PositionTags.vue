<template>
  <div
    v-if="tags.length"
    class="position-tags"
  >
    <span
      v-for="tag in tags"
      :key="tag"
      :class="`position-tags__item--${divider}-divider`"
      class="position-tags__item"
    >
      {{ tag }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'PositionTags',
  props: {
    tags: {
      type: Array,
      default: () => ([]),
    },

    divider: {
      type: String,
      default: 'point',
    },
  },
}
</script>

<style lang="scss" scoped>
.position-tags {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  &__item {
    font-size: 15px;
    line-height: 25px;
    letter-spacing: -0.009em;
    display: flex;
    align-items: center;
    color: $text-color--grey-opacity-40-percent;
    &--point-divider {
      &::after {
        content: "";
        display: block;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: $text-color--grey-opacity-40-percent;
        margin: 2px 8.5px 0;
      }
      &:last-child::after {
        display: none;
      }
    }
    &--comma-divider {
      &::after {
        content: ",\a0";
        display: inline;
      }
      &:last-child::after {
        display: none;
      }
    }
  }
}
</style>
