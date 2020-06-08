<template>
  <modal name="technology-stack" :clickToClose="false">
    <img src="@/assets/img/common/close-icon.svg" class="close-modal" alt="Close modal" @click="$modal.hide('technology-stack')">
    <ValidationObserver v-slot="{ invalid }">
      <form class="form technology-stack"> 
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
          <ValidationProvider class="modal-field-item field-item" rules="max:500|required" v-slot="{ classes, errors }">
            <p class="modal-field-name field-name required">Your question on tech stack​</p>
            <textarea type="text" class="modal-entry-field entry-field textarea" :class="classes" placeholder="Which database should I use to create a portal for customer reviews?" v-model="techStackQuestion" @keydown="autosize($event)" rows="1"/>
            <span class="modal-error-text error-text">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <FormCheckboxes
          @getPrivacyCheckboxState="getPrivacyCheckboxState"
          @getDiscountOffersCheckboxState="getDiscountOffersCheckboxState"
          :inputId="inputId"
        />
        <button class="modal-button-default button-default red-text-and-border" :disabled="invalid || !agreeWithPrivacyPolicy">​Get advice on tech stack</button>
      </form>
    </ValidationObserver>
  </modal>
</template>

<script>
import FormCheckboxes from '@/components/ui/form-checkboxes';

export default {
  name: 'TechnologyStack',
  components: {
    FormCheckboxes
  },
  data: () => ({
    fullName: null,
    email: null,
    phoneNumber: null,
    techStackQuestion: null,
    agreeWithPrivacyPolicy: false,
    agreeToGetMadDevsDiscountOffers: false,
    inputId: 'technology-stack'
  }),
  methods: {
    getPrivacyCheckboxState(privacyState) {
      this.agreeWithPrivacyPolicy = privacyState;
    },
    getDiscountOffersCheckboxState(discountOffersState) {
      this.agreeToGetMadDevsDiscountOffers = discountOffersState;
    },
    autosize(e) {
      e.target.style.height = 'auto';
      e.target.style.height = `${e.target.scrollHeight}px`;
    }
  }
};
</script>

<style lang="scss" scoped>
  .form {
    textarea {
      height: 79px;
      min-height: 79px;
    }
  }

  @media only screen and (max-width: 768px) {
		.form {
      textarea {
        height: 60px;
        min-height: 60px;
      }
    }
  }

  @media only screen and (max-width: 565px) {
		.form {
      textarea {
        height: 79px;
        min-height: 79px;
      }
    }
  }

  @media only screen and (max-width: 330px) {
		.form {
      textarea {
        height: 102px;
        min-height: 102px;
      }
    }
  }
</style>
