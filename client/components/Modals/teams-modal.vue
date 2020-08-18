<template>
  <ModalContainer :name="modalName" successModalID="teams-modal">
    <ValidationObserver v-slot="{ invalid }">
      <div class="form"> 
        <div class="fields-list">
          <ValidationProvider class="modal-field-item field-item" rules="required|max:50" v-slot="{ classes, errors }">
            <p class="modal-field-name field-name required">Full Name</p>
            <input type="text" class="modal-entry-field entry-field" :class="classes" placeholder="John Smith" v-model="fullName">
            <span class="modal-error-text error-text">{{ errors[0] }}</span>
          </ValidationProvider>
          <ValidationProvider class="modal-field-item field-item" rules="email|required" v-slot="{ classes, errors }">
            <p class="modal-field-name field-name required">Work email</p>
            <input type="text" class="modal-entry-field entry-field" :class="classes" placeholder="your@mail.com" v-model="email">
            <span class="modal-error-text error-text">{{ errors[0] }}</span>
          </ValidationProvider>
          <ValidationProvider class="modal-field-item field-item" rules="phone|max:50" v-slot="{ classes, errors }">
            <p class="modal-field-name field-name">Phone number</p>
            <input type="text" class="modal-entry-field entry-field" :class="classes" placeholder="+1 23X XXX-XXXX" v-model="phoneNumber">
            <span class="modal-error-text error-text">{{ errors[0] }}</span>
          </ValidationProvider>
          <RadioList 
            @getTeamSize="getTeamSize"
            :inputId="inputId"
            :fieldName="fieldName"
            :emitMethodName="emitMethodName"
            :options="options"
            :sectionIsRequired="sectionIsRequired"
          />
          <ValidationProvider class="modal-field-item field-item" rules="max:500" v-slot="{ classes, errors }">
            <p class="modal-field-name field-name">Project description</p>
            <textarea type="text" class="modal-entry-field entry-field textarea" :class="classes" placeholder="Describe your project..." v-model="projectDescription" @keydown="autosize($event)" rows="1"/>
            <span class="modal-error-text error-text">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <FormCheckboxes
          ref="checkboxes"
          @getPrivacyCheckboxState="getPrivacyCheckboxState"
          @getDiscountOffersCheckboxState="getDiscountOffersCheckboxState"
          :inputId="inputId"
        />
        <UIButton
          name="Get a team of ultra fast coders"
          :disabled="invalid || !agreeWithPrivacyPolicy || !selectedTeamSize"
          @click="sendForm(!invalid || agreeWithPrivacyPolicy || selectedTeamSize)"
        />
      </div>
    </ValidationObserver>
  </ModalContainer>
</template>

<script>
import FormCheckboxes from '@/components/ui/form-checkboxes';
import RadioList from '@/components/ui/radio-list';
import ModalContainer from '@/containers/ModalContainer';
import UIButton from '@/components/ui/UIButton';

export default {
  name: 'frontend-modal',
  components: {
    FormCheckboxes,
    RadioList,
    ModalContainer,
    UIButton
  },
  data: () => ({
    form: null,
    modalName: 'teams-modal',
    fullName: null,
    email: null,
    emailTo: 'team@maddevs.io',
    phoneNumber: null,
    selectedTeamSize: null,
    projectDescription: null,
    agreeWithPrivacyPolicy: false,
    agreeToGetMadDevsDiscountOffers: false,
    sectionIsRequired: true,
    inputId: 'teams',
    fieldName: 'Expected team size',
    emitMethodName: 'getTeamSize',
    options: [
      {
        id: 'less-five',
        text: 'Less than 5'
      },
      {
        id: 'from-five-to-ten',
        text: 'From 5 to 10'
      },
      {
        id: 'more-than-ten',
        text: 'More than 10'
      }
    ],
    onSubmit: false
  }),
  methods: {
    getPrivacyCheckboxState(privacyState) {
      this.agreeWithPrivacyPolicy = privacyState;
    },
    getDiscountOffersCheckboxState(discountOffersState) {
      this.agreeToGetMadDevsDiscountOffers = discountOffersState;
    },
    getTeamSize(teamSize) {
      this.selectedTeamSize = teamSize;
    },
    autosize(e) {
      e.target.style.height = 'auto';
      e.target.style.height = `${e.target.scrollHeight}px`;
    },
    sendForm(isValid) {
      if (isValid === true && !this.onSubmit) {
        this.onSubmit = true;
        this.form = {
          templateId: 304637, // Required
          variables: {
            fullName: this.fullName || '',
            selectedTeamSize: this.selectedTeamSize || '',
            projectDescription: this.projectDescription || '',
            email: this.email || '',
            emailTo: this.emailTo || '',
            phoneNumber: this.phoneNumber || '',
            agreeWithPrivacyPolicy: this.agreeWithPrivacyPolicy ? 'Yes' : 'No',
            agreeToGetMadDevsDiscountOffers: this.agreeToGetMadDevsDiscountOffers ? 'Yes' : 'No'
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
      this.selectedTeamSize = null;
      this.projectDescription = null;
      this.form = null;
      this.agreeWithPrivacyPolicy = false;
      this.agreeToGetMadDevsDiscountOffers = false;
    }
  }
};
</script>
