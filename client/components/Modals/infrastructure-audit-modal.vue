<template>
  <div class="form"> 
    <div class="fields-list">
      <div class="modal-field-item field-item">
        <p class="modal-field-name field-name required">Full Name</p>
        <input @input="$v.fullName.$touch" type="text" class="modal-entry-field entry-field" placeholder="John Smith" v-model="fullName">
        <!-- Erros -->
        <div v-if="$v.fullName.$dirty">
          <span class="modal-error-text error-text" v-if="!$v.fullName.required">This field is required.</span>
          <span class="modal-error-text error-text" v-if="!$v.fullName.maxLength">
            Sorry, the number of characters in this field should not exceed 50.
          </span>
        </div>
        <!-- End Erros -->
      </div>
      <div class="modal-field-item field-item">
        <p class="modal-field-name field-name required">Work email</p>
        <input @input="$v.email.$touch" type="text" class="modal-entry-field entry-field" placeholder="your@mail.com" v-model="email">
        <!-- Erros -->
        <div v-if="$v.email.$dirty">
          <span class="modal-error-text error-text" v-if="!$v.email.required">This field is required.</span>
          <span class="modal-error-text error-text" v-if="!$v.email.email">
            Invalid email address. Please use your work email.
          </span>
        </div>
        <!-- End Erros -->
      </div>
      <div class="modal-field-item field-item">
        <p class="modal-field-name field-name">Phone number</p>
        <input @input="$v.phoneNumber.$touch" type="text" class="modal-entry-field entry-field" placeholder="+1 23X XXX-XXXX" v-model="phoneNumber">
        <!-- Erros -->
        <div v-if="$v.phoneNumber.$dirty">
          <span class="modal-error-text error-text" v-if="!$v.phoneNumber.required">This field is required.</span>
          <span class="modal-error-text error-text" v-if="!$v.phoneNumber.maxLength">
            Sorry, the number of characters in this field should not exceed 50.
          </span>
        </div>
        <!-- End Erros -->
      </div>
      <div class="modal-field-item field-item">
        <p class="modal-field-name field-name required">Company</p>
        <input @input="$v.company.$touch" type="text" class="modal-entry-field entry-field" placeholder="MyAwesomeCompany, Inc." v-model="company">
        <!-- Erros -->
        <div v-if="$v.company.$dirty">
          <span class="modal-error-text error-text" v-if="!$v.company.required">This field is required.</span>
          <span class="modal-error-text error-text" v-if="!$v.company.maxLength">
            Sorry, the number of characters in this field should not exceed 300.
          </span>
        </div>
        <!-- End Erros -->
      </div>
      <RadioList 
        @getSelectedProjectHost="getSelectedProjectHost"
        :inputId="inputId"
        :fieldName="fieldName"
        :emitMethodName="emitMethodName"
        :options="options"
        :sectionIsRequired="sectionIsRequired"
      />
    </div>
    <FormCheckboxes
      ref="checkboxes"
      @getPrivacyCheckboxState="getPrivacyCheckboxState"
      @getDiscountOffersCheckboxState="getDiscountOffersCheckboxState"
      :inputId="inputId"
    />
    <UIButton
      :disabled="invalid || !agreeWithPrivacyPolicy || onSubmit"
      @click="sendForm(!invalid || agreeWithPrivacyPolicy)"
      class="modal-button"
      :loading="onSubmit"
    >
      Get an infrastructure audit
    </UIButton>
  </div>
</template>

<script>
import { required, email, maxLength } from 'vuelidate/lib/validators';
import { phone } from '@/helpers/validators';
import FormCheckboxes from '@/components/ui/form-checkboxes';
import RadioList from '@/components/ui/radio-list';
import UIButton from '@/components/ui/UIButton';

export default {
  name: 'infrastructure-audit',
  components: {
    FormCheckboxes,
    RadioList,
    UIButton
  },
  validations: {
    fullName: {
      required,
      maxLength: maxLength(50)
    },
    company: {
      required,
      maxLength: maxLength(300)
    },
    email: {
      required,
      email
    },
    phoneNumber: {
      phone,
      maxLength: maxLength(50)
    },
    validationGroup: ['fullName', 'company', 'email', 'phoneNumber']
  },
  data: () => ({
    modalName: 'infrastructure-modal',
    fullName: null,
    email: null,
    emailTo: 'team@maddevs.io',
    phoneNumber: null,
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
        text: 'On-premises'
      },
      {
        id: 'amazon',
        text: 'Amazon Web Services'
      },
      {
        id: 'google-cloud',
        text: 'Google Cloud Platform'
      },
      {
        id: 'microsoft-azure',
        text: 'Microsoft Azure'
      },
      {
        id: 'heroku',
        text: 'Heroku'
      },
      {
        id: 'digital-ocean',
        text: 'Digital Ocean'
      },
      {
        id: 'other',
        text: 'Other'
      }
    ],
    onSubmit: false,
    subject: 'Marketing',
    form: '',
    modalTitle: 'Mad Devs Website Forms'
  }),
  mounted() {
    this.$nuxt.$on('resetCheckboxesInForm', () => { // Reset checkboxes in form if user close modal 
      this.agreeWithPrivacyPolicy = false;
      this.agreeToGetMadDevsDiscountOffers = false;
    });
  },
  methods: {
    getPrivacyCheckboxState(privacyState) {
      this.agreeWithPrivacyPolicy = privacyState;
    },
    getDiscountOffersCheckboxState(discountOffersState) {
      this.agreeToGetMadDevsDiscountOffers = discountOffersState;
    },
    getSelectedProjectHost(projectHost) {
      this.selectedProjectHost = projectHost;
    },
    sendForm(isValid) {
      if (isValid === true && !this.onSubmit) {
        this.onSubmit = true;
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
            modalTitle: this.modalTitle
          }
        };
        this.$store.dispatch('sendEmail', this.form).then(res => {
          this.onSubmit = false;
          this.resetForm();
          if (res.status === 200) {
            this.$nuxt.$emit(this.modalName, true);
          } else {
            this.$nuxt.$emit(this.modalName, false);
          }
        });
      }
    },
    resetForm() {
      this.$refs.checkboxes.reset();
      this.fullName = null;
      this.email = null;
      this.phoneNumber = null;
      this.interesteMobileExpertise = null;
      this.selectedProjectHost = null;
      this.company = null;
      this.agreeWithPrivacyPolicy = false;
      this.agreeToGetMadDevsDiscountOffers = false;
    }
  }
};
</script>
