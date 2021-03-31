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
        :id="'infrastructure-audit'"
        label="Where is your project hosted?"
        :options="options"
        :required="false"
        @select="getSelectedProjectHost"
      />
    </div>
    <UIFormCheckboxes :id="'infrastructure-audit'" ref="checkboxes" @change="handleCheckboxesChange" />
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
import UIFormCheckboxes from '@/components/shared/UIFormCheckboxes'
import RadioList from '@/components/shared/UIRadioList'
import UIButton from '@/components/shared/UIButton'
import phoneHandlerMixin from '@/mixins/phoneHandlerMixin'

export default {
  name: 'InfrastructureAudit',
  components: {
    UIFormCheckboxes,
    RadioList,
    UIButton,
  },

  mixins: [phoneHandlerMixin],
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
    fullName: null,
    email: null,
    emailTo: process.env.emailContact,
    interesteMobileExpertise: null,
    selectedProjectHost: null,
    company: null,
    agreeWithPrivacyPolicy: false,
    agreeToGetMadDevsDiscountOffers: false,
    options: [
      {
        value: 'on-premises',
        label: 'On-premises',
      },
      {
        value: 'amazon',
        label: 'Amazon Web Services',
      },
      {
        value: 'google-cloud',
        label: 'Google Cloud Platform',
      },
      {
        value: 'microsoft-azure',
        label: 'Microsoft Azure',
      },
      {
        value: 'heroku',
        label: 'Heroku',
      },
      {
        value: 'digital-ocean',
        label: 'Digital Ocean',
      },
      {
        value: 'other',
        label: 'Other',
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
    handleCheckboxesChange({ privacy, discountOffers }) {
      this.agreeWithPrivacyPolicy = privacy
      this.agreeToGetMadDevsDiscountOffers = discountOffers
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
            selectedProjectHost: this.selectedProjectHost ? this.selectedProjectHost.label || '' : '',
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
