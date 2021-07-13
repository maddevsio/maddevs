<template>
  <div class="model-optimal">
    <h2 class="model-optimal__title">
      Optimal model for:
    </h2>
    <ul
      v-if="listItems.length > 0"
      class="model-optimal__list"
    >
      <li
        v-for="item in listItems"
        :key="item"
        class="model-optimal__list-item"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ModelOptimal',
  props: {
    listItems: {
      type: Array,
      default: () => ([]),
    },
  },
}
</script>

<style lang="scss" scoped>
.model-optimal {
  padding: 111px 0 119px;
  &__title {
    font-size: 40px;
    line-height: 48px;
    letter-spacing: -0.05em;
  }
  &__list {
    margin-top: 31px;
    &-item {
      @include font('Inter', 17px, 400);
      display: flex;
      align-items: flex-start;
      line-height: 25px;
      letter-spacing: -0.013em;
      margin-bottom: 20px;
      &:last-of-type {
        margin-bottom: 0;
      }
      &::before {
        content: '↓'; // right arrow is not supported by Inter font
        transform: rotate(-90deg);
        margin-right: 10px;
      }
    }
  }

  @media screen and (max-width: 768px) {
    padding: 44px 0 65px;
    &__title {
      font-size: 35px;
      line-height: 45px;
      letter-spacing: -1.4px;
    }
    &__list-item {
      font-size: 16px;
      margin-bottom: 15px;
    }
  }
}
</style>
