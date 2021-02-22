<template>
  <ModalContainer :name="modalName" successModalID="get-case-studies-modal">
    <ValidationObserver v-slot="{ invalid }">
      <div class="form"> 
        <div class="fields-list">
          <ValidationProvider class="modal-field-item field-item" rules="required|max:50" v-slot="{ classes, errors }">
            <p class="modal-field-name field-name required">Full Name</p>
            <input type="text" class="modal-entry-field entry-field" :class="classes" placeholder="John Smith" v-model="fullName">
            <div class="modal-error-text error-text">{{ errors[0] }}</div>
          </ValidationProvider>
          <ValidationProvider class="modal-field-item field-item" rules="email|required" v-slot="{ classes, errors }">
            <p class="modal-field-name field-name required">Work email</p>
            <input type="text" class="modal-entry-field entry-field" :class="classes" placeholder="your@mail.com" v-model="email">
            <div class="modal-error-text error-text">{{ errors[0] }}</div>
          </ValidationProvider>
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
    </ValidationObserver>
  </ModalContainer>
</template>

<script>
import FormCheckboxes from '@/components/ui/form-checkboxes';
import ModalContainer from '@/containers/ModalContainer';
import UIButton from '@/components/ui/UIButton';

export default {
  name: 'case-studies-modal',
  components: {
    FormCheckboxes,
    ModalContainer,
    UIButton
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
    this.$nuxt.$on('resetForm', () => { // Reset checkboxes in form if user close modal 
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
