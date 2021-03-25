<template>
  <div v-if="radios && radios.length" class="ui-radio-buttons">
    <div
      v-for="(item, i) of radios"
      :key="i"
      :class="{ 'ui-radio-buttons_item--active': active === i }"
      class="ui-radio-buttons_item"
      @click="setActive(i, item)"
    >
      <div class="ui-radio-buttons_item-circle"></div>
      <div class="ui-radio-buttons_item-label">{{ item.label }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UIFilterColors',
  props: {
    radios: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      active: null,
    }
  },

  methods: {
    setActive(index, payload) {
      this.active = index
      this.$emit('input', payload)
    },

    reset() {
      this.active = null
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/vars';

.ui-radio-buttons {
  display: flex;
  align-items: center;

  &_item {
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-right: 18px;

    &:last-child {
      margin-right: 0;
    }

    &-circle {
      height: 22px;
      width: 22px;
      box-sizing: border-box;
      border: 1px solid $text-color--grey;
      border-radius: 100%;
      transition: border 0.15s linear;
      cursor: pointer;
      margin-right: 7px;
    }

    &-label {
      margin-top: 1px;
      color: $text-color--grey;
      font-family: 'Poppins-Regular', sans-serif;
      font-size: 22px;
      line-height: 24px;
      letter-spacing: -0.02em;
    }

    &--active {
      .ui-radio-buttons_item-label {
        color: $text-color--red;
      }

      .ui-radio-buttons_item-circle {
        border: 0;
        background-color: $text-color--red;
      }
    }
  }

  @media only screen and (max-width: 630px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 15px;
  }

  @media only screen and (max-width: 550px) {
    grid-row-gap: 12px;

    &_item {
      &-circle {
        height: 19px;
        width: 19px;
      }

      &-label {
        font-size: 16px;
      }
    }
  }
}
</style>
