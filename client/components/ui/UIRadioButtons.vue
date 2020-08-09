<template>
  <div class="ui-radio-buttons" v-if="radios && radios.length">
    <div
      v-for="(item, i) of radios"
      :key="i"
      class="ui-radio-buttons_item"
      :class="{ 'ui-radio-buttons_item--active': active === i }"
      @click="setActive(i, item)"
    >
      <div class="ui-radio-buttons_item-circle"/>
      <div class="ui-radio-buttons_item-label form-text">{{ item.label }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UIFilterColors',
  props: {
    radios: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      active: null
    };
  },
  methods: {
    setActive(index, payload) {
      this.active = index;
      this.$emit('input', payload);
    },
    reset() {
      this.active = null;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/vars';
@import '../../assets/styles/get-vw';

.ui-radio-buttons {
  display: flex;
  align-items: center;

  &_item {
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-right: get-vw(18px);

    &:last-child {
      margin-right: 0;
    }

    &-circle {
      height: get-vw(26px);
      width: get-vw(26px);
      box-sizing: border-box;
      border: 2px solid $text-color--grey;
      border-radius: 100%;
      transition: border 0.15s linear;
      cursor: pointer;
      margin-right: get-vw(5px);
    }

    &-label {
      color: $text-color--grey;
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
}

@media only screen and (max-width: 1600px) {
  .ui-radio-buttons {
    &_item {
      margin-right: 18px;

      &-circle {
        height: 26px;
        width: 26px;
        border: 2px solid $text-color--grey;
        margin-right: 5px;
      }
    }
  }
}
</style>
