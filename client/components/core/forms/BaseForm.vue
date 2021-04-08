<template>
  <div
    class="form"
    :class="className"
  >
    <div class="fields-list">
      <div class="modal-field-item field-item">
        <p
          v-if="useLabels"
          class="modal-field-name field-name"
          :class="fullnameRequired ? 'required' : ''"
        >
          Full Name
        </p>
        <input
          v-model="fullName"
          :class="{ invalid: $v.fullName.$error }"
          type="text"
          class="modal-entry-field entry-field"
          placeholder="John Smith"
          @input="$v.fullName.$touch"
        >
        <!-- Erros -->
        <div v-if="$v.fullName.$dirty">
          <span
            v-if="fullnameRequired && !$v.fullName.required"
            class="modal-error-text error-text"
          >This field is required.</span>
          <span
            v-if="!$v.fullName.maxLength"
            class="modal-error-text error-text"
          >
            Sorry, the number of characters in this field should not exceed 50.
          </span>
        </div>
        <!-- End Erros -->
      </div>
      <div
        v-if="useCompany"
        class="modal-field-item field-item"
      >
        <p
          v-if="useLabels"
          class="modal-field-name field-name required"
        >
          Company
        </p>
        <input
          v-model="company"
          :class="{ invalid: $v.company.$error }"
          type="text"
          class="modal-entry-field entry-field"
          placeholder="MyAwesomeCompany, Inc."
          @input="$v.company.$touch"
        >
        <!-- Erros -->
        <div v-if="$v.company.$dirty">
          <span
            v-if="!$v.company.required"
            class="modal-error-text error-text"
          >This field is required.</span>
          <span
            v-if="!$v.company.maxLength"
            class="modal-error-text error-text"
          >
            Sorry, the number of characters in this field should not exceed 300.
          </span>
        </div>
        <!-- End Erros -->
      </div>
      <div class="modal-field-item field-item">
        <p
          v-if="useLabels"
          class="modal-field-name field-name"
          :class="emailRequired ? 'required' : ''"
        >
          Work email
        </p>
        <div v-if="useLabels">
          <input
            v-model="email"
            :class="{ invalid: $v.email.$error }"
            type="text"
            placeholder="your@mail.com"
            class="modal-entry-field entry-field"
            @input="$v.email.$touch"
          >
        </div>
        <div
          v-else
          v-PlaceholderAsterisk="'your@mail.com'"
        >
          <input
            v-model="email"
            :class="{ invalid: $v.email.$error }"
            type="text"
            class="modal-entry-field entry-field"
            @input="$v.email.$touch"
          >
        </div>
        <!-- Erros -->
        <div v-if="$v.email.$dirty">
          <span
            v-if="emailRequired && !$v.email.required"
            class="modal-error-text error-text"
          >This field is required.</span>
          <span
            v-if="!$v.email.email"
            class="modal-error-text error-text"
          >
            Invalid email address. Please use your work email.
          </span>
        </div>
        <!-- End Erros -->
      </div>
      <div
        v-if="usePhone"
        class="modal-field-item field-item"
      >
        <p
          v-if="useLabels"
          class="modal-field-name field-name"
        >
          Phone number
        </p>
        <input
          :class="{ invalid: $v.phoneNumber.$error }"
          :value="phoneNumber"
          type="text"
          class="modal-entry-field entry-field"
          placeholder="+X XXX XXX-XXXX"
          @input="phoneChangeHandler"
        >
        <!-- Erros -->
        <div v-if="$v.phoneNumber.$dirty">
          <span
            v-if="!$v.phoneNumber.phone"
            class="modal-error-text error-text"
          >
            Sorry, this field can only contain numbers and characters specific for phone numbers.
          </span>
          <span
            v-if="!$v.phoneNumber.maxLength"
            class="modal-error-text error-text"
          >
            Sorry, the number of characters in this field should not exceed 50.
          </span>
        </div>
        <!-- End Erros -->
      </div>
      <div
        v-if="useDescription"
        class="modal-field-item field-item"
      >
        <p
          v-if="useLabels"
          class="modal-field-name field-name"
        >
          Project description
        </p>
        <textarea
          v-model="description"
          :class="{ invalid: $v.description.$error }"
          type="text"
          class="modal-entry-field entry-field textarea"
          placeholder="Describe your project..."
          @input="$v.description.$touch"
        />
        <!-- Erros -->
        <div v-if="$v.description.$dirty">
          <span
            v-if="!$v.description.maxLength"
            class="modal-error-text error-text"
          >
            Sorry, the number of characters in this field should not exceed 500.
          </span>
        </div>
        <!-- End Erros -->
      </div>
      <slot />
    </div>
    <UIFormCheckboxes
      :id="id"
      ref="checkboxes"
      @change="handleCheckboxesChange"
    />
    <UIButton
      :disabled="!isValid"
      :loading="isSubmitted"
      :class="buttonClassName"
      @click="handleSubmit"
    >
      {{ buttonLabel }}
    </UIButton>
  </div>
</template>

<script>
import { required, email, maxLength } from 'vuelidate/lib/validators'
import { phone } from '@/helpers/validators'
import UIFormCheckboxes from '@/components/shared/UIFormCheckboxes'
import UIButton from '@/components/shared/UIButton'
import phoneHandlerMixin from '@/mixins/phoneHandlerMixin'
import PlaceholderAsterisk from '@/directives/PlaceholderAsterisk'

export default {
  name: 'BaseForm',
  components: {
    UIFormCheckboxes,
    UIButton,
  },

  directives: {
    PlaceholderAsterisk,
  },

  mixins: [phoneHandlerMixin],

  validations() {
    const defaultFields = {
      fullName: {
        maxLength: maxLength(50),
      },

      email: {
        email,
      },

      validationGroup: ['fullName', 'email'],
    }

    if (this.fullnameRequired) defaultFields.fullName.required = required
    if (this.emailRequired) defaultFields.email.required = required

    if (this.usePhone) {
      defaultFields.phoneNumber = {
        phone,
        maxLength: maxLength(50),
      }
      defaultFields.validationGroup.push('phoneNumber')
    }

    if (this.useDescription) {
      defaultFields.description = {
        maxLength: maxLength(256),
      }
      defaultFields.validationGroup.push('description')
    }

    if (this.useCompany) {
      defaultFields.company = {
        required,
        maxLength: maxLength(256),
      }
      defaultFields.validationGroup.push('company')
    }

    return defaultFields
  },

  props: {
    buttonLabel: {
      type: String,
      default: 'Submit',
    },

    buttonClassName: {
      type: String,
      default: 'modal-button',
    },

    additionalValid: {
      type: Boolean,
      default: true,
    },

    className: {
      type: String,
      default: '',
    },

    id: {
      type: String,
      required: true,
    },

    usePhone: {
      type: Boolean,
      default: true,
    },

    useDescription: {
      type: Boolean,
      default: false,
    },

    useCompany: {
      type: Boolean,
      default: false,
    },

    useLabels: {
      type: Boolean,
      default: true,
    },

    fullnameRequired: {
      type: Boolean,
      default: true,
    },

    emailRequired: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {
      // phoneNumber from mixin
      fullName: '',
      email: '',
      description: '',
      company: '',
      agreeWithPrivacyPolicy: false,
      agreeToGetMadDevsDiscountOffers: false,
      isSubmitted: false,
    }
  },

  computed: {
    isValid() {
      return !this.$v.validationGroup.$invalid && this.agreeWithPrivacyPolicy && this.additionalValid
    },
  },

  methods: {
    handleCheckboxesChange({ privacy, discountOffers }) {
      this.agreeWithPrivacyPolicy = privacy
      this.agreeToGetMadDevsDiscountOffers = discountOffers
    },

    handleSubmit() {
      if (!this.isValid) return
      this.isSubmitted = true

      const formData = {
        fullName: this.fullName || '',
        email: this.email || '',
        agreeWithPrivacyPolicy: this.agreeWithPrivacyPolicy,
        agreeToGetMadDevsDiscountOffers: this.agreeToGetMadDevsDiscountOffers,
      }

      if (this.usePhone) formData.phoneNumber = this.phoneNumber
      if (this.useDescription) formData.description = this.description
      if (this.useCompany) formData.company = this.company

      this.$emit('submit', formData)
    },

    reset() {
      this.$refs.checkboxes.reset()
      this.$v.$reset()
      this.fullName = ''
      this.email = ''
      this.phoneNumber = ''
      this.description = ''
      this.company = ''
      this.agreeWithPrivacyPolicy = false
      this.agreeToGetMadDevsDiscountOffers = false
      this.isSubmitted = false
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/vars';

.form {
  /deep/ .v-placeholder-asterisk {
    font-size: 16px;
    font-family: 'Poppins-Regular', sans-serif;
    color: $text-color--grey-form-placeholder;
    left: 17px !important;
    top: 50% !important;
    transform: translateY(-50%);
  }
}
</style>
