<template>
  <div
    v-if="options && options.length"
    class="ui-radio-buttons"
  >
    <div
      v-for="option of options"
      :key="option.value"
      :class="{ 'ui-radio-buttons_item--active': active === option.value }"
      class="ui-radio-buttons_item"
      @click="setActive(option)"
    >
      <div class="ui-radio-buttons_item-circle" />
      <div class="ui-radio-buttons_item-label">
        {{ option.label }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UIRadioButtons',
  props: {
    options: {
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
    setActive(option) {
      this.active = option.value
      this.$emit('input', option)
    },

    reset() {
      this.active = null
    },
  },
}
</script>

<style lang="scss" scoped>
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
      @include font('Inter', 22px, 400);
      margin-top: 1px;
      color: $text-color--grey;
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
