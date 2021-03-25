<template>
  <div class="radio-buttons">
    <div :class="{ required: sectionIsRequired }" class="radio-buttons__field-name field-name">{{ fieldName }}</div>
    <div class="radio-buttons__radio-list">
      <label
        v-for="(option, i) in options"
        :key="i"
        :for="`${option.id}-${inputId}`"
        class="radio-buttons__radio-label"
      >
        <input
          :id="`${option.id}-${inputId}`"
          :name="inputId"
          class="radio-buttons__radio-input"
          type="radio"
          @click="sendSelectedValue(option.text)"
        />
        <span class="radio-buttons__checkmark-radio"></span>
        <p class="radio-buttons__radio-text_item">{{ option.text }}</p>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RadioList',
  props: {
    inputId: {
      type: String,
      default: 'input-id',
    },

    options: {
      type: Array,
      default: Function,
    },

    emitMethodName: {
      type: String,
      default: 'method name',
    },

    fieldName: {
      type: String,
      default: 'field name',
    },

    sectionIsRequired: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    sendSelectedValue(value) {
      this.$emit(this.emitMethodName, value)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/vars';

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
    margin-left: 8px;
    color: $text-color--grey;
    font-family: 'Poppins-Regular', sans-serif;
    font-size: 16px;
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
