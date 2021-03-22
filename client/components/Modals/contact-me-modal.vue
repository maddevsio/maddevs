<template>
  <div class="form">
    <div class="fields-list">
      <div class="modal-field-item field-item">
        <p class="modal-field-name field-name required">Full Name</p>
        <input @input="$v.fullname.$touch" type="text" :class="{ 'invalid': $v.fullname.$error }" class="modal-entry-field entry-field" placeholder="John Smith" v-model="fullname">
        <!-- Erros -->
        <div v-if="$v.fullname.$dirty">
          <span class="modal-error-text error-text" v-if="!$v.fullname.required">This field is required.</span>
          <span class="modal-error-text error-text" v-if="!$v.fullname.maxLength">
            Sorry, the number of characters in this field should not exceed 50.
          </span>
        </div>
        <!-- End Erros -->
      </div>
      <div class="modal-field-item field-item">
        <p class="modal-field-name field-name">Company</p>
        <input @input="$v.company.$touch" type="text" :class="{ 'invalid': $v.company.$error }" class="modal-entry-field entry-field" placeholder="MyAwesomeCompany, Inc." v-model="company">
        <!-- Erros -->
        <div v-if="$v.company.$dirty">
          <span class="modal-error-text error-text" v-if="!$v.company.maxLength">
            Sorry, the number of characters in this field should not exceed 300.
          </span>
        </div>
        <!-- End Erros -->
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
        <!-- End Erros -->
      </div>
      <div class="modal-field-item field-item">
        <p class="modal-field-name field-name">Phone number</p>
        <input @input="phoneChangeHandler" type="text" :class="{ 'invalid': $v.phoneNumber.$error }" class="modal-entry-field entry-field" placeholder="+1 23X XXX-XXXX" v-model="phoneNumber">
        <!-- Erros -->
        <div v-if="$v.phoneNumber.$dirty">
          <span class="modal-error-text error-text" v-if="!$v.phoneNumber.phone">
            Sorry, this field can only contain numbers and characters specific for phone numbers.
          </span>
        </div>
        <!-- End Erros -->
      </div>
    </div>
    <FormCheckboxes
      ref="checkboxes"
      v-on:getPrivacyCheckboxState="agreeWithPrivacyPolicy = $event"
      v-on:getDiscountOffersCheckboxState="agreeToGetMadDevsDiscountOffers = $event"
      inputId="contact-me"
    />
    <UIButton
      class="modal-button"
      @click="submitForm(!$v.validationGroup.$invalid || agreeWithPrivacyPolicy)"
      :disabled="$v.validationGroup.$invalid || !agreeWithPrivacyPolicy"
    >
      Сontact Me
    </UIButton>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { required, email, maxLength } from 'vuelidate/lib/validators';
import { phone } from '@/helpers/validators';
import FormCheckboxes from '@/components/ui/form-checkboxes';
import UIButton from '@/components/ui/UIButton';
import { phoneHandler } from '@/mixins/phoneHandler';

export default {
  name: 'ContactMe',
  mixins: [phoneHandler],
  components: {
    FormCheckboxes,
    UIButton
  },
  validations: {
    fullname: {
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
    },
    validationGroup: ['fullname', 'company', 'email', 'phoneNumber']
  },
  data: () => ({
    fullname: '',
    email: '',
    phoneNumber: '',
    company: '',
    agreeWithPrivacyPolicy: false,
    agreeToGetMadDevsDiscountOffers: false
  }),
  mounted() {
    this.$nuxt.$on('resetCheckboxesInForm', () => { // Reset checkboxes in form if user close modal
      this.agreeWithPrivacyPolicy = false;
      this.agreeToGetMadDevsDiscountOffers = false;
    });
  },
  methods: {
    ...mapActions(['sendEmail', 'createNewLead']),

    submitForm(isValid) {
      if(!isValid) return;

      const lead = {
        fullname: this.fullname,
        email: this.email || '',
        company: this.company,
        phone: this.phoneNumber || '',
        type: 'contact-me'
      };

      const email = {
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
          modalTitle: 'Mad Devs Website Form'
        }
      };

      this.createNewLead(lead);
      this.sendEmail(email);

      this.resetForm();
      this.$parent.$emit('success');
    },
    
    resetForm() {
      this.$refs.checkboxes.reset();
      this.fullname = '';
      this.email = '';
      this.phoneNumber = '';
      this.company = '';
      this.agreeWithPrivacyPolicy = false;
      this.agreeToGetMadDevsDiscountOffers = false;
    }
  }
};
</script>
