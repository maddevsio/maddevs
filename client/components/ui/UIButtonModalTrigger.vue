<template>
  <button
    v-WaveAnimation
    :class="{
      'ui-button-modal-trigger--red': isRed,
      'ui-button-modal-trigger--black': isBlack,
      'ui-button-modal-trigger--grey': isGrey,
    }"
    class="ui-button-modal-trigger"
    @click="showModal"
  >
    {{ buttonInnerText }}
  </button>
</template>

<script>
import WaveAnimation from '@/directives/WaveAnimation';

export default {
  name: 'UIButtonModalTrigger',
  directives: {
    WaveAnimation,
  },

  props: {
    buttonInnerText: {
      type: String,
      default: 'Button Inner Text',
    },

    isRed: {
      type: Boolean,
      default: false,
    },

    isBlack: {
      type: Boolean,
      default: false,
    },

    isGrey: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    showModal() {
      this.$emit('onClick');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/vars';

.ui-button-modal-trigger {
  height: 65px;
  border: 1px solid $border-color--grey;
  border-radius: 2px;
  box-shadow: none;
  background-color: transparent;
  font-size: 18px;
  font-family: 'Poppins-Regular', sans-serif;
  cursor: pointer;
  transition: 0.4s;

  &--red {
    color: $text-color--red;
    border: 1px solid $border-color--red;

    &:hover {
      background-color: $bgcolor--red;
      color: $text-color--white;
    }
  }

  &--black {
    color: $text-color--black;
    border: 1px solid $border-color--black;

    &:hover {
      background-color: $bgcolor--black;
      color: $text-color--white;
    }
  }

  &--grey {
    color: $text-color--grey;
    border: 1px solid $border-color--grey;

    &:hover {
      background-color: $bgcolor--grey;
      color: $text-color--black;
    }
  }

  &:active {
    background-color: $button-active--red;
    border-color: $button-active-border--red;
  }
}
</style>
