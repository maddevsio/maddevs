<template>
  <div class="modal-field-item field-item">
    <p
      v-if="showLabel"
      class="modal-field-name field-name"
      :class="required ? 'required' : ''"
    >
      {{ label }}
    </p>
    <div v-if="showLabel">
      <input
        v-if="elementType === 'input'"
        data-testid="test-base-form-full-name"
        class="modal-entry-field entry-field"
        :value="value"
        :class="{ invalid: validation.$error }"
        :type="type"
        :placeholder="placeholder"
        @input="updateValue($event)"
      >
      <textarea
        v-if="elementType === 'textarea'"
        data-testid="test-base-form-description"
        class="modal-entry-field entry-field textarea"
        :value="value"
        :class="{ invalid: validation.$error }"
        :placeholder="placeholder"
        @input="updateValue($event)"
      />
    </div>
    <div
      v-else-if="required"
      v-PlaceholderAsterisk="placeholder"
    >
      <input
        v-if="elementType === 'input'"
        data-testid="test-base-form-full-name"
        class="modal-entry-field entry-field"
        :value="value"
        :class="{ invalid: validation.$error }"
        :type="type"
        @input="updateValue($event)"
      >
    </div>
    <div
      v-else
    >
      <input
        v-if="elementType === 'input'"
        data-testid="test-base-form-full-name"
        class="modal-entry-field entry-field"
        :placeholder="placeholder"
        :value="value"
        :class="{ invalid: validation.$error }"
        :type="type"
        @input="updateValue($event)"
      >
      <textarea
        v-if="elementType === 'textarea'"
        data-testid="test-base-form-description"
        class="modal-entry-field entry-field textarea"
        :placeholder="placeholder"
        :value="value"
        :class="{ invalid: validation.$error }"
        @input="updateValue($event)"
      />
    </div>
    <!-- Erros -->
    <div v-if="validation.$dirty">
      <div
        v-for="([key, data]) in Object.entries(validation.$params)"
        :key="key"
      >
        <span
          v-if="!validation[key]"
          class="modal-error-text error-text"
        >
          {{ getErrorMessage({ type: key, data }) }}
        </span>
      </div>
    </div>
    <!-- End Erros -->
  </div>
</template>

<script>
import PlaceholderAsterisk from '@/directives/PlaceholderAsterisk'

export default {
  name: 'BaseInput',

  directives: {
    PlaceholderAsterisk,
  },

  props: {
    elementType: {
      type: String,
      default: 'input',
    },

    showLabel: {
      type: Boolean,
      default: true,
    },

    label: {
      type: String,
      default: 'Label',
    },

    placeholder: {
      type: String,
      default: 'Placeholder',
    },

    required: {
      type: Boolean,
      default: false,
    },

    type: {
      type: String,
      default: 'text',
    },

    validation: {
      type: Object,
      default: () => ({}),
    },

    value: {
      type: String,
      required: true,
    },
  },

  methods: {
    updateValue(event) {
      this.$emit('input', event.target.value, event)
      if (this.validation.$touch) this.validation.$touch()
    },

    getErrorMessage({ type, data }) {
      const errors = {
        required: 'This field is required.',
        email: 'Invalid email address. Please use your work email.',
        maxLength: `Sorry, the number of characters in this field should not exceed ${data ? data.max : 50}.`,
        phone: 'Sorry, this field can only contain numbers and characters specific for phone numbers.',
      }

      return errors[type]
    },
  },
}
</script>
