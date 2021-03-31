<template>
  <div class="form">
    <div class="fields-list">
      <div class="modal-field-item field-item">
        <p class="modal-field-name field-name required">
          Full Name
        </p>
        <input
          v-model="fullname"
          type="text"
          :class="{ invalid: $v.fullname.$error }"
          class="modal-entry-field entry-field"
          placeholder="John Smith"
          @input="$v.fullname.$touch"
        >
        <!-- Erros -->
        <div v-if="$v.fullname.$dirty">
          <span
            v-if="!$v.fullname.required"
            class="modal-error-text error-text"
          >This field is required.</span>
          <span
            v-if="!$v.fullname.maxLength"
            class="modal-error-text error-text"
          >
            Sorry, the number of characters in this field should not exceed 50.
          </span>
        </div>
        <!-- End Erros -->
      </div>
      <div class="modal-field-item field-item">
        <p class="modal-field-name field-name">
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
            v-if="!$v.company.maxLength"
            class="modal-error-text error-text"
          >
            Sorry, the number of characters in this field should not exceed 300.
          </span>
        </div>
        <!-- End Erros -->
      </div>
      <div class="modal-field-item field-item">
        <p class="modal-field-name field-name required">
          Work email
        </p>
        <input
          v-model="email"
          :class="{ invalid: $v.email.$error }"
          type="text"
          class="modal-entry-field entry-field"
          placeholder="your@mail.com"
          @input="$v.email.$touch"
        >
        <!-- Erros -->
        <div v-if="$v.email.$dirty">
          <span
            v-if="!$v.email.required"
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
      <div class="modal-field-item field-item">
        <p class="modal-field-name field-name">
          Phone number
        </p>
        <input
          v-model="phoneNumber"
          type="text"
          :class="{ invalid: $v.phoneNumber.$error }"
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
        </div>
        <!-- End Erros -->
      </div>
    </div>
    <UIFormCheckboxes
      :id="'contact-me'"
      ref="checkboxes"
      @change="handleCheckboxesChange"
      @getPrivacyCheckboxState="agreeWithPrivacyPolicy = $event"
      @getDiscountOffersCheckboxState="agreeToGetMadDevsDiscountOffers = $event"
    />
    <UIButton
      class="modal-button"
      :disabled="$v.validationGroup.$invalid || !agreeWithPrivacyPolicy"
      @click="submitForm(!$v.validationGroup.$invalid || agreeWithPrivacyPolicy)"
    >
      Сontact Me
    </UIButton>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { required, email, maxLength } from 'vuelidate/lib/validators'
import { phone } from '@/helpers/validators'
import UIFormCheckboxes from '@/components/shared/UIFormCheckboxes'
import UIButton from '@/components/shared/UIButton'
import phoneHandlerMixin from '@/mixins/phoneHandlerMixin'

export default {
  name: 'ModalContactMe',
  components: {
    UIFormCheckboxes,
    UIButton,
  },

  mixins: [phoneHandlerMixin],
  validations: {
    fullname: {
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

    validationGroup: ['fullname', 'company', 'email', 'phoneNumber'],
  },

  data: () => ({
    fullname: '',
    email: '',
    phoneNumber: '',
    company: '',
    agreeWithPrivacyPolicy: false,
    agreeToGetMadDevsDiscountOffers: false,
  }),

  mounted() {
    this.$nuxt.$on('resetCheckboxesInForm', () => {
      // Reset checkboxes in form if user close modal
      this.agreeWithPrivacyPolicy = false
      this.agreeToGetMadDevsDiscountOffers = false
    })
  },

  methods: {
    ...mapActions(['sendEmail', 'createNewLead']),

    submitForm(isValid) {
      if (!isValid) return

      const lead = {
        fullname: this.fullname,
        email: this.email || '',
        company: this.company,
        phone: this.phoneNumber || '',
        type: 'contact-me',
      }

      const emailToSent = {
        templateId: 303792,
        variables: {
          fullName: this.fullname || '',
          email: this.email || '',
          company: this.company || '',
          phoneNumber: this.phoneNumber || '',
          emailTo: process.env.emailContact,
          agreeWithPrivacyPolicy: this.agreeWithPrivacyPolicy ? 'Yes' : 'No',
          agreeToGetMadDevsDiscountOffers: this.agreeToGetMadDevsDiscountOffers ? 'Yes' : 'No',
          subject: 'Marketing',
          modalTitle: 'Mad Devs Website Form',
        },
      }

      this.createNewLead(lead)
      this.sendEmail(emailToSent)

      this.resetForm()
      this.$parent.$emit('success')
    },

    resetForm() {
      this.$refs.checkboxes.reset()
      this.fullname = ''
      this.email = ''
      this.phoneNumber = ''
      this.company = ''
      this.agreeWithPrivacyPolicy = false
      this.agreeToGetMadDevsDiscountOffers = false
    },

    handleCheckboxesChange({ privacy, discountOffers }) {
      this.agreeWithPrivacyPolicy = privacy
      this.agreeToGetMadDevsDiscountOffers = discountOffers
    },
  },
}
</script>
