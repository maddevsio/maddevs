<template>
  <div class="form"> 
    <div class="fields-list">
      <div class="modal-field-item field-item" rules="required|max:50">
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
      <div class="modal-field-item field-item" rules="email|required">
        <p class="modal-field-name field-name required">Work email</p>
        <input @input="$v.email.$touch" type="text" class="modal-entry-field entry-field" placeholder="your@mail.com" v-model="email">
        <!-- Erros -->
        <div v-if="$v.email.$dirty">
          <span class="modal-error-text error-text" v-if="!$v.email.required">This field is required.</span>
          <span class="modal-error-text error-text" v-if="!$v.email.email">
            Invalid email address. Please use your work email.
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
      :disabled="invalid || !agreeWithPrivacyPolicy || onSubmit"
      @click="sendForm(!invalid || agreeWithPrivacyPolicy)"
      class="modal-button"
      :loading="onSubmit"
    >
      Get Case Studies
    </UIButton>
  </div>
</template>

<script>
import { required, email, maxLength } from 'vuelidate/lib/validators';
import FormCheckboxes from '@/components/ui/form-checkboxes';
import UIButton from '@/components/ui/UIButton';

export default {
  name: 'case-studies-modal',
  components: {
    FormCheckboxes,
    UIButton
  },
  validations: {
    fullName: {
      required,
      maxLength: maxLength(50)
    },
    company: {
      maxLength: maxLength(300)
    },
    email: {
      required,
      email
    },
    phoneNumber: {
      phone
    }
  },
  data: () => ({
    modalName: 'get-case-studies-modal',
    fullName: null,
    email: null,
    emailTo: 'team@maddevs.io',
    agreeWithPrivacyPolicy: false,
    agreeToGetMadDevsDiscountOffers: false,
    inputId: 'case-studies',
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
          templateId: 304622, // Required
          variables: {
            fullName: this.fullName || '',
            email: this.email || '',
            emailTo: this.emailTo || '',
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
      this.agreeWithPrivacyPolicy = false;
      this.agreeToGetMadDevsDiscountOffers = false;
    }
  }
};
</script>
