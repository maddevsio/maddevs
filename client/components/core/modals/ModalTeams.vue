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
          placeholder="+X XXX XXX-XXXX"
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
      <RadioList :id="'teams'" label="Expected team size" :options="options" :required="true" @select="getTeamSize" />
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
    <UIFormCheckboxes :id="'teams'" ref="checkboxes" @change="handleCheckboxesChange" />
    <UIButton
      :disabled="$v.validationGroup.$invalid || !agreeWithPrivacyPolicy || !selectedTeamSize || onSubmit"
      :loading="onSubmit"
      class="modal-button"
      @click="sendForm(!$v.validationGroup.$invalid || agreeWithPrivacyPolicy || selectedTeamSize)"
    >
      Get a team of ultra fast coders
    </UIButton>
  </div>
</template>

<script>
import { required, email, maxLength } from 'vuelidate/lib/validators'
import { phone } from '@/helpers/validators'
import phoneHandlerMixin from '@/mixins/phoneHandlerMixin'
import UIFormCheckboxes from '@/components/shared/UIFormCheckboxes'
import RadioList from '@/components/shared/UIRadioList'
import UIButton from '@/components/shared/UIButton'

export default {
  name: 'ModalTeams',
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

    validationGroup: ['fullName', 'email', 'phoneNumber', 'projectDescription'],
  },

  data: () => ({
    form: null,
    fullName: null,
    email: null,
    emailTo: process.env.emailContact,
    selectedTeamSize: null,
    projectDescription: null,
    agreeWithPrivacyPolicy: false,
    agreeToGetMadDevsDiscountOffers: false,
    options: [
      {
        value: 'less-five',
        label: 'Less than 5',
      },
      {
        value: 'from-five-to-ten',
        label: 'From 5 to 10',
      },
      {
        value: 'more-than-ten',
        label: 'More than 10',
      },
    ],

    onSubmit: false,
    subject: 'Marketing',
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

    getTeamSize(teamSize) {
      this.selectedTeamSize = teamSize
    },

    sendForm(isValid) {
      if (isValid === true && !this.onSubmit) {
        this.onSubmit = true
        this.form = {
          templateId: 304637, // Required
          variables: {
            fullName: this.fullName || '',
            selectedTeamSize: this.selectedTeamSize ? this.selectedTeamSize.label || '' : '',
            projectDescription: this.projectDescription || '',
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
      this.selectedTeamSize = null
      this.projectDescription = null
      this.form = null
      this.agreeWithPrivacyPolicy = false
      this.agreeToGetMadDevsDiscountOffers = false
    },
  },
}
</script>
