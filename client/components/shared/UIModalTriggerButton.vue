<template>
  <button
    v-WaveAnimation
    :class="{
      'ui-button-modal-trigger--red': color === 'red',
      'ui-button-modal-trigger--black': color === 'black',
      'ui-button-modal-trigger--grey': color === 'grey',
    }"
    class="ui-button-modal-trigger"
    @click="showModal"
  >
    {{ label }}
  </button>
</template>

<script>
import WaveAnimation from '@/directives/WaveAnimation'

export default {
  name: 'UIModalTriggerButton',
  directives: {
    WaveAnimation,
  },

  props: {
    label: {
      type: String,
      default: 'Label',
    },

    color: {
      type: String,
      default: '',
    },
  },

  methods: {
    showModal() {
      this.$emit('click')
    },
  },
}
</script>

<style lang="scss" scoped>
.ui-button-modal-trigger {
  @include font('Inter', 18px, 400);
  height: 65px;
  border: 1px solid $border-color--grey;
  border-radius: 2px;
  box-shadow: none;
  background-color: transparent;
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
