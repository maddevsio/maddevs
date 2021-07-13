<template>
  <div class="radio-buttons">
    <div
      :class="{ required: required }"
      class="radio-buttons__field-name field-name"
    >
      {{ label }}
    </div>
    <div class="radio-buttons__radio-list">
      <label
        v-for="option in options"
        :key="option.value"
        :for="`${option.value}-${id}`"
        class="radio-buttons__radio-label"
      >
        <input
          :id="`${option.value}-${id}`"
          data-testid="test-radio-buttons"
          :name="id"
          class="radio-buttons__radio-input"
          type="radio"
          @click="handleSelect(option)"
        >
        <span class="radio-buttons__checkmark-radio" />
        <p class="radio-buttons__radio-text_item">{{ option.label }}</p>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UIRadioList',
  props: {
    id: {
      type: String,
      default: 'input-id',
    },

    options: {
      type: Array,
      default: () => [],
    },

    label: {
      type: String,
      default: 'Label',
    },

    required: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    handleSelect(option) {
      this.$emit('select', option)
    },
  },
}
</script>

<style lang="scss" scoped>
.radio-buttons {
  margin-bottom: 30px;

  &__field-name {
    margin-bottom: 16px;
  }

  &__radio-list {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  &__radio-label {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    cursor: pointer;

    &:hover {
      span {
        background-color: $bgcolor--grey;
      }
    }

    input {
      &:checked ~ {
        span {
          background-color: $bgcolor--red;
          border-color: $border-color--red;
        }

        p {
          color: $text-color--red;
        }
      }
    }

    &:last-child {
      padding-bottom: 0;
    }
  }

  &__radio-text_item {
    @include font('Inter', 16px, 400);
    margin-left: 8px;
    color: $text-color--grey;
    letter-spacing: -0.02em;
  }

  &__radio-input {
    display: none;
  }

  &__checkmark-radio {
    width: 18px;
    height: 18px;
    display: block;
    border-radius: 100%;
    border: 1px solid $border-color--grey;
  }
}
</style>
