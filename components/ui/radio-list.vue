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
    padding-bottom: 16px;

    &__field-name {
      padding-bottom: 16px;
    }

    &__radio-list,
    &__radio-label {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__radio-label {
      padding-left: 25px;
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
          }

          p {
            color: $text-color--red;
          }
        }
      }
    }

    &__radio-text_item {
      color: $text-color--grey;
      font-family: 'Hoves-Regular';
      font-size: 18px;
      letter-spacing: -0.03em;
    }

    &__radio-input {
      display: none;
    }

    &__checkmark-radio {
      width: 18px;
      height: 18px;
      display: block;
      position: absolute;
      top: 3px;
      left: 0;
      border-radius: 100%;
      background-color: $input-checkmark-bg;
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
