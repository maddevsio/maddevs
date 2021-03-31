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
        <p class="modal-field-name field-name">Expertise you are interested in</p>
        <input
          v-model="interestedExpertise"
          type="text"
          class="modal-entry-field entry-field"
          placeholder="React development, Heroku Postgres, etc"
        />
      </div>
      <div class="modal-field-item field-item">
        <p class="modal-field-name field-name">Project description</p>
        <textarea
          v-model="projectDescription"
          :class="{ invalid: $v.projectDescription.$error }"
          type="text"
          class="modal-entry-field entry-field textarea"
          placeholder="Describe your project..."
          @input="$v.projectDescription.$touch"
        />
        <!-- Erros -->
        <div v-if="$v.projectDescription.$dirty">
          <span v-if="!$v.projectDescription.maxLength" class="modal-error-text error-text">
            Sorry, the number of characters in this field should not exceed 500.
          </span>
        </div>
        <!-- End Erros -->
      </div>
    </div>
    <UIFormCheckboxes :id="'individuals'" ref="checkboxes" @change="handleCheckboxesChange" />
    <UIButton
      :disabled="$v.validationGroup.$invalid || !agreeWithPrivacyPolicy || onSubmit"
      :loading="onSubmit"
      class="modal-button"
      @click="sendForm(!$v.validationGroup.$invalid || agreeWithPrivacyPolicy)"
    >
      Get individual proactive rockets
    </UIButton>
  </div>
</template>

<script>
import { required, email, maxLength } from 'vuelidate/lib/validators'
import { phone } from '@/helpers/validators'
import phoneHandlerMixin from '@/mixins/phoneHandlerMixin'
import UIFormCheckboxes from '@/components/shared/UIFormCheckboxes'
import UIButton from '@/components/shared/UIButton'

export default {
  name: 'FrontendModal',
  components: {
    UIFormCheckboxes,
    UIButton,
  },

  mixins: [phoneHandlerMixin],
  validations: {
    fullName: {
      required,
      maxLength: maxLength(50),
    },

    projectDescription: {
      maxLength: maxLength(500),
    },

    email: {
      required,
      email,
    },

    phoneNumber: {
      phone,
      maxLength: maxLength(50),
    },

    validationGroup: ['fullName', 'projectDescription', 'email', 'phoneNumber'],
  },

  data: () => ({
    modalName: 'individuals-modal',
    fullName: null,
    email: null,
    emailTo: process.env.emailContact,
    projectDescription: null,
    interestedExpertise: null,
    agreeWithPrivacyPolicy: false,
    agreeToGetMadDevsDiscountOffers: false,
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
    handleCheckboxesChange({ privacy, discountOffers }) {
      this.agreeWithPrivacyPolicy = privacy
      this.agreeToGetMadDevsDiscountOffers = discountOffers
    },

    sendForm(isValid) {
      if (isValid === true && !this.onSubmit) {
        this.onSubmit = true
        this.form = {
          templateId: 304625, // Required
          variables: {
            fullName: this.fullName || '',
            email: this.email || '',
            emailTo: this.emailTo || '',
            phoneNumber: this.phoneNumber || '',
            interestedExpertise: this.interestedExpertise || '',
            projectDescription: this.projectDescription || '',
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
      this.projectDescription = null
      this.interestedExpertise = null
      this.agreeWithPrivacyPolicy = false
      this.agreeToGetMadDevsDiscountOffers = false
    },
  },
}
</script>
