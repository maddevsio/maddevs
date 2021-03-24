<template>
  <div class="form">
    <div class="fields-list">
      <div class="modal-field-item field-item">
        <p class="modal-field-name field-name required">Full Name</p>
        <input
          v-model="fullName"
          :class="{ invalid: $v.fullName.$error }"
          type="text"
          class="modal-entry-field entry-field"
          placeholder="John Smith"
          @input="$v.fullName.$touch"
        />
        <!-- Erros -->
        <div v-if="$v.fullName.$dirty">
          <span v-if="!$v.fullName.required" class="modal-error-text error-text">This field is required.</span>
          <span v-if="!$v.fullName.maxLength" class="modal-error-text error-text">
            Sorry, the number of characters in this field should not exceed 50.
          </span>
        </div>
        <!-- End Erros -->
      </div>
      <div class="modal-field-item field-item">
        <p class="modal-field-name field-name required">Work email</p>
        <input
          v-model="email"
          :class="{ invalid: $v.email.$error }"
          type="text"
          class="modal-entry-field entry-field"
          placeholder="your@mail.com"
          @input="$v.email.$touch"
        />
        <!-- Erros -->
        <div v-if="$v.email.$dirty">
          <span v-if="!$v.email.required" class="modal-error-text error-text">This field is required.</span>
          <span v-if="!$v.email.email" class="modal-error-text error-text">
            Invalid email address. Please use your work email.
          </span>
        </div>
        <!-- End Erros -->
      </div>
      <div class="modal-field-item field-item">
        <p class="modal-field-name field-name">Phone number</p>
        <input
          :class="{ invalid: $v.phoneNumber.$error }"
          :value="phoneNumber"
          type="text"
          class="modal-entry-field entry-field"
          placeholder="+1 23X XXX-XXXX"
          @input="phoneChangeHandler"
        />
        <!-- Erros -->
        <div v-if="$v.phoneNumber.$dirty">
          <span v-if="!$v.phoneNumber.phone" class="modal-error-text error-text">
            Sorry, this field can only contain numbers and characters specific for phone numbers.
          </span>
          <span v-if="!$v.phoneNumber.maxLength" class="modal-error-text error-text">
            Sorry, the number of characters in this field should not exceed 50.
          </span>
        </div>
        <!-- End Erros -->
      </div>
      <div class="modal-field-item field-item">
        <p class="modal-field-name field-name required">Company</p>
        <input
          v-model="company"
          :class="{ invalid: $v.company.$error }"
          type="text"
          class="modal-entry-field entry-field"
          placeholder="MyAwesomeCompany, Inc."
          @input="$v.company.$touch"
        />
        <!-- Erros -->
        <div v-if="$v.company.$dirty">
          <span v-if="!$v.company.required" class="modal-error-text error-text">This field is required.</span>
          <span v-if="!$v.company.maxLength" class="modal-error-text error-text">
            Sorry, the number of characters in this field should not exceed 300.
          </span>
        </div>
        <!-- End Erros -->
      </div>
      <RadioList
        :input-id="inputId"
        :field-name="fieldName"
        :emit-method-name="emitMethodName"
        :options="options"
        :section-is-required="sectionIsRequired"
        @getSelectedProjectHost="getSelectedProjectHost"
      />
    </div>
    <FormCheckboxes
      ref="checkboxes"
      :input-id="inputId"
      @getPrivacyCheckboxState="getPrivacyCheckboxState"
      @getDiscountOffersCheckboxState="getDiscountOffersCheckboxState"
    />
    <UIButton
      :disabled="$v.validationGroup.$invalid || !agreeWithPrivacyPolicy || onSubmit"
      :loading="onSubmit"
      class="modal-button"
      @click="sendForm(!$v.validationGroup.$invalid || agreeWithPrivacyPolicy)"
    >
      Get an infrastructure audit
    </UIButton>
  </div>
</template>

<script>
import { required, email, maxLength } from 'vuelidate/lib/validators'
import { phone } from '@/helpers/validators'
import FormCheckboxes from '@/components/ui/form-checkboxes'
import RadioList from '@/components/ui/radio-list'
import UIButton from '@/components/ui/UIButton'
import { phoneHandler } from '@/mixins/phoneHandler'

export default {
  name: 'InfrastructureAudit',
  components: {
    FormCheckboxes,
    RadioList,
    UIButton,
  },

  mixins: [phoneHandler],
  validations: {
    fullName: {
      required,
      maxLength: maxLength(50),
    },

    company: {
      required,
      maxLength: maxLength(300),
    },

    email: {
      required,
      email,
    },

    phoneNumber: {
      phone,
      maxLength: maxLength(50),
    },

    validationGroup: ['fullName', 'company', 'email', 'phoneNumber'],
  },

  data: () => ({
    modalName: 'infrastructure-modal',
    fullName: null,
    email: null,
    emailTo: process.env.emailContact,
    interesteMobileExpertise: null,
    selectedProjectHost: null,
    company: null,
    agreeWithPrivacyPolicy: false,
    agreeToGetMadDevsDiscountOffers: false,
    sectionIsRequired: false,
    inputId: 'infrastructure-audit',
    fieldName: 'Where is your project hosted?',
    emitMethodName: 'getSelectedProjectHost',
    options: [
      {
        id: 'on-premises',
        text: 'On-premises',
      },
      {
        id: 'amazon',
        text: 'Amazon Web Services',
      },
      {
        id: 'google-cloud',
        text: 'Google Cloud Platform',
      },
      {
        id: 'microsoft-azure',
        text: 'Microsoft Azure',
      },
      {
        id: 'heroku',
        text: 'Heroku',
      },
      {
        id: 'digital-ocean',
        text: 'Digital Ocean',
      },
      {
        id: 'other',
        text: 'Other',
      },
    ],

    onSubmit: false,
    subject: 'Marketing',
    form: '',
    modalTitle: 'Mad Devs Website Forms',
  }),

  mounted() {
    this.$nuxt.$on('resetCheckboxesInForm', () => {
      // Reset checkboxes in form if user close modal
      this.agreeWithPrivacyPolicy = false
      this.agreeToGetMadDevsDiscountOffers = false
    })
  },

  methods: {
    getPrivacyCheckboxState(privacyState) {
      this.agreeWithPrivacyPolicy = privacyState
    },

    getDiscountOffersCheckboxState(discountOffersState) {
      this.agreeToGetMadDevsDiscountOffers = discountOffersState
    },

    getSelectedProjectHost(projectHost) {
      this.selectedProjectHost = projectHost
    },

    sendForm(isValid) {
      if (isValid === true && !this.onSubmit) {
        this.onSubmit = true
        this.form = {
          templateId: 304628, // Required
          variables: {
            fullName: this.fullName || '',
            company: this.company || '',
            email: this.email || '',
            emailTo: this.emailTo || '',
            phoneNumber: this.phoneNumber || '',
            selectedProjectHost: this.selectedProjectHost || '',
            agreeWithPrivacyPolicy: this.agreeWithPrivacyPolicy ? 'Yes' : 'No',
            agreeToGetMadDevsDiscountOffers: this.agreeToGetMadDevsDiscountOffers ? 'Yes' : 'No',
            subject: this.subject || '',
            modalTitle: this.modalTitle,
          },
        }
        this.$store
          .dispatch('sendEmail', this.form)
          .then(res => {
            this.onSubmit = false
            this.resetForm()
            if (res.status === 200) {
              this.$parent.$emit('success')
            }
          })
          .catch(() => {
            this.onSubmit = true
          })
      }
    },

    resetForm() {
      this.$refs.checkboxes.reset()
      this.fullName = null
      this.email = null
      this.phoneNumber = null
      this.interesteMobileExpertise = null
      this.selectedProjectHost = null
      this.company = null
      this.agreeWithPrivacyPolicy = false
      this.agreeToGetMadDevsDiscountOffers = false
    },
  },
}
</script>
