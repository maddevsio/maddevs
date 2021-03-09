<template>
  <div class="form technology-stack"> 
    <div class="fields-list">
      <div class="modal-field-item field-item">
        <p class="modal-field-name field-name required">Full Name</p>
        <input @input="$v.fullName.$touch" type="text" :class="{ 'invalid': $v.fullName.$error }" class="modal-entry-field entry-field" placeholder="John Smith" v-model="fullName">
        <!-- Erros -->
        <div v-if="$v.fullName.$dirty">
          <span class="modal-error-text error-text" v-if="!$v.fullName.required">This field is required.</span>
          <span class="modal-error-text error-text" v-if="!$v.fullName.maxLength">
            Sorry, the number of characters in this field should not exceed 50.
          </span>
        </div>
        <!-- End Errors -->
      </div>
      <div class="modal-field-item field-item">
        <p class="modal-field-name field-name required">Work email</p>
        <input @input="$v.email.$touch" type="text" :class="{ 'invalid': $v.email.$error }" class="modal-entry-field entry-field" placeholder="your@mail.com" v-model="email">
        <!-- Erros -->
        <div v-if="$v.email.$dirty">
          <span class="modal-error-text error-text" v-if="!$v.email.required">This field is required.</span>
          <span class="modal-error-text error-text" v-if="!$v.email.email">
            Invalid email address. Please use your work email.
          </span>
        </div>
        <!-- End Errors -->
      </div>
      <div class="modal-field-item field-item">
        <p class="modal-field-name field-name">Phone number</p>
        <input @input="$v.phoneNumber.$touch" type="text" :class="{ 'invalid': $v.phoneNumber.$error }" class="modal-entry-field entry-field" placeholder="+1 23X XXX-XXXX" v-model="phoneNumber">
        <!-- Erros -->
        <div v-if="$v.phoneNumber.$dirty">
          <span class="modal-error-text error-text" v-if="!$v.phoneNumber.maxLength">
            Sorry, the number of characters in this field should not exceed 50.
          </span>
          <span class="modal-error-text error-text" v-if="!$v.phoneNumber.phone">
            Sorry, this field can only contain numbers and characters specific for phone numbers.
          </span>
        </div>
        <!-- End Errors -->
      </div>
      <div class="modal-field-item field-item">
        <p class="modal-field-name field-name">Your questions on IT consulting​</p>
        <textarea @input="$v.questionsOnItConsulting.$touch" type="text" :class="{ 'invalid': $v.questionsOnItConsulting.$error }" class="modal-entry-field entry-field textarea" placeholder="Tell us how we can help you…" v-model="questionsOnItConsulting"/>
        <!-- Erros -->
        <div v-if="$v.questionsOnItConsulting.$dirty">
          <span class="modal-error-text error-text" v-if="!$v.questionsOnItConsulting.maxLength">
            Sorry, the number of characters in this field should not exceed 500.
          </span>
        </div>
        <!-- End Errors -->
      </div>
    </div>
    <FormCheckboxes
      ref="checkboxes"
      @getPrivacyCheckboxState="getPrivacyCheckboxState"
      @getDiscountOffersCheckboxState="getDiscountOffersCheckboxState"
      :inputId="inputId"
    />
    <UIButton
      :disabled="$v.validationGroup.$invalid || !agreeWithPrivacyPolicy || onSubmit"
      @click="sendForm(!$v.validationGroup.$invalid || agreeWithPrivacyPolicy)"
      class="modal-button"
      :loading="onSubmit"
    >
      Get expert advice
    </UIButton>
  </div>
</template>

<script>
import { required, email, maxLength } from 'vuelidate/lib/validators';
import { phone } from '@/helpers/validators';
import FormCheckboxes from '@/components/ui/form-checkboxes';
import UIButton from '@/components/ui/UIButton';

export default {
  name: 'GetExpertAdvice',
  components: {
    FormCheckboxes,
    UIButton
  },
  validations: {
    fullName: {
      required,
      maxLength: maxLength(50)
    },
    email: {
      required,
      email
    },
    phoneNumber: {
      phone,
      maxLength: maxLength(50)
    },
    questionsOnItConsulting: {
      maxLength: maxLength(500)
    },
    validationGroup: ['fullName', 'email', 'phoneNumber', 'questionsOnItConsulting']
  },
  data: () => ({
    modalName: 'get-expert-advice',
    fullName: null,
    email: null,
    emailTo: 'team@maddevs.io',
    phoneNumber: null,
    questionsOnItConsulting: null,
    agreeWithPrivacyPolicy: false,
    agreeToGetMadDevsDiscountOffers: false,
    inputId: 'get-expert-advice',
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
    sendForm(isValid) {
      if (isValid === true && !this.onSubmit) {
        this.onSubmit = true;
        this.form = {
          templateId: 304641, // Required
          variables: {
            fullName: this.fullName || '',
            questionsOnItConsulting: this.questionsOnItConsulting || '',
            email: this.email || '',
            emailTo: this.emailTo || '',
            phoneNumber: this.phoneNumber || '',
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
      this.questionsOnItConsulting = null;
      this.agreeWithPrivacyPolicy = false;
      this.agreeToGetMadDevsDiscountOffers = false;
    }
  }
};
</script>
