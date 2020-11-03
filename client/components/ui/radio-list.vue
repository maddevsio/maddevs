<template>
  <div class="radio-buttons">
    <div class="radio-buttons__field-name field-name" :class="{'required': sectionIsRequired}">{{ fieldName }}​</div>
    <div class="radio-buttons__radio-list">
      <label class="radio-buttons__radio-label"  v-for="(option, i) in options" :key="i" :for="`${option.id}-${inputId}`">
        <input
          class="radio-buttons__radio-input"
          :id="`${option.id}-${inputId}`"
          type="radio"
          :name="inputId"
          @click="sendSelectedValue(option.text)"
        >
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
      default: 'input-id'
    },
    options: {
      type: Array,
      default: Function
    },
    emitMethodName: {
      type: String,
      default: 'method name'
    },
    fieldName: {
      type: String,
      default: 'field name'
    },
    sectionIsRequired: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    sendSelectedValue(value) {
      this.$emit(this.emitMethodName, value);
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';

  .radio-buttons {
    margin-bottom: 30px;

    &__field-name {
      margin-bottom: 16px;
    }

    &__radio-list,
    &__radio-label {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    }

    &__radio-label {
      padding-left: 25px;
      padding-bottom: 20px;
      position: relative;
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
      color: $text-color--grey;
      font-family: 'Poppins-Regular', sans-serif;;
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
      position: absolute;
      top: 2px;
      left: 0;
      border-radius: 100%;
      border: 1px solid $border-color--grey;
    }
  }

  @media only screen and (max-width: 768px) {
		.radio-buttons {
      &__radio-label {
        &:last-child {
          padding-bottom: 20px;
        }
      }
    }
	}

  @media only screen and (max-width: 420px) {
    .radio-buttons {
      padding-bottom: 0;

      &__radio-list {
        flex-direction: column;
        align-items: flex-start;

        label {
          padding-bottom: 20px;
        }
      }

      &__field-name {
        padding-top: 20px;
      }
    }
  }
</style>
