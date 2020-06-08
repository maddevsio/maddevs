<template>
  <modal name="teams" :clickToClose="false">
    <img src="@/assets/img/common/close-icon.svg" class="close-modal" alt="Close modal" @click="$modal.hide('teams')">
    <ValidationObserver v-slot="{ invalid }">
      <form class="form"> 
        <div class="fields-list">
          <ValidationProvider class="modal-field-item field-item" rules="required" v-slot="{ classes, errors }">
            <p class="modal-field-name field-name required">Full Name</p>
            <input type="text" class="modal-entry-field entry-field" :class="classes" placeholder="John Smith" v-model="fullName">
            <span class="modal-error-text error-text">{{ errors[0] }}</span>
          </ValidationProvider>
          <ValidationProvider class="modal-field-item field-item" rules="email|required" v-slot="{ classes, errors }">
            <p class="modal-field-name field-name required">Work email</p>
            <input type="text" class="modal-entry-field entry-field" :class="classes" placeholder="your@mail.com" v-model="email">
            <span class="modal-error-text error-text">{{ errors[0] }}</span>
          </ValidationProvider>
          <ValidationProvider class="modal-field-item field-item" rules="phone" v-slot="{ classes, errors }">
            <p class="modal-field-name field-name">Phone number</p>
            <input type="text" class="modal-entry-field entry-field" :class="classes" placeholder="+1 (23X) XXX-XXXX" v-model="phoneNumber">
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
          @getPrivacyCheckboxState="getPrivacyCheckboxState"
          @getDiscountOffersCheckboxState="getDiscountOffersCheckboxState"
          :inputId="inputId"
        />
        <button 
          class="modal-button-default button-default red-text-and-border" 
          :disabled="invalid || !agreeWithPrivacyPolicy || !selectedTeamSize">
          Get a team of ultra fast coders
        </button>
      </form>
    </ValidationObserver>
  </modal>
</template>

<script>
import FormCheckboxes from '@/components/ui/form-checkboxes';
import RadioList from '@/components/ui/radio-list';

export default {
  name: 'frontend-modal',
  components: {
    FormCheckboxes,
    RadioList
  },
  data: () => ({
    fullName: null,
    email: null,
    phoneNumber: null,
    projectDescription: null,
    agreeWithPrivacyPolicy: false,
    agreeToGetMadDevsDiscountOffers: false,
    sectionIsRequired: true,
    selectedTeamSize: null,
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
    ]
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
      e.target.style.cssText = 'height: auto;';
      e.target.style.cssText = `height: ${e.target.scrollHeight}px`;
    }
  }
};
</script>
