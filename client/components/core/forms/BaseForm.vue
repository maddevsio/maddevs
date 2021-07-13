<template>
  <div
    class="form"
    :class="className"
  >
    <div class="fields-list">
      <BaseInput
        v-model="fullName"
        name="fullName"
        :show-label="useLabels"
        label="Full Name"
        placeholder="John Smith"
        :required="fullnameRequired"
        :validation="$v.fullName"
      />
      <BaseInput
        v-if="useCompany"
        v-model="company"
        name="company"
        :show-label="useLabels"
        label="Company"
        placeholder="My Awesome Company, Inc."
        :required="true"
        :validation="$v.company"
      />
      <BaseInput
        v-model="email"
        name="email"
        :show-label="useLabels"
        label="Work Email"
        placeholder="your@mail.com"
        :required="emailRequired"
        :validation="$v.email"
      />
      <BaseInput
        v-if="usePhone"
        name="phoneNumber"
        :value="phoneNumber"
        :show-label="useLabels"
        label="Phone Number"
        placeholder="Phone number"
        :required="false"
        :validation="$v.phoneNumber"
        @input="phoneChangeHandler"
      />
      <BaseInput
        v-if="useDescription"
        v-model="description"
        name="description"
        :show-label="useLabels"
        label="Project description"
        placeholder="Describe your project..."
        :required="false"
        :validation="$v.description"
        element-type="textarea"
      />
      <slot />
    </div>
    <UIFormCheckboxes
      :id="id"
      ref="checkboxes"
      @change="handleCheckboxesChange"
    />
    <UIButton
      :disabled="!isValid || isSubmitted"
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
import BaseInput from '@/components/core/forms/BaseInput'
import UIFormCheckboxes from '@/components/shared/UIFormCheckboxes'
import UIButton from '@/components/shared/UIButton'
import phoneHandlerMixin from '@/mixins/phoneHandlerMixin'

export default {
  name: 'BaseForm',
  components: {
    BaseInput,
    UIFormCheckboxes,
    UIButton,
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
.form {
  /deep/ .v-placeholder-asterisk {
    @include font('Inter', 16px, 400);
    padding-left: 4px;
    padding-bottom: 2px;
    letter-spacing: -0.013em;
    color: $text-color--grey-pale;
    left: 17px !important;
    top: 50% !important;
    transform: translateY(-50%);
  }
}
</style>
