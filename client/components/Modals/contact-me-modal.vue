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
        <p class="modal-field-name field-name">Company</p>
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
          <span v-if="!$v.company.maxLength" class="modal-error-text error-text">
            Sorry, the number of characters in this field should not exceed 300.
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
        </div>
        <!-- End Erros -->
      </div>
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
      Сontact Me
    </UIButton>
  </div>
</template>

<script>
import { required, email, maxLength } from 'vuelidate/lib/validators'
import { phone } from '@/helpers/validators'
import FormCheckboxes from '@/components/ui/form-checkboxes'
import UIButton from '@/components/ui/UIButton'
import { phoneHandler } from '@/mixins/phoneHandler'

export default {
  name: 'ContactMe',
  components: {
    FormCheckboxes,
    UIButton,
  },

  mixins: [phoneHandler],
  validations: {
    fullName: {
      required,
      maxLength: maxLength(50),
    },

    company: {
      maxLength: maxLength(300),
    },

    email: {
      required,
      email,
    },

    phoneNumber: {
      phone,
    },

    validationGroup: ['fullName', 'company', 'email', 'phoneNumber'],
  },

  data: () => ({
    modalName: 'contact-me-modal',
    fullName: null,
    email: null,
    emailTo: process.env.emailContact,
    company: null,
    agreeWithPrivacyPolicy: false,
    agreeToGetMadDevsDiscountOffers: false,
    inputId: 'contact-me',
    onSubmit: false,
    subject: 'Marketing',
    form: null,
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

    createLead() {
      const data = [
        {
          name: this.fullName,
          custom_fields_values: [
            { field_id: 261281, values: [{ value: this.email }] }, // Email
            { field_id: 261331, values: [{ value: this.company }] }, // Company
            { field_id: 261333, values: [{ value: this.phoneNumber }] }, // Phone
          ],
        },
      ]
      this.$store.dispatch('createNewLead', data)
    },

    sendForm(isValid) {
      if (isValid === true && !this.onSubmit) {
        this.onSubmit = true
        this.form = {
          templateId: 303792, // Required
          variables: {
            fullName: this.fullName || '',
            company: this.company || '',
            email: this.email || '',
            emailTo: this.emailTo || '',
            phoneNumber: this.phoneNumber || '',
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
            // this.createLead();
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
      this.company = null
      this.agreeWithPrivacyPolicy = false
      this.agreeToGetMadDevsDiscountOffers = false
    },
  },
}
</script>
